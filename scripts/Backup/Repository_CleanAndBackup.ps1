# PowerShell Script to backup DebtFreePlanner repository
# This script copies the DebtFreePlanner repository to a temporary location,
# cleans unnecessary files based on .gitignore and additional patterns,
# compresses the cleaned directory into a ZIP file, and saves the ZIP file
# in specified locations.

# Generate timestamp in yyyyMMddHHmm format
$timestamp = Get-Date -Format "yyyyMMddHHmm"

# Define source and temporary directories
$sourceDir = "C:\Repository\DebtFreePlanner"
$tempDir = "C:\Repository\DebtFreePlanner_Backup_$timestamp"

# Define output ZIP file paths
$outputZip1 = "C:\Repository\DebtFreePlanner_$timestamp.zip"
$outputZip2 = "C:\Repository\DebtFreePlanner\scripts\backup\DebtFreePlanner_$timestamp.zip"

# Print starting message
Write-Host "Starting backup of DebtFreePlanner repository..."
Write-Host "Timestamp: $timestamp"

# Copy files with exclusions
Write-Host "Copying files to temporary directory, excluding unnecessary files..."

# Define exclusions
$excludedDirs = @("*.git*", "node_modules", "build", "dist", "out", ".cache", "cache", "tmp")
$excludedFiles = @("*.log", "*.tmp")

# Use robocopy to copy files with exclusions
$robocopyLog = "$env:TEMP\robocopy_log_$timestamp.txt"
$robocopyArgs = @(
    $sourceDir,
    $tempDir,
    "/E",
    "/XD"
) + $excludedDirs + @(
    "/XF"
) + $excludedFiles + @(
    "/R:0",
    "/W:0",
    "/NFL",  # No File List
    "/NDL",  # No Directory List
    "/NJH",  # No Job Header
    "/NJS",  # No Job Summary
    "/LOG:$robocopyLog"
)

# Execute robocopy
$robocopyProcess = Start-Process -FilePath "robocopy.exe" -ArgumentList $robocopyArgs -Wait -PassThru

if ($robocopyProcess.ExitCode -ge 8) {
    Write-Error "Robocopy failed with exit code $($robocopyProcess.ExitCode)"
    Exit 1
}

Write-Host "Files copied to temporary directory."

# Pattern-Based Cleaning
Write-Host "Cleaning unnecessary files based on .gitignore and additional patterns..."

# Function to convert .gitignore pattern to a valid PowerShell wildcard pattern
function Convert-GitignorePatternToWildcard {
    param (
        [string]$pattern
    )
    # Remove leading and trailing whitespace
    $pattern = $pattern.Trim()

    # Skip comments and empty lines
    if ($pattern -eq "" -or $pattern.StartsWith("#")) {
        return $null
    }

    # Handle negation patterns (not supported in this script)
    if ($pattern.StartsWith("!")) {
        Write-Warning "Negation pattern '!$pattern' is not supported."
        return $null
    }

    # Replace '**' with '*'
    $pattern = $pattern -replace "\*\*", "*"

    # Replace '/' with '\'
    $pattern = $pattern -replace "/", "\"

    # Escape square brackets
    $pattern = $pattern -replace "\[", "`["
    $pattern = $pattern -replace "\]", "`]"

    # Convert to PowerShell wildcard
    $wildcardPattern = $pattern -replace "\*", "*"
    $wildcardPattern = $wildcardPattern -replace "\?", "?"
    return $wildcardPattern
}

# Read .gitignore if it exists
$gitignorePath = Join-Path $sourceDir ".gitignore"
$patterns = @()
if (Test-Path $gitignorePath) {
    Write-Host "Reading .gitignore file..."
    $gitignoreContent = Get-Content $gitignorePath
    foreach ($line in $gitignoreContent) {
        $wildcardPattern = Convert-GitignorePatternToWildcard -pattern $line
        if ($wildcardPattern) {
            $patterns += $wildcardPattern
        }
    }
}

# Add additional patterns
$patterns += @(
    ".git",
    "node_modules",
    "*.log",
    "*.tmp",
    "build",
    "dist",
    "out",
    ".cache",
    "cache",
    "tmp"
)

# Remove duplicates and empty entries
$patterns = $patterns | Where-Object { $_ -ne "" } | Select-Object -Unique

# Remove files/folders matching patterns
foreach ($pattern in $patterns) {
    Write-Host "Deleting files/folders matching pattern: $pattern"
    try {
        # Use Get-ChildItem to find matching files and directories
        $items = Get-ChildItem -Path $tempDir -Recurse -Force -Include $pattern -ErrorAction SilentlyContinue
        foreach ($item in $items) {
            try {
                if ($item.PSIsContainer) {
                    Remove-Item -Recurse -Force -Path $item.FullName
                } else {
                    Remove-Item -Force -Path $item.FullName
                }
                Write-Host "Deleted: $($item.FullName)"
            } catch {
                Write-Warning "Failed to delete: $($item.FullName) - $_"
            }
        }
    } catch {
        Write-Warning "Pattern '$pattern' may not be valid: $_"
    }
}

# Compress the cleaned directory
Write-Host "Compressing the cleaned directory into ZIP file..."

# Ensure the Utilities\Backup directory exists
$backupDir = "scripts\backup"
if (-not (Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
}

# Compress the temp directory to the first output zip
Add-Type -AssemblyName System.IO.Compression.FileSystem
try {
    [System.IO.Compression.ZipFile]::CreateFromDirectory($tempDir, $outputZip1)
    Write-Host "Compressed ZIP saved to: $outputZip1"
} catch {
    Write-Error "Failed to compress directory: $_"
    Exit 1
}

# Copy the ZIP to the second location
try {
    Copy-Item -Path $outputZip1 -Destination $outputZip2 -Force
    Write-Host "Backup ZIP copied to: $outputZip2"
} catch {
    Write-Error "Failed to copy ZIP file to backup location: $_"
}

# Delete the temporary directory
Write-Host "Deleting temporary directory..."
try {
    Remove-Item -Recurse -Force -Path $tempDir
    Write-Host "Temporary directory deleted."
} catch {
    Write-Warning "Failed to delete temporary directory: $_"
}

# File and Size Reporting
Write-Host "Calculating ZIP file size and file count..."

try {
    $zipFile = $outputZip1
    $zipSize = (Get-Item $zipFile).Length / 1MB
    $zipSizeFormatted = "{0:N2}" -f $zipSize
    $zipArchive = [System.IO.Compression.ZipFile]::OpenRead($zipFile)
    $fileCount = $zipArchive.Entries.Count
    $zipArchive.Dispose()
    Write-Host "Final ZIP contains $fileCount files."
    Write-Host "ZIP file size: $zipSizeFormatted MB"
} catch {
    Write-Warning "Failed to calculate ZIP file details: $_"
}

Write-Host "Backup completed successfully."

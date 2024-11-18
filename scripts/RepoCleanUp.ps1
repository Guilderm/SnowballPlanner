# Define the names of directories and files to delete
$directoriesToDelete = @("node_modules", ".next", ".output", ".nuxt", "dist")
$filesToDelete = @("package-lock.json")

# Function to delete directories
function Remove-Directories {
    param (
        [string[]]$Dirs
    )
    foreach ($dir in $Dirs) {
        Get-ChildItem -Path . -Recurse -Directory -Force | Where-Object { $_.Name -eq $dir } | ForEach-Object {
            try {
                Remove-Item -Path $_.FullName -Recurse -Force -ErrorAction Stop
                Write-Host "Deleted directory: $($_.FullName)"
            }
            catch {
                Write-Warning "Failed to delete directory: $($_.FullName). Error: $_"
            }
        }
    }
}

# Function to delete files
function Remove-Files {
    param (
        [string[]]$Files
    )
    foreach ($file in $Files) {
        Get-ChildItem -Path . -Recurse -File -Force | Where-Object { $_.Name -eq $file } | ForEach-Object {
            try {
                Remove-Item -Path $_.FullName -Force -ErrorAction Stop
                Write-Host "Deleted file: $($_.FullName)"
            }
            catch {
                Write-Warning "Failed to delete file: $($_.FullName). Error: $_"
            }
        }
    }
}

# Preview the items to be deleted
Write-Host "### Preview of Directories to Delete ###"
Get-ChildItem -Path . -Recurse -Directory -Force | Where-Object { $directoriesToDelete -contains $_.Name } | Select-Object FullName

Write-Host "`n### Preview of Files to Delete ###"
Get-ChildItem -Path . -Recurse -File -Force | Where-Object { $filesToDelete -contains $_.Name } | Select-Object FullName

# Confirm before deletion
$confirmation = Read-Host "Do you want to proceed with deletion? (Y/N)"
if ($confirmation -eq 'Y' -or $confirmation -eq 'y') {
    Remove-Directories -Dirs $directoriesToDelete
    Remove-Files -Files $filesToDelete
    Write-Host "Deletion process completed."
}
else {
    Write-Host "Deletion process aborted."
}

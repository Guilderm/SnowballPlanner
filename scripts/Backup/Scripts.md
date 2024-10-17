# Scripts

```Powershell
Get-ChildItem -Recurse | Where-Object { $_.FullName -notlike "*node_modules*" -and $_.FullName -notlike "*.next*" } | ForEach-Object { $_.FullName }
```

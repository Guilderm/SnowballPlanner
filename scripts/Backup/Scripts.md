# Scripts

```Powershell
Get-ChildItem -Recurse | Where-Object { $_.FullName -notlike "*node_modules*" -and $_.FullName -notlike "_.next_" } | ForEach-Object { $\_.FullName }
Get-ChildItem -Recurse | Where-Object { $_.FullName -notlike "*node_modules*" -and $_.FullName -notlike "*.next*" } | ForEach-Object { $_.FullName }
```

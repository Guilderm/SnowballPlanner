# Scripts

```Powershell
Get-ChildItem -Recurse | Where-Object { $_.FullName -notlike "*node_modules*" -and $_.FullName -notlike "*.next*" -and $_.FullName -notlike "*.output*" } | ForEach-Object { $_.FullName }
```

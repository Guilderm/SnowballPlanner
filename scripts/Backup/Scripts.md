# Scripts

```Powershell
Get-ChildItem -Recurse | Where-Object { $_.FullName -notlike "*node_modules*" -and $_.FullName -notlike "*.next*" -and $_.FullName -notlike "*.output*" -and $_.FullName -notlike "*.nuxt*"-and $_.FullName -notlike "*dist*"} | ForEach-Object { $_.FullName }
```

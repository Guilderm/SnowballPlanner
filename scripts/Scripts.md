# Scripts

```Powershell
#TO get the Monorepo structore
Get-ChildItem -Recurse | Where-Object { $_.FullName -notlike "*node_modules*" -and $_.FullName -notlike "*.next*" -and $_.FullName -notlike "*.output*" -and $_.FullName -notlike "*.nuxt*"-and $_.FullName -notlike "*dist*"} | ForEach-Object { $_.FullName }

#To synk secrets
infisical agent --config .\agent-config-file.yaml

# TO bild docker immage for pwa-server
docker build -t pwa-server:local -f apps/pwa-server/Dockerfile .
docker build -t pwa-server:local -f Dockerfile .

docker run -p 3300:3300 -e PORT=3300 pwa-server:local

# Commands
npx depcheck
```

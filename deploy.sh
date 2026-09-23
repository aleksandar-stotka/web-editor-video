#!/bin/bash
echo "🚀 Building Nuxt project..."
npm run build

echo "📦 Uploading static files to server..."
scp -r .output/public/* root@209.38.95.234:/var/www/storylinecraft.com/

echo "🔄 Reloading Nginx on server..."
ssh root@209.38.95.234 "systemctl reload nginx"

echo "✅ Deploy complete! Check storylinecraft.com"

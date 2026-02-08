#!/bin/bash

# Deploy script for mi-portafolio
# Run this FROM the project directory: ./deploy.sh

set -e

echo "🚀 Deploying mi-portafolio..."

# Get the directory where the script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR" || { echo "❌ Cannot change to script directory"; exit 1; }

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Check if photo exists
if [ ! -f "src/assets/fp1.png" ]; then
    echo "⚠️  WARNING: src/assets/fp1.png not found!"
    echo "   Make sure to copy your photo before building."
    echo "   From your PC run:"
    echo "   scp path/to/fp1.png andrew@server:~/mi-portafolio/src/assets/"
    read -p "Continue without photo? (y/N): " confirm
    if [ "$confirm" != "y" ] && [ "$confirm" != "Y" ]; then
        echo "❌ Deployment cancelled"
        exit 1
    fi
fi

# Stop and rebuild containers
echo "🔄 Rebuilding container..."
docker compose down 2>/dev/null || true
docker compose up -d --build

# Clean up old images
echo "🧹 Cleaning up old images..."
docker image prune -f

echo ""
echo "✅ Deployment complete!"
echo "🌐 Portfolio is live at port 3003"
docker ps --filter "name=mi-portafolio" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

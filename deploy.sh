#!/bin/bash

# Deploy manual de mi-portafolio (fuera de Dokploy)
# Ejecutar desde la raiz del proyecto: ./deploy.sh

set -e

echo "🚀 Desplegando mi-portafolio..."

# Directorio donde vive el script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR" || { echo "❌ No se pudo entrar al directorio del script"; exit 1; }

# Actualizar codigo (opcional si GitHub falla)
echo "📥 Actualizando codigo desde origin/main..."
git pull origin main || echo "⚠️  git pull fallo, se continua con los archivos locales"

# Reconstruir (un solo compose, sin overrides)
echo "🔄 Reconstruyendo contenedor..."
docker compose down --remove-orphans 2>/dev/null || true
docker compose up -d --build --remove-orphans

# Limpiar imagenes sin usar
echo "🧹 Limpiando imagenes sin usar..."
docker image prune -f

echo ""
echo "✅ Despliegue completo"
echo "🌐 http://<IP_DEL_SERVIDOR>:3003"
docker ps --filter "name=portafolio" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

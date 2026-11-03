# ---------- Build stage ----------
FROM node:22-alpine AS builder

WORKDIR /app

# Sin telemetría: evita una llamada de red extra durante el build
ENV ASTRO_TELEMETRY_DISABLED=1

# Solo los manifiestos primero -> mejor cacheado de capas
COPY package.json package-lock.json ./

# npm ci (reproducible, usa package-lock.json) + reintentos:
# el DNS del servidor a veces falla y sin reintentos el build muere.
# El cache de npm sobrevive entre builds: si el registro se cae, el
# build sigue funcionando con los paquetes ya descargados.
RUN --mount=type=cache,target=/root/.npm \
    npm ci --no-audit --no-fund --prefer-offline \
      --fetch-retries=5 \
      --fetch-retry-mintimeout=10000 \
      --fetch-retry-maxtimeout=60000

# Código fuente
COPY . .

RUN npm run build

# ---------- Runtime stage ----------
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]

#!/bin/sh
# create_env.sh — yaratiladigan .env fayl
touch .env
cat > .env <<'ENV'
SECRET_KEY=Ozodjon2007
ALLOWED_HOSTS=localhost,127.0.1,khasanoff.uz,www.khasanoff.uz

# Database configuration
POSTGRES_DB=portfolio
POSTGRES_USER=
POSTGRES_PASSWORD=
DB_HOST=localhost
DB_PORT=5432

# Telegram Bot configuration
TOKEN=
CHAT_ID=
ENV

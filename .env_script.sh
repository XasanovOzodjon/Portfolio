#!/bin/sh
# create_env.sh — yaratiladigan .env fayl
touch .env
cat > .env <<'ENV'
SECRET_KEY=Ozodjon2007

# Database configuration
POSTGRES_DB=portfolio
POSTGRES_USER=ozod
POSTGRES_PASSWORD=anime
DB_HOST=localhost
DB_PORT=5432

# Telegram Bot configuration
TOKEN=8282178878:AAHTekONTn2i7VuMn0cx9Zr6TsyyIkYCyWY
CHAT_ID=6295573556

STRIPE_SECRET_KEY=Ozodjon2007
STRIPE_WEBHOOK_SECRET=Ozodjon2007
ENV

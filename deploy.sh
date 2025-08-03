#!/bin/bash

echo "🚀 Deploying to Railway..."

# Install Railway CLI if not installed
if ! command -v railway &> /dev/null; then
    echo "Installing Railway CLI..."
    npm install -g @railway/cli
fi

# Login to Railway (if not already logged in)
railway login

# Deploy the application
railway up

# Run database migrations
echo "🗄️  Running database migrations..."
railway run npx prisma migrate deploy

# Seed the database (optional)
echo "🌱 Seeding database..."
railway run npm run prisma:seed

echo "✅ Deployment complete!"
echo "📚 API Documentation: https://your-app.railway.app/api/docs"
echo "🔍 Health Check: https://your-app.railway.app/health"

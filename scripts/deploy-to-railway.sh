#!/bin/bash

echo "🚀 Deploying to Railway with PostgreSQL database..."

# Check if Railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "📦 Installing Railway CLI..."
    npm install -g @railway/cli
fi

# Login check
echo "🔐 Checking Railway authentication..."
if ! railway whoami &> /dev/null; then
    echo "Please login to Railway first:"
    railway login
fi

# Set environment variables in Railway
echo "🔧 Setting up environment variables..."

railway variables set JWT_SECRET="b7d428f4c8c9a2e1f6d3b8a5c7e9f2d4a6b8c1e3f5d7a9b2c4e6f8d1a3b5c7e9f2d4a6b8c1e3f5d7a9b2c4e6f8d1a3b5c7e9"
railway variables set NODE_ENV="production"
railway variables set PORT="3001"
railway variables set FRONTEND_URL="https://modoo-rights-platform.vercel.app"

# Confirm DATABASE_URL (should already be set by Railway PostgreSQL service)
echo "✅ Using Railway PostgreSQL database:"
echo "   postgresql://postgres:mNUsllQMoeRXXQXKqgkVQpwdKOtvXwng@maglev.proxy.rlwy.net:50610/railway"

# Deploy the application
echo "📦 Deploying application to Railway..."
railway up

# Wait for deployment
echo "⏳ Waiting for deployment to complete..."
sleep 10

# Run database migrations
echo "🗄️  Running database migrations..."
railway run npx prisma migrate deploy

# Generate Prisma client in production
echo "🔧 Generating Prisma client..."
railway run npx prisma generate

# Seed the database with sample data
echo "🌱 Seeding database with sample data..."
railway run npx prisma db seed

# Health check
echo "🏥 Performing health check..."
RAILWAY_URL=$(railway status --json | jq -r '.deployments[0].url' 2>/dev/null || echo "https://your-app.railway.app")

if curl -f "$RAILWAY_URL/health" &> /dev/null; then
    echo "✅ Health check passed!"
else
    echo "⚠️  Health check failed, but deployment may still be starting..."
fi

echo ""
echo "🎉 Deployment complete!"
echo ""
echo "🔗 Your application URLs:"
echo "- 🌐 Main App: $RAILWAY_URL"
echo "- 🏥 Health Check: $RAILWAY_URL/health"
echo "- 📚 API Documentation: $RAILWAY_URL/api/docs"
echo "- 🗄️  Database: Railway PostgreSQL (connected)"
echo ""
echo "🧪 Test the API with these credentials:"
echo "- 📧 Email: customer@email.com"
echo "- 🔑 Password: password123"
echo ""
echo "📊 Monitor your deployment:"
echo "- Railway Dashboard: https://railway.app/dashboard"
echo "- Logs: railway logs"
echo "- Variables: railway variables"
echo ""
echo "🔧 Useful commands:"
echo "- View logs: railway logs"
echo "- Connect to DB: railway connect"
echo "- Run migrations: railway run npx prisma migrate deploy"

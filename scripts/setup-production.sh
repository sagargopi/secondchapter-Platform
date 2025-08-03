#!/bin/bash

echo "🏭 Setting up production environment..."

# Create production environment file
cat > .env.production << EOF
# Production Environment Configuration
NODE_ENV=production
PORT=3001

# Database (Railway PostgreSQL)
DATABASE_URL="postgresql://postgres:mNUsllQMoeRXXQXKqgkVQpwdKOtvXwng@maglev.proxy.rlwy.net:50610/railway"

# JWT Secret (Production)
JWT_SECRET="b7d428f4c8c9a2e1f6d3b8a5c7e9f2d4a6b8c1e3f5d7a9b2c4e6f8d1a3b5c7e9f2d4a6b8c1e3f5d7a9b2c4e6f8d1a3b5c7e9"

# CORS Configuration
FRONTEND_URL="https://modoo-rights-platform.vercel.app"

# Railway Configuration
RAILWAY_STATIC_URL="https://modoo-rights-platform.railway.app"
EOF

echo "✅ Production environment file created!"

# Set Railway environment variables
echo "🔧 Configuring Railway environment variables..."

railway variables set NODE_ENV="production"
railway variables set JWT_SECRET="b7d428f4c8c9a2e1f6d3b8a5c7e9f2d4a6b8c1e3f5d7a9b2c4e6f8d1a3b5c7e9f2d4a6b8c1e3f5d7a9b2c4e6f8d1a3b5c7e9"
railway variables set FRONTEND_URL="https://modoo-rights-platform.vercel.app"
railway variables set PORT="3001"

echo "✅ Railway environment variables configured!"

# Verify database connection
echo "🔍 Verifying database connection..."
node scripts/verify-connection.js

echo ""
echo "🎯 Production setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Run: ./scripts/deploy-to-railway.sh"
echo "2. Deploy frontend to Vercel"
echo "3. Update CORS settings if needed"
echo "4. Test the full application"

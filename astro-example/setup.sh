#!/bin/bash

echo "🚀 Setting up Astro Example..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
    echo ""
    echo "🎉 Setup complete!"
    echo ""
    echo "To start the development server:"
    echo "  cd astro-example"
    echo "  npm run dev"
    echo ""
    echo "Then visit: http://localhost:4321"
    echo ""
    echo "Available pages:"
    echo "  • Home: http://localhost:4321/"
    echo "  • Teaching: http://localhost:4321/teaching/"
    echo ""
    echo "Features to test:"
    echo "  ✅ Theme toggle (persists across pages)"
    echo "  ✅ Navigation highlighting"
    echo "  ✅ Responsive design"
    echo "  ✅ Proper styling for all components"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

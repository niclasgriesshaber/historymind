#!/bin/bash

# HistoryMind Deployment Script
echo "🚀 HistoryMind Deployment Script"
echo "================================="

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Not in a git repository. Please initialize git first."
    exit 1
fi

# Add all changes
echo "📝 Adding changes to git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit."
    exit 0
fi

# Commit changes
echo "💾 Committing changes..."
git commit -m "Update HistoryMind website - $(date '+%Y-%m-%d %H:%M:%S')"

# Push to main branch
echo "🚀 Pushing to main branch..."
git push origin main

echo ""
echo "✅ Deployment triggered!"
echo "⏱️  Your website will be rebuilt in ~3-5 minutes"
echo "🌐 Check status at: https://github.com/your-username/HistoryMind/actions"
echo "🔗 Live site: https://historymind.ai"

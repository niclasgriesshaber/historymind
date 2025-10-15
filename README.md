# HistoryMind

Papers and Data for Economic Historians

## Local Development

To run the website locally, you have several options:

### Option 1: Python HTTP Server (Recommended)
```bash
# Navigate to the project directory
cd /Users/niclasgriesshaber/Desktop/HistoryMind

# Start the server
python3 -m http.server 8000

# Or use the npm script
npm start
```

Then open your browser and go to: http://localhost:8000

### Option 2: Node.js HTTP Server
If you have Node.js installed:
```bash
# Install a simple HTTP server
npm install -g http-server

# Start the server
http-server -p 8000
```

### Option 3: Live Server (VS Code Extension)
If you're using VS Code, install the "Live Server" extension and right-click on `index.html` → "Open with Live Server"

## Project Structure
```
HistoryMind/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── package.json        # Project configuration
└── README.md           # This file
```

## Features
- Clean, modern design
- Responsive layout
- Gradient background
- Hover effects
- Mobile-friendly

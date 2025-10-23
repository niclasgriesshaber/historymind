const fs = require('fs');
const path = require('path');

// Create dist directory
const distDir = './dist';
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

// Function to copy directory recursively
function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

// Copy HTML files
const htmlFiles = ['index.html', 'sampled-pdfs.html', 'patent-entry-extraction.html', 'full-dataset.html'];
htmlFiles.forEach(file => {
    if (fs.existsSync(file)) {
        fs.copyFileSync(file, path.join(distDir, file));
    }
});

// Copy CSS and JS files
['styles.css', 'script.js'].forEach(file => {
    if (fs.existsSync(file)) {
        fs.copyFileSync(file, path.join(distDir, file));
    }
});

// Copy directories
['data', 'sampled-pdfs'].forEach(dir => {
    if (fs.existsSync(dir)) {
        copyDir(dir, path.join(distDir, dir));
    }
});

// Add cache busting to HTML files
const timestamp = Date.now();
const htmlFilesInDist = fs.readdirSync(distDir).filter(file => file.endsWith('.html'));

htmlFilesInDist.forEach(file => {
    const filePath = path.join(distDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Update cache busting timestamps
    content = content.replace(/v4-\d+/g, `v4-${timestamp}`);
    content = content.replace(/\?v=\d+&t=\d+/g, `?v=6&t=${timestamp}`);
    
    fs.writeFileSync(filePath, content);
});

console.log('✅ Build completed successfully!');
console.log(`📁 Output directory: ${distDir}`);
console.log(`🕒 Cache busting timestamp: ${timestamp}`);

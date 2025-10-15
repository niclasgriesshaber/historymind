// HistoryMind Navigation System
class HistoryMindApp {
    constructor() {
        this.currentPage = 'home';
        this.pdfFiles = [
            'Patentamt_1878_sampled.pdf', 'Patentamt_1879_sampled.pdf',
            'Patentamt_1880_sampled.pdf', 'Patentamt_1881_sampled.pdf', 'Patentamt_1882_sampled.pdf',
            'Patentamt_1883_sampled.pdf', 'Patentamt_1884_sampled.pdf', 'Patentamt_1885_sampled.pdf',
            'Patentamt_1886_sampled.pdf', 'Patentamt_1887_sampled.pdf', 'Patentamt_1888_sampled.pdf',
            'Patentamt_1889_sampled.pdf', 'Patentamt_1890_sampled.pdf', 'Patentamt_1891_sampled.pdf',
            'Patentamt_1892_sampled.pdf', 'Patentamt_1893_sampled.pdf', 'Patentamt_1894_sampled.pdf',
            'Patentamt_1895_sampled.pdf', 'Patentamt_1896_sampled.pdf', 'Patentamt_1897_sampled.pdf',
            'Patentamt_1898_sampled.pdf', 'Patentamt_1899_sampled.pdf', 'Patentamt_1900_sampled.pdf',
            'Patentamt_1901_sampled.pdf', 'Patentamt_1902_sampled.pdf', 'Patentamt_1903_sampled.pdf',
            'Patentamt_1904_sampled.pdf', 'Patentamt_1905_sampled.pdf', 'Patentamt_1906_sampled.pdf',
            'Patentamt_1907_sampled.pdf', 'Patentamt_1908_sampled.pdf', 'Patentamt_1909_sampled.pdf',
            'Patentamt_1910_sampled.pdf', 'Patentamt_1911_sampled.pdf', 'Patentamt_1912_sampled.pdf',
            'Patentamt_1913_sampled.pdf', 'Patentamt_1914_sampled.pdf', 'Patentamt_1915_sampled.pdf',
            'Patentamt_1916_sampled.pdf', 'Patentamt_1917_sampled.pdf', 'Patentamt_1918_sampled.pdf'
        ];
        this.init();
    }

    init() {
        this.bindEvents();
        this.showHomePage();
    }

    bindEvents() {
        // Paper card click
        document.addEventListener('click', (e) => {
            if (e.target.closest('.paper-card')) {
                e.preventDefault();
                this.showMainContentPage();
            }
        });
    }

    showHomePage() {
        const container = document.querySelector('.container');
        container.innerHTML = `
            <header class="header">
                <h1 class="site-title">HistoryMind</h1>
                <p class="site-subtitle">Data Quality Validation for Economic History Papers</p>
                <div class="breadcrumb">
                    <span class="breadcrumb-item clickable" onclick="app.showHomePage()">Home</span>
                </div>
            </header>
            
            <main class="main-content">
                <div class="paper-card">
                    <h2 class="paper-title">AI for Historical Dataset Construction:<br>Patent Statistics of the German Empire (1877 - 1918)</h2>
                    <div class="paper-meta">
                        <span class="paper-year">2025</span>
                        <span class="paper-type">Research Paper</span>
                    </div>
                </div>
            </main>
            
            <footer class="footer">
                <p>&copy; 2025 HistoryMind.ai. All rights reserved.</p>
            </footer>
        `;
        this.currentPage = 'home';
    }

    showMainContentPage() {
        const container = document.querySelector('.container');
        container.innerHTML = `
            <header class="header">
                <h1 class="site-title">HistoryMind</h1>
                <p class="site-subtitle">Data Quality Validation for Economic History Papers</p>
                <div class="breadcrumb">
                    <span class="breadcrumb-item clickable" onclick="app.showHomePage()">Home</span>
                    <span class="breadcrumb-separator">›</span>
                    <span class="breadcrumb-item">AI for Historical Dataset Construction: Patent Statistics of the German Empire (1877 - 1918)</span>
                </div>
            </header>
            
            <main class="main-content">
                <div class="content-page">
                    <div class="content-items">
                        <div class="content-item clickable" onclick="app.showSampledPDFs()">
                            <span class="item-number">📁</span>
                            <span class="item-text">Sampled PDFs</span>
                        </div>
                        
                        <div class="content-item clickable" onclick="app.showCharacterErrorPage()">
                            <span class="item-number">1.</span>
                            <span class="item-text">Character Error Rate</span>
                        </div>
                        
                        <div class="content-item clickable" onclick="app.showPatentExtractionPage()">
                            <span class="item-number">2.</span>
                            <span class="item-text">Patent Entry Extraction based on Archival Image Scans</span>
                        </div>
                        
                        <div class="content-item clickable" onclick="app.showVariableExtractionPage()">
                            <span class="item-number">3.</span>
                            <span class="item-text">Variable Extraction based on extracted Patent Entries</span>
                        </div>
                    </div>
                </div>
            </main>
            
            <footer class="footer">
                <p>&copy; 2025 HistoryMind.ai. All rights reserved.</p>
            </footer>
        `;
        this.currentPage = 'main';
    }

    showSampledPDFs() {
        const container = document.querySelector('.container');
        container.innerHTML = `
            <header class="header">
                <h1 class="site-title">HistoryMind</h1>
                <p class="site-subtitle">Data Quality Validation for Economic History Papers</p>
                <div class="breadcrumb">
                    <span class="breadcrumb-item clickable" onclick="app.showHomePage()">Home</span>
                    <span class="breadcrumb-separator">›</span>
                    <span class="breadcrumb-item clickable" onclick="app.showMainContentPage()">Research Paper</span>
                    <span class="breadcrumb-separator">›</span>
                    <span class="breadcrumb-item">Sampled PDFs</span>
                </div>
            </header>
            
            <main class="main-content">
                <div class="pdf-section">
                    <div class="pdf-header">
                        <h2 class="pdf-section-title">Sampled PDFs</h2>
                        <button class="download-all-btn" onclick="app.downloadAllPDFs()">
                            Download All Sampled PDFs
                        </button>
                    </div>
                    
                    <div class="pdf-grid" id="pdfGrid">
                        ${this.generatePDFTiles()}
                    </div>
                </div>
            </main>
            
            <footer class="footer">
                <p>&copy; 2025 HistoryMind.ai. All rights reserved.</p>
            </footer>
        `;
    }

    generatePDFTiles() {
        return this.pdfFiles.map(filename => {
            const year = filename.match(/Patentamt_(\d{4})_sampled\.pdf/)[1];
            return `
                <div class="pdf-tile clickable" onclick="app.showPDFPreview('${filename}')">
                    <div class="pdf-year">${year}</div>
                </div>
            `;
        }).join('');
    }

    showCharacterErrorPage() {
        window.location.href = 'data/character_error_rate.html';
    }

    showVariableExtractionPage() {
        window.location.href = 'data/variable_extraction_report.html';
    }

    showPatentExtractionPage() {
        const container = document.querySelector('.container');
        container.innerHTML = `
            <header class="header">
                <h1 class="site-title">HistoryMind</h1>
                <p class="site-subtitle">Data Quality Validation for Economic History Papers</p>
                <div class="breadcrumb">
                    <span class="breadcrumb-item clickable" onclick="app.showHomePage()">Home</span>
                    <span class="breadcrumb-separator">›</span>
                    <span class="breadcrumb-item clickable" onclick="app.showMainContentPage()">Research Paper</span>
                    <span class="breadcrumb-separator">›</span>
                    <span class="breadcrumb-item">Patent Entry Extraction</span>
                </div>
            </header>
            
            <main class="main-content">
                <div class="content-page">
                    <h2 class="content-title">Patent Entry Extraction based on Archival Image Scans</h2>
                    
                    <div class="content-items">
                        <div class="content-item clickable" onclick="app.showComingSoon('Patent Entry Matching before Repairing Page Breaks')">
                            <span class="item-number">a.</span>
                            <span class="item-text">Patent Entry Matching before Repairing Page Breaks</span>
                        </div>
                        
                        <div class="content-item clickable" onclick="app.showComingSoon('Patent Entry Matching after Repairing Page Breaks')">
                            <span class="item-number">b.</span>
                            <span class="item-text">Patent Entry Matching after Repairing Page Breaks</span>
                        </div>
                    </div>
                </div>
            </main>
            
            <footer class="footer">
                <p>&copy; 2025 HistoryMind.ai. All rights reserved.</p>
            </footer>
        `;
    }


    showPDFPreview(filename) {
        const container = document.querySelector('.container');
        container.innerHTML = `
            <div class="pdf-fullscreen-container">
                <div class="pdf-controls">
                    <div class="pdf-info">
                        <span class="pdf-filename">${filename}</span>
                    </div>
                    <div class="pdf-actions">
                        <button class="download-btn" onclick="app.downloadPDF('${filename}')">Download PDF</button>
                        <button class="back-btn" onclick="app.showSampledPDFs()">Back to PDFs</button>
                    </div>
                </div>
                <div class="pdf-fullscreen-viewer">
                    <iframe src="data/sampled_pdfs/${filename}#page=1&view=FitH" class="pdf-fullscreen-iframe" type="application/pdf"></iframe>
                </div>
            </div>
        `;
    }

    showComingSoon(title) {
        const container = document.querySelector('.container');
        container.innerHTML = `
            <header class="header">
                <h1 class="site-title">HistoryMind</h1>
                <p class="site-subtitle">Data Quality Validation for Economic History Papers</p>
                <div class="breadcrumb">
                    <span class="breadcrumb-item clickable" onclick="app.showHomePage()">Home</span>
                    <span class="breadcrumb-separator">›</span>
                    <span class="breadcrumb-item clickable" onclick="app.showMainContentPage()">Research Paper</span>
                    <span class="breadcrumb-separator">›</span>
                    <span class="breadcrumb-item">${title}</span>
                </div>
            </header>
            
            <main class="main-content">
                <div class="coming-soon">
                    <h2>${title}</h2>
                    <p>This section is coming soon. Check back later for updates!</p>
                    <button class="back-btn" onclick="app.showMainContentPage()">Back to Papers</button>
                </div>
            </main>
            
            <footer class="footer">
                <p>&copy; 2025 HistoryMind.ai. All rights reserved.</p>
            </footer>
        `;
    }

    downloadPDF(filename) {
        const link = document.createElement('a');
        link.href = `data/sampled_pdfs/${filename}`;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    async downloadAllPDFs() {
        try {
            // Show loading state
            const button = document.querySelector('.download-all-btn');
            const originalText = button.textContent;
            button.textContent = 'Creating ZIP...';
            button.disabled = true;

            // Check if JSZip is available
            if (typeof JSZip === 'undefined') {
                throw new Error('JSZip library not loaded');
            }

            // Create a new JSZip instance
            const zip = new JSZip();

            // Add all PDF files to the zip
            for (const filename of this.pdfFiles) {
                try {
                    const response = await fetch(`data/sampled_pdfs/${filename}`);
                    if (response.ok) {
                        const blob = await response.blob();
                        zip.file(filename, blob);
                    }
                } catch (error) {
                    console.warn(`Failed to load ${filename}:`, error);
                }
            }

            // Generate the zip file
            const zipBlob = await zip.generateAsync({ type: 'blob' });
            
            // Create download link
            const link = document.createElement('a');
            link.href = URL.createObjectURL(zipBlob);
            link.download = 'HistoryMind_Sampled_PDFs_1878-1918.zip';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);

            // Reset button
            button.textContent = originalText;
            button.disabled = false;

        } catch (error) {
            console.error('Error creating zip file:', error);
            alert('Error creating zip file. Please try again or download individual PDFs.');
            
            // Reset button
            const button = document.querySelector('.download-all-btn');
            button.textContent = 'Download All Sampled PDFs';
            button.disabled = false;
        }
    }

    async loadJSZip() {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
            script.onload = () => resolve(window.JSZip);
            script.onerror = () => reject(new Error('Failed to load JSZip library'));
            document.head.appendChild(script);
        });
    }
}

// Initialize the app
const app = new HistoryMindApp();


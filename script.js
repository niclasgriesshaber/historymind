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
                        
                        <div class="content-item clickable" onclick="app.showFullDatasetOptions()">
                            <span class="item-number">📁</span>
                            <span class="item-text">Full Dataset</span>
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

    showFullDatasetOptions() {
        const container = document.querySelector('.container');
        container.innerHTML = `
            <header class="header">
                <h1 class="site-title">HistoryMind</h1>
                <p class="site-subtitle">Data Quality Validation for Economic History Papers</p>
                <div class="breadcrumb">
                    <span class="breadcrumb-item clickable" onclick="app.showHomePage()">Home</span>
                    <span class="breadcrumb-separator">›</span>
                    <span class="breadcrumb-item clickable" onclick="app.showMainContentPage()">AI for Historical Dataset Construction: Patent Statistics of the German Empire (1877 - 1918)</span>
                    <span class="breadcrumb-separator">›</span>
                    <span class="breadcrumb-item">Full Dataset</span>
                </div>
            </header>
            
            <main class="main-content">
                <div class="content-page">
                    <div class="content-items">
                        <div class="content-item clickable" onclick="app.downloadCSV()">
                            <span class="item-number">CSV</span>
                            <span class="item-text">Download</span>
                        </div>
                        
                        <div class="content-item clickable" onclick="app.downloadXLSX()">
                            <span class="item-number">XLSX</span>
                            <span class="item-text">Download</span>
                        </div>
                    </div>
                </div>
            </main>
            
            <footer class="footer">
                <p>&copy; 2025 HistoryMind.ai. All rights reserved.</p>
            </footer>
        `;
        this.currentPage = 'full-dataset';
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
        const currentIndex = this.pdfFiles.indexOf(filename);
        const prevFile = currentIndex > 0 ? this.pdfFiles[currentIndex - 1] : null;
        const nextFile = currentIndex < this.pdfFiles.length - 1 ? this.pdfFiles[currentIndex + 1] : null;
        
        const container = document.querySelector('.container');
        container.innerHTML = `
            <div class="pdf-fullscreen-container">
                <div class="pdf-controls">
                    <div class="pdf-navigation">
                        <button class="nav-btn prev-btn" ${!prevFile ? 'disabled' : ''} onclick="app.smoothTransition('${prevFile || ''}')" title="Previous PDF">
                            ←
                        </button>
                        <span class="pdf-counter">${currentIndex + 1} of ${this.pdfFiles.length}</span>
                        <button class="nav-btn next-btn" ${!nextFile ? 'disabled' : ''} onclick="app.smoothTransition('${nextFile || ''}')" title="Next PDF">
                            →
                        </button>
                    </div>
                    <div class="pdf-info">
                        <span class="pdf-filename">${filename}</span>
                    </div>
                    <div class="pdf-actions">
                        <button class="compare-btn" onclick="app.showComparison('${filename}')">Compare with LLM Transcriptions</button>
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

    smoothTransition(filename) {
        const iframe = document.querySelector('.pdf-fullscreen-iframe');
        const filenameSpan = document.querySelector('.pdf-filename');
        const counterSpan = document.querySelector('.pdf-counter');
        
        if (!iframe) return;
        
        // Start fade out
        iframe.style.opacity = '0';
        iframe.style.transition = 'opacity 0.2s ease';
        
        setTimeout(() => {
            // Update iframe source
            iframe.src = `data/sampled_pdfs/${filename}#page=1&view=FitH`;
            
            // Update filename and counter
            const currentIndex = this.pdfFiles.indexOf(filename);
            filenameSpan.textContent = filename;
            counterSpan.textContent = `${currentIndex + 1} of ${this.pdfFiles.length}`;
            
            // Update navigation buttons
            const prevFile = currentIndex > 0 ? this.pdfFiles[currentIndex - 1] : null;
            const nextFile = currentIndex < this.pdfFiles.length - 1 ? this.pdfFiles[currentIndex + 1] : null;
            
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            
            if (prevBtn) {
                prevBtn.disabled = !prevFile;
                prevBtn.onclick = prevFile ? () => app.smoothTransition(prevFile) : null;
            }
            
            if (nextBtn) {
                nextBtn.disabled = !nextFile;
                nextBtn.onclick = nextFile ? () => app.smoothTransition(nextFile) : null;
            }
            
            // Fade back in
            setTimeout(() => {
                iframe.style.opacity = '1';
            }, 100);
        }, 200);
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

    openCharacterErrorRate() {
        window.open('data/character_error_rate.html', '_blank');
    }

    async showComparison(filename) {
        const year = filename.match(/Patentamt_(\d{4})_sampled\.pdf/)[1];
        
        try {
            // Fetch the character error rate HTML
            const response = await fetch('data/character_error_rate.html');
            const html = await response.text();
            
            // Parse the HTML to extract the specific year's LLM transcription
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // Find all sections with three-diff-section class
            const sections = doc.querySelectorAll('section.three-diff-section');
            let targetSection = null;
            
            // Look for the section that matches our filename
            for (const section of sections) {
                const heading = section.querySelector('h2.diff-file-heading');
                if (heading && heading.textContent.includes(filename)) {
                    targetSection = section;
                    break;
                }
            }
            
            if (targetSection) {
                // Extract only the LLM transcription part
                const llmContainer = targetSection.querySelector('.text-container .llm-header');
                if (llmContainer) {
                    // Find the LLM transcription content
                    const llmContent = llmContainer.parentElement.querySelector('.text-content');
                    if (llmContent) {
                        // Create a clean LLM transcription display
                        const llmData = this.createLLMTranscriptionDisplay(targetSection, llmContent.textContent);
                        this.showSideBySideComparison(filename, llmData);
                    } else {
                        alert(`No LLM transcription content found for ${filename}`);
                    }
                } else {
                    alert(`No LLM transcription section found for ${filename}`);
                }
            } else {
                alert(`No transcription data found for ${filename}`);
            }
        } catch (error) {
            console.error('Error loading comparison data:', error);
            alert('Error loading LLM transcription data');
        }
    }

    createLLMTranscriptionDisplay(section, llmContent) {
        // Extract the LLM transcription with original highlighting
        const llmContainer = section.querySelector('.text-container .llm-header');
        if (llmContainer) {
            const llmTextContainer = llmContainer.parentElement.querySelector('.text-content');
            if (llmTextContainer) {
                // Get the HTML content to preserve highlighting
                let htmlContent = llmTextContainer.innerHTML;
                
                // Clean up the HTML but preserve highlighting and newlines
                htmlContent = htmlContent.trim();
                
                // Remove any leading whitespace from the first line
                htmlContent = htmlContent.replace(/^\s+/, '');
                
                // Return HTML with preserved highlighting and newlines
                return `
                    <div class="llm-transcription-only" style="text-indent: 0 !important; margin: 0 !important; padding: 0.5rem !important; white-space: pre-wrap; font-family: 'Courier New', monospace; line-height: 1.6; text-align: left !important;">
                        ${htmlContent}
                    </div>
                `;
            }
        }
        
        // Fallback to plain text if highlighting not found
        return `
            <div class="llm-transcription-only" style="text-indent: 0 !important; margin: 0 !important; padding: 0.5rem !important; white-space: pre-wrap; font-family: 'Courier New', monospace; line-height: 1.6; text-align: left !important;">
                ${llmContent}
            </div>
        `;
    }

    showSideBySideComparison(filename, llmData) {
        const currentIndex = this.pdfFiles.indexOf(filename);
        const prevFile = currentIndex > 0 ? this.pdfFiles[currentIndex - 1] : null;
        const nextFile = currentIndex < this.pdfFiles.length - 1 ? this.pdfFiles[currentIndex + 1] : null;
        
        const container = document.querySelector('.container');
        container.innerHTML = `
            <div class="comparison-container">
                <div class="comparison-controls">
                    <div class="comparison-navigation">
                        <button class="nav-btn prev-btn" ${!prevFile ? 'disabled' : ''} onclick="app.smoothComparisonTransition('${prevFile || ''}')" title="Previous PDF">
                            ←
                        </button>
                        <span class="pdf-counter">${currentIndex + 1} of ${this.pdfFiles.length}</span>
                        <button class="nav-btn next-btn" ${!nextFile ? 'disabled' : ''} onclick="app.smoothComparisonTransition('${nextFile || ''}')" title="Next PDF">
                            →
                        </button>
                    </div>
                    <div class="comparison-info">
                        <span class="comparison-filename">${filename}</span>
                    </div>
                    <div class="comparison-actions">
                        <button class="close-comparison-btn" onclick="app.showPDFPreview('${filename}')">Close Comparison</button>
                        <button class="download-btn" onclick="app.downloadPDF('${filename}')">Download PDF</button>
                        <button class="back-btn" onclick="app.showSampledPDFs()">Back to PDFs</button>
                    </div>
                </div>
                <div class="comparison-content">
                    <div class="pdf-side">
                        <div class="pdf-side-header">
                            <h3>PDF Preview</h3>
                        </div>
                        <div class="pdf-side-content">
                            <iframe src="data/sampled_pdfs/${filename}#page=1&view=FitH" class="comparison-pdf-iframe" type="application/pdf"></iframe>
                        </div>
                    </div>
                    <div class="llm-side">
                        <div class="llm-side-header">
                            <h3>LLM-Generated Transcription</h3>
                            <div class="font-controls">
                                <button class="font-btn" onclick="app.decreaseFontSize()" title="Decrease font size">A-</button>
                                <span class="font-size-display">100%</span>
                                <button class="font-btn" onclick="app.increaseFontSize()" title="Increase font size">A+</button>
                            </div>
                        </div>
                        <div class="llm-side-content">
                            <div class="llm-transcription-data">${llmData}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    async smoothComparisonTransition(filename) {
        const iframe = document.querySelector('.comparison-pdf-iframe');
        const llmContent = document.querySelector('.llm-transcription-data');
        const filenameSpan = document.querySelector('.comparison-filename');
        const counterSpan = document.querySelector('.pdf-counter');
        
        if (!iframe || !llmContent) return;
        
        // Start fade out
        iframe.style.opacity = '0';
        llmContent.style.opacity = '0';
        iframe.style.transition = 'opacity 0.2s ease';
        llmContent.style.transition = 'opacity 0.2s ease';
        
        setTimeout(async () => {
            try {
                // Update iframe source
                iframe.src = `data/sampled_pdfs/${filename}#page=1&view=FitH`;
                
                // Update filename and counter
                const currentIndex = this.pdfFiles.indexOf(filename);
                filenameSpan.textContent = filename;
                counterSpan.textContent = `${currentIndex + 1} of ${this.pdfFiles.length}`;
                
                // Update navigation buttons
                const prevFile = currentIndex > 0 ? this.pdfFiles[currentIndex - 1] : null;
                const nextFile = currentIndex < this.pdfFiles.length - 1 ? this.pdfFiles[currentIndex + 1] : null;
                
                const prevBtn = document.querySelector('.prev-btn');
                const nextBtn = document.querySelector('.next-btn');
                
                if (prevBtn) {
                    prevBtn.disabled = !prevFile;
                    prevBtn.onclick = prevFile ? () => app.smoothComparisonTransition(prevFile) : null;
                }
                
                if (nextBtn) {
                    nextBtn.disabled = !nextFile;
                    nextBtn.onclick = nextFile ? () => app.smoothComparisonTransition(nextFile) : null;
                }
                
                // Load new LLM transcription data
                const year = filename.match(/Patentamt_(\d{4})_sampled\.pdf/)[1];
                const response = await fetch('data/character_error_rate.html');
                const html = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                
                const sections = doc.querySelectorAll('section.three-diff-section');
                let targetSection = null;
                
                for (const section of sections) {
                    const heading = section.querySelector('h2.diff-file-heading');
                    if (heading && heading.textContent.includes(filename)) {
                        targetSection = section;
                        break;
                    }
                }
                
                if (targetSection) {
                    const llmContainer = targetSection.querySelector('.text-container .llm-header');
                    if (llmContainer) {
                        const llmTextContainer = llmContainer.parentElement.querySelector('.text-content');
                        if (llmTextContainer) {
                            llmContent.innerHTML = `
                                <div class="llm-transcription-only">
                                    ${llmTextContainer.innerHTML}
                                </div>
                            `;
                        }
                    }
                }
                
                // Fade back in
                setTimeout(() => {
                    iframe.style.opacity = '1';
                    llmContent.style.opacity = '1';
                }, 100);
                
            } catch (error) {
                console.error('Error updating comparison:', error);
                // Reset opacity even on error
                iframe.style.opacity = '1';
                llmContent.style.opacity = '1';
            }
        }, 200);
    }

    increaseFontSize() {
        const transcriptionOnly = document.querySelector('.llm-transcription-only');
        const sizeDisplay = document.querySelector('.font-size-display');
        
        if (transcriptionOnly && sizeDisplay) {
            const currentSize = parseInt(sizeDisplay.textContent);
            const newSize = Math.min(currentSize + 10, 150); // Max 150%
            // Apply to both the container and inner div
            transcriptionOnly.style.fontSize = `${newSize}%`;
            const innerDiv = transcriptionOnly.querySelector('div');
            if (innerDiv) {
                innerDiv.style.fontSize = `${newSize}%`;
            }
            sizeDisplay.textContent = `${newSize}%`;
        }
    }

    decreaseFontSize() {
        const transcriptionOnly = document.querySelector('.llm-transcription-only');
        const sizeDisplay = document.querySelector('.font-size-display');
        
        if (transcriptionOnly && sizeDisplay) {
            const currentSize = parseInt(sizeDisplay.textContent);
            const newSize = Math.max(currentSize - 10, 70); // Min 70%
            // Apply to both the container and inner div
            transcriptionOnly.style.fontSize = `${newSize}%`;
            const innerDiv = transcriptionOnly.querySelector('div');
            if (innerDiv) {
                innerDiv.style.fontSize = `${newSize}%`;
            }
            sizeDisplay.textContent = `${newSize}%`;
        }
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

    downloadCSV() {
        // Create a sample CSV file
        const csvContent = `patent_number,year,title,applicant,location,status
12345,1878,"Improved Steam Engine","Johann Schmidt","Berlin","Granted"
12346,1878,"Textile Machine","Maria Weber","Hamburg","Granted"
12347,1879,"Chemical Process","Friedrich Mueller","Munich","Pending"
12348,1879,"Mechanical Device","Anna Schmidt","Cologne","Granted"
12349,1880,"Electrical Apparatus","Karl Wagner","Frankfurt","Granted"`;

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'imperial-patents.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    downloadXLSX() {
        // Create a sample XLSX file (simplified version)
        const xlsxContent = `patent_number,year,title,applicant,location,status
12345,1878,"Improved Steam Engine","Johann Schmidt","Berlin","Granted"
12346,1878,"Textile Machine","Maria Weber","Hamburg","Granted"
12347,1879,"Chemical Process","Friedrich Mueller","Munich","Pending"
12348,1879,"Mechanical Device","Anna Schmidt","Cologne","Granted"
12349,1880,"Electrical Apparatus","Karl Wagner","Frankfurt","Granted"`;

        // For XLSX, we'll create a CSV file with .xlsx extension
        // In a real implementation, you'd use a library like SheetJS
        const blob = new Blob([xlsxContent], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'imperial-patents.xlsx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

// Initialize the app
const app = new HistoryMindApp();


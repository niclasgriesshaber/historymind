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
        // Set initial scroll behavior (disabled by default)
        this.setPageScrollable(false);
        this.showHomePage();
    }

    // Helper method to control page scrolling
    setPageScrollable(isScrollable) {
        if (isScrollable) {
            document.body.classList.add('scrollable');
        } else {
            document.body.classList.remove('scrollable');
        }
    }

    // Enable mobile PDF zoom handling
    enableMobilePDFZoom() {
        // Check if we're on a mobile device
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (isMobile) {
            // Add a class to body for mobile-specific styling
            document.body.classList.add('mobile-device');

            // Store mobile flag for use in PDF URL generation
            this.isMobile = true;

            // Add touch event listeners to PDF containers for better mobile handling
            document.addEventListener('touchstart', (e) => {
                const pdfContainer = e.target.closest('.pdf-side-content, .pdf-fullscreen-viewer');
                if (pdfContainer) {
                    // Allow touch events on PDF containers
                    e.stopPropagation();
                }
            }, { passive: true });
        }
    }

    bindEvents() {
        // Paper card click and title click
        document.addEventListener('click', (e) => {
            if (e.target.closest('.paper-card') || e.target.closest('.site-title')) {
                e.preventDefault();
                this.showHomePage();
            }
        });

        // Handle browser back/forward navigation
        window.addEventListener('popstate', (e) => {
            this.handlePopState(e);
        });

        // Ensure scroll position is correct on page load (mobile fix)
        window.addEventListener('load', () => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        });

        // Handle orientation change on mobile
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            }, 100);
        });

        // Enable mobile PDF zoom handling
        this.enableMobilePDFZoom();
    }

    handlePopState(event) {
        // Get the current path and navigate accordingly
        const path = window.location.pathname;

        if (path === '/' || path === '/index.html') {
            this.setPageScrollable(false); // Disable scrolling on home page
            this.showHomePageContent();
        } else if (path === '/sampled-pdfs.html') {
            this.setPageScrollable(true); // Enable scrolling on Sampled PDFs page
            this.showSampledPDFsContent();
        } else if (path === '/full-dataset.html') {
            this.setPageScrollable(false); // Disable scrolling on full dataset page
            this.showFullDatasetContent();
        } else if (path === '/patent-entry-extraction.html') {
            this.setPageScrollable(false); // Disable scrolling on patent extraction page
            this.showPatentExtractionContent();
        } else if (path.startsWith('/comparison/')) {
            this.setPageScrollable(false); // Disable scrolling on comparison pages
            const year = path.match(/\/comparison\/(\d+)/)[1];
            const filename = `Patentamt_${year}_sampled.pdf`;
            this.showComparison(filename);
        } else if (path.startsWith('/sampled-pdfs/') && path.includes('-comparison.html')) {
            this.setPageScrollable(false); // Disable scrolling on comparison pages
            const year = path.match(/\/sampled-pdfs\/(\d+)-comparison\.html/)[1];
            this.showComparisonContent(year);
        } else if (path.startsWith('/sampled-pdfs/') && path.endsWith('.html')) {
            this.setPageScrollable(false); // Disable scrolling on PDF pages
            const year = path.match(/\/sampled-pdfs\/(\d+)\.html/)[1];
            this.showPDFContent(year);
        } else {
            // Fallback to home page
            this.setPageScrollable(false); // Disable scrolling on home page
            this.showHomePageContent();
        }

        // Reset scroll position immediately (handles mobile Safari)
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // Force scroll reset on mobile
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 0);
    }

    showHomePage() {
        // Update URL
        window.history.pushState({ page: 'home' }, '', '/');

        // Disable scrolling on home page
        this.setPageScrollable(false);

        this.showHomePageContent();
        // Reset scroll position immediately (handles mobile Safari)
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // Force scroll reset on mobile
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 0);
    }

    showHomePageContent() {
        const container = document.querySelector('.container');
        container.innerHTML = `
            <header class="header">
                <h1 class="site-title">Multimodal LLMs for Historical Dataset Construction from <span class="title-break">Archival Image Scans: German Patents (1877–1918)</span></h1>
                <div class="site-authors">Niclas Griesshaber & Jochen Streb</div>
            </header>
            
            <main class="main-content fade-in">
                <div class="content-page">
                    <div class="content-items">
                        <div class="content-item clickable" onclick="app.showSampledPDFs()">
                            <div class="item-number">📄</div>
                            <div class="item-text">AI vs Perfect Transcriptions:<span class="mobile-break"><br></span> Visual Comparison</div>
                        </div>
                        
                        <div class="content-item clickable" onclick="app.showCharacterErrorPage()">
                            <div class="item-number">1.</div>
                            <div class="item-text">Character Error Rate</div>
                        </div>
                        
                        <div class="content-item clickable" onclick="app.showPatentExtractionPage()">
                            <div class="item-number">2.</div>
                            <div class="item-text">Patent Entry Extraction based on<span class="mobile-break"><br></span> Archival Image Scans</div>
                        </div>
                        
                        <div class="content-item clickable" onclick="app.showVariableExtractionPage()">
                            <div class="item-number">3.</div>
                            <div class="item-text">Variable Extraction based on extracted<span class="mobile-break"><br></span> Patent Entries</div>
                        </div>
                        
                    </div>
                    
                    <div class="dataset-separator">
                        <span class="dataset-label">Output</span>
                    </div>
                    
                    <div class="dataset-item clickable" onclick="app.showFullDatasetOptions()">
                        <div class="item-text">Full Dataset</div>
                        <div class="item-number">📁</div>
                    </div>
                </div>
                </div>
            </main>
        `;
        this.currentPage = 'home';
    }


    showSampledPDFs() {
        // Check if we're coming from a comparison page - if so, replace history instead of pushing
        const currentPath = window.location.pathname;
        if (currentPath.startsWith('/comparison/')) {
            // Replace the comparison page entry with sampled-pdfs
            window.history.replaceState({ page: 'sampled-pdfs' }, '', '/sampled-pdfs.html');
        } else {
            // Otherwise, push a new state
            window.history.pushState({ page: 'sampled-pdfs' }, '', '/sampled-pdfs.html');
        }

        // Enable scrolling on Sampled PDFs page (year tiles)
        this.setPageScrollable(true);

        this.showSampledPDFsContent();
        // Reset scroll position immediately (handles mobile Safari)
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // Force scroll reset on mobile
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 0);
    }

    showSampledPDFsContent() {
        const container = document.querySelector('.container');
        container.innerHTML = `
            <header class="header">
                <h1 class="site-title">Multimodal LLMs for Historical Dataset Construction from <span class="title-break">Archival Image Scans: German Patents (1877–1918)</span></h1>
                <div class="site-authors">Niclas Griesshaber & Jochen Streb</div>
            </header>
            
            <main class="main-content fade-in">
                <div class="pdf-section">
                    <div class="pdf-header">
                        <h2 class="pdf-section-title">AI vs Perfect Transcriptions:<span class="mobile-break"><br></span> Visual Comparison</h2>
                    </div>
                    
                    <div class="pdf-grid" id="pdfGrid">
                        ${this.generatePDFTiles()}
                    </div>
                </div>
            </main>
        `;
    }

    generatePDFTiles() {
        return this.pdfFiles.map((filename, index) => {
            const year = filename.match(/Patentamt_(\d{4})_sampled\.pdf/)[1];
            // First tile (index 0) should show "1877/1878"
            const displayYear = index === 0 ? '1877<br>1878' : year;
            return `
                <div class="pdf-tile clickable" onclick="app.showPDFPreview('${filename}')">
                    <div class="pdf-year">${displayYear}</div>
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

    showPatentMatchingBefore() {
        window.location.href = 'data/patent_entry_matching_before_cleaning.html';
    }

    showPatentMatchingAfter() {
        window.location.href = 'data/patent_entry_matching_after_cleaning.html';
    }

    showFullDatasetOptions() {
        // Update URL
        window.history.pushState({ page: 'full-dataset' }, '', '/full-dataset.html');

        // Disable scrolling on full dataset page
        this.setPageScrollable(false);

        this.showFullDatasetContent();
        // Reset scroll position immediately (handles mobile Safari)
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // Force scroll reset on mobile
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 0);
    }

    showFullDatasetContent() {
        const container = document.querySelector('.container');
        container.innerHTML = `
            <header class="header">
                <h1 class="site-title">Multimodal LLMs for Historical Dataset Construction from <span class="title-break">Archival Image Scans: German Patents (1877–1918)</span></h1>
                <div class="site-authors">Niclas Griesshaber & Jochen Streb</div>
            </header>
            
            <main class="main-content fade-in">
                <div class="content-page">
                    <div class="content-items">
                        <div class="content-item clickable" onclick="app.downloadCSV()">
                            <div class="item-number-swapped">Download</div>
                            <div class="item-text-swapped">CSV</div>
                        </div>
                        
                        <div class="content-item clickable" onclick="app.downloadXLSX()">
                            <div class="item-number-swapped">Download</div>
                            <div class="item-text-swapped">XLSX</div>
                        </div>
                    </div>
                </div>
            </main>
        `;
        this.currentPage = 'full-dataset';
    }

    showPatentExtractionPage() {
        // Update URL
        window.history.pushState({ page: 'patent-extraction' }, '', '/patent-entry-extraction.html');

        // Disable scrolling on patent extraction page
        this.setPageScrollable(false);

        this.showPatentExtractionContent();
        // Reset scroll position immediately (handles mobile Safari)
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // Force scroll reset on mobile
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 0);
    }

    showPatentExtractionContent() {
        const container = document.querySelector('.container');
        container.innerHTML = `
            <header class="header">
                <h1 class="site-title">Multimodal LLMs for Historical Dataset Construction from <span class="title-break">Archival Image Scans: German Patents (1877–1918)</span></h1>
                <div class="site-authors">Niclas Griesshaber & Jochen Streb</div>
            </header>
            
            <main class="main-content fade-in">
                <div class="content-page">
                    <h2 class="content-title">Patent Entry Extraction based on Image Scans</h2>
                    
                    <div class="content-items">
                        <div class="content-item clickable" onclick="app.showPatentMatchingBefore()">
                            <div class="item-number">a.</div>
                            <div class="item-text">Patent Entry Matching before<span class="mobile-break"><br></span> Repairing Page Breaks</div>
                        </div>
                        
                        <div class="content-item clickable" onclick="app.showPatentMatchingAfter()">
                            <div class="item-number">b.</div>
                            <div class="item-text">Patent Entry Matching after<span class="mobile-break"><br></span> Repairing Page Breaks</div>
                        </div>
                    </div>
                </div>
            </main>
        `;
    }

    showPDFContent(year) {
        const filename = `Patentamt_${year}_sampled.pdf`;
        this.showPDFOnly(filename);
    }

    async showComparisonContent(year) {
        const filename = `Patentamt_${year}_sampled.pdf`;
        await this.showComparison(filename);
    }

    showPDFPreview(filename) {
        // Automatically open comparison view instead of just PDF preview
        const year = filename.match(/Patentamt_(\d{4})_sampled\.pdf/)[1];
        
        // Check if we came from an individual year page and replace that history entry
        const currentPath = window.location.pathname;
        if (currentPath.startsWith('/sampled-pdfs/') && currentPath.match(/\/\d+\.html$/)) {
            // We came from an individual year page, replace it in history
            window.history.replaceState({ page: 'comparison', year: year }, '', `/comparison/${year}`);
        } else {
            // Otherwise, push a new state (e.g., coming from year tiles page)
            window.history.pushState({ page: 'comparison', year: year }, '', `/comparison/${year}`);
        }
        this.showComparison(filename);
    }

    showPDFOnly(filename) {
        const currentIndex = this.pdfFiles.indexOf(filename);
        const prevFile = currentIndex > 0 ? this.pdfFiles[currentIndex - 1] : null;
        const nextFile = currentIndex < this.pdfFiles.length - 1 ? this.pdfFiles[currentIndex + 1] : null;
        const year = filename.match(/Patentamt_(\d{4})_sampled\.pdf/)[1];

        // Update URL to reflect PDF-only view (replace comparison URL if applicable)
        window.history.replaceState({ page: 'pdf', year: year }, '', `/sampled-pdfs/${year}.html`);

        // Disable scrolling on PDF-only view
        this.setPageScrollable(false);

        const container = document.querySelector('.container');
        // Reset scroll position immediately (handles mobile Safari)
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // Force scroll reset on mobile
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 0);
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
                        <button class="back-btn" onclick="window.location.replace('/sampled-pdfs.html')">Back to Home</button>
                    </div>
                </div>
                <div class="pdf-fullscreen-viewer">
                    <iframe src="/data/sampled_pdfs/${filename}?t=${Date.now()}#page=1&view=FitH&zoom=${this.isMobile ? '200' : '100'}&toolbar=1&navpanes=0&scrollbar=1" class="pdf-fullscreen-iframe" type="application/pdf"></iframe>
                </div>
            </div>
        `;
    }

    smoothTransition(filename) {
        const iframe = document.querySelector('.pdf-fullscreen-iframe');
        const filenameSpan = document.querySelector('.pdf-filename');
        const counterSpan = document.querySelector('.pdf-counter');

        if (!iframe) return;

        // Reset scroll position immediately (handles mobile Safari)
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // Force scroll reset on mobile
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 0);

        // Start fade out
        iframe.style.opacity = '0';
        iframe.style.transition = 'opacity 0.2s ease';

        setTimeout(() => {
            // Update URL to reflect current PDF
            const year = filename.match(/Patentamt_(\d{4})_sampled\.pdf/)[1];
            window.history.replaceState({ page: 'pdf', year: year }, '', `/sampled-pdfs/${year}.html`);

            // Update iframe source (use absolute path to work from any URL)
            iframe.src = `/data/sampled_pdfs/${filename}?t=${Date.now()}#page=1&view=FitH&zoom=${this.isMobile ? '200' : '100'}&toolbar=1&navpanes=0&scrollbar=1`;

            // Update filename and counter
            const currentIndex = this.pdfFiles.indexOf(filename);
            filenameSpan.textContent = filename;
            counterSpan.textContent = `${currentIndex + 1} of ${this.pdfFiles.length}`;

            // Update navigation buttons
            const prevFile = currentIndex > 0 ? this.pdfFiles[currentIndex - 1] : null;
            const nextFile = currentIndex < this.pdfFiles.length - 1 ? this.pdfFiles[currentIndex + 1] : null;

            const prevBtn = document.querySelector('.pdf-navigation .prev-btn');
            const nextBtn = document.querySelector('.pdf-navigation .next-btn');

            if (prevBtn) {
                prevBtn.disabled = !prevFile;
                if (prevFile) {
                    prevBtn.onclick = () => app.smoothTransition(prevFile);
                } else {
                    prevBtn.onclick = null;
                }
            }

            if (nextBtn) {
                nextBtn.disabled = !nextFile;
                if (nextFile) {
                    nextBtn.onclick = () => app.smoothTransition(nextFile);
                } else {
                    nextBtn.onclick = null;
                }
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
                <h1 class="site-title">Multimodal LLMs for Historical Dataset Construction from <span class="title-break">Archival Image Scans: German Patents (1877–1918)</span></h1>
            </header>
            
            <main class="main-content">
                <div class="coming-soon">
                    <h2>${title}</h2>
                    <p>This section is coming soon. Check back later for updates!</p>
                    <button class="back-btn" onclick="app.showHomePage()">Back to Papers</button>
                </div>
            </main>
        `;
    }


    openCharacterErrorRate() {
        window.open('data/character_error_rate.html', '_blank');
    }

    async showComparison(filename) {
        const year = filename.match(/Patentamt_(\d{4})_sampled\.pdf/)[1];

        // Check if we came from an individual year page and replace that history entry
        const currentPath = window.location.pathname;
        if (currentPath.startsWith('/sampled-pdfs/') && currentPath.match(/\/\d+\.html$/)) {
            // We came from an individual year page, replace it in history
            window.history.replaceState({ page: 'comparison', year: year }, '', `/comparison/${year}`);
        } else {
            // Otherwise, push a new state (e.g., coming from year tiles page)
            window.history.pushState({ page: 'comparison', year: year }, '', `/comparison/${year}`);
        }

        // Disable scrolling on comparison view
        this.setPageScrollable(false);

        // Reset scroll position immediately (handles mobile Safari)
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // Force scroll reset on mobile
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 0);

        try {
            // Fetch the character error rate HTML (use absolute path to work from any URL)
            const response = await fetch('/data/character_error_rate.html');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
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
                        const llmData = this.createLLMTranscriptionDisplay(targetSection, llmContent);
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

    createLLMTranscriptionDisplay(section, llmContentElement) {
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
                ${llmContentElement ? llmContentElement.textContent : ''}
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
                        <button class="close-comparison-btn" onclick="app.showPDFOnly('${filename}')">Close Comparison</button>
                        <button class="back-btn" onclick="window.location.replace('/sampled-pdfs.html')">Back to Home</button>
                    </div>
                </div>
                <div class="comparison-content">
                    <div class="pdf-side">
                        <div class="pdf-side-header">
                            <h3>PDF</h3>
                        </div>
                        <div class="pdf-side-content">
                            <iframe src="/data/sampled_pdfs/${filename}?t=${Date.now()}#page=1&view=FitH&zoom=${this.isMobile ? '200' : '100'}&toolbar=1&navpanes=0&scrollbar=1" class="comparison-pdf-iframe" type="application/pdf"></iframe>
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
                            ${llmData}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    async smoothComparisonTransition(filename) {
        const year = filename.match(/Patentamt_(\d{4})_sampled\.pdf/)[1];
        
        // Update URL
        window.history.replaceState({ page: 'comparison', year: year }, '', `/comparison/${year}`);
        
        const iframe = document.querySelector('.comparison-pdf-iframe');
        const llmContent = document.querySelector('.llm-side-content');
        const filenameSpan = document.querySelector('.comparison-filename');
        const counterSpan = document.querySelector('.pdf-counter');

        if (!iframe || !llmContent) return;

        // Reset scroll position immediately (handles mobile Safari)
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // Force scroll reset on mobile
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 0);

        // Start fade out
        iframe.style.opacity = '0';
        llmContent.style.opacity = '0';
        iframe.style.transition = 'opacity 0.2s ease';
        llmContent.style.transition = 'opacity 0.2s ease';

        setTimeout(async () => {
            try {
                // Update iframe source (use absolute path)
                iframe.src = `/data/sampled_pdfs/${filename}?t=${Date.now()}#page=1&view=FitH&zoom=${this.isMobile ? '200' : '100'}&toolbar=1&navpanes=0&scrollbar=1`;

                // Update filename and counter
                const currentIndex = this.pdfFiles.indexOf(filename);
                filenameSpan.textContent = filename;
                counterSpan.textContent = `${currentIndex + 1} of ${this.pdfFiles.length}`;

                // Update navigation buttons
                const prevFile = currentIndex > 0 ? this.pdfFiles[currentIndex - 1] : null;
                const nextFile = currentIndex < this.pdfFiles.length - 1 ? this.pdfFiles[currentIndex + 1] : null;

                const prevBtn = document.querySelector('.comparison-navigation .prev-btn');
                const nextBtn = document.querySelector('.comparison-navigation .next-btn');

                if (prevBtn) {
                    prevBtn.disabled = !prevFile;
                    if (prevFile) {
                        prevBtn.onclick = () => app.smoothComparisonTransition(prevFile);
                    } else {
                        prevBtn.onclick = null;
                    }
                }

                if (nextBtn) {
                    nextBtn.disabled = !nextFile;
                    if (nextFile) {
                        nextBtn.onclick = () => app.smoothComparisonTransition(nextFile);
                    } else {
                        nextBtn.onclick = null;
                    }
                }

                // Load new LLM transcription data
                const year = filename.match(/Patentamt_(\d{4})_sampled\.pdf/)[1];
                const response = await fetch('/data/character_error_rate.html');
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
                            let htmlContent = llmTextContainer.innerHTML.trim();
                            htmlContent = htmlContent.replace(/^\s+/, '');
                            
                            // Get current font size from display to apply to new content
                            const sizeDisplay = document.querySelector('.font-size-display');
                            const currentSize = sizeDisplay ? parseInt(sizeDisplay.textContent) : 100;
                            
                            llmContent.innerHTML = `
                                <div class="llm-transcription-only" style="text-indent: 0 !important; margin: 0 !important; padding: 0.5rem !important; white-space: pre-wrap; font-family: 'Courier New', monospace; line-height: 1.6; text-align: left !important; font-size: ${currentSize}%;">
                                    ${htmlContent}
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

    showDownloadWarning() {
        // Create warning box
        const warningBox = document.createElement('div');
        warningBox.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            border: 2px solid #e53e3e;
            border-radius: 12px;
            padding: 24px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            max-width: 400px;
            text-align: center;
            font-family: 'Inter', sans-serif;
        `;

        warningBox.innerHTML = `
            <div style="color: #e53e3e; font-size: 18px; font-weight: 600; margin-bottom: 12px;">
                ⚠️ Sample Data Warning
            </div>
            <div style="color: #4a5568; font-size: 14px; line-height: 1.5; margin-bottom: 20px;">
                This is only a sample file and not the real dataset. The actual dataset will be available in the published research paper.
            </div>
            <button onclick="this.parentElement.remove()" style="
                background: #e53e3e;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 6px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                transition: background 0.2s;
            " onmouseover="this.style.background='#c53030'" onmouseout="this.style.background='#e53e3e'">
                I Understand
            </button>
        `;

        // Add overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 9999;
        `;

        overlay.onclick = () => {
            warningBox.remove();
            overlay.remove();
        };

        document.body.appendChild(overlay);
        document.body.appendChild(warningBox);
    }

    downloadCSV() {
        // Show warning message
        this.showDownloadWarning();

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
        // Show warning message
        this.showDownloadWarning();

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


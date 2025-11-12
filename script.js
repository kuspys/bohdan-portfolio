document.addEventListener('DOMContentLoaded', () => {
    
    // --- YouTube Video Preloading ---
    const preloadedVideos = new Map();
    const videoPreloadContainer = document.createElement('div');
    videoPreloadContainer.style.display = 'none';
    videoPreloadContainer.style.position = 'absolute';
    videoPreloadContainer.style.width = '1px';
    videoPreloadContainer.style.height = '1px';
    videoPreloadContainer.style.opacity = '0';
    videoPreloadContainer.style.pointerEvents = 'none';
    document.body.appendChild(videoPreloadContainer);
    
    function preloadYouTubeVideo(videoUrl, projectId) {
        if (preloadedVideos.has(projectId)) {
            return preloadedVideos.get(projectId); // Already preloaded
        }
        
        // Create hidden iframe for preloading
        const iframe = document.createElement('iframe');
        iframe.src = videoUrl + '?autoplay=0&mute=1&enablejsapi=1';
        iframe.style.width = '560px';
        iframe.style.height = '315px';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        iframe.setAttribute('frameborder', '0');
        
        // Add to hidden container to start loading
        videoPreloadContainer.appendChild(iframe);
        
        // Store the iframe
        preloadedVideos.set(projectId, iframe);
        
        return iframe;
    }
    
    // Preload videos when user hovers over project cards
    function setupVideoPreloading() {
        const projectCards = document.querySelectorAll('.open-modal-card');
        projectCards.forEach(card => {
            const projectId = card.dataset.projectId;
            if (projects[projectId] && projects[projectId].video) {
                card.addEventListener('mouseenter', () => {
                    if (!preloadedVideos.has(projectId)) {
                        preloadYouTubeVideo(projects[projectId].video, projectId);
                    }
                }, { once: true }); // Only preload once per card hover
            }
        });
    }
    
    // --- Project Data ---
    const projects = {
        '1': {
            title: 'Smart Speaker (ESP32)',
            date: 'Mar - May 2025',
            tech: ['ESP32', 'C/C++', 'Bluetooth', 'Wi-Fi', 'Touchscreen Libraries', 'Gemini', 'Cursor', 'API'],
            problem: 'As part of a student project, the goal was to build a Bluetooth speaker. I pushed further to create a smart speaker with a touchscreen display that would display album covers, song details, and more. Lacking prior expertise in ESP32, libraries, and low-level hardware debugging, development was fraught with memory limitation issues and core panics.',
            solution: `
                <p>I adopted a <strong>modular development approach</strong>, isolating hardware components (screen display, touchscreen input, Bluetooth, Wi-Fi) into separate sub-projects before integrating them into a single, cohesive program.</p>
                <p>This project heavily relied on AI assistance:</p>
                <ul class="list-disc list-outside pl-5 space-y-2">
                    <li><strong>Advanced AI Debugging:</strong> Used <strong>Gemini</strong> and <strong>Cursor</strong> to rapidly learn, debug, and implement specialized hardware libraries, drastically reducing the time required to solve complex embedded system issues.</li>
                    <li><strong>Workflow Discipline:</strong> Due to the risk of AI-generated code breaking existing features, I practiced rigorous <strong>GitHub commit hygiene</strong>, making small, specific commits at every milestone. This allowed for quick rollbacks and efficient branching to test different debugging solutions, ensuring project stability.</li>
                </ul>
            `,
            outcomeTitle: 'Key Learnings',
            outcome: '<p>Successfully integrated multiple complex hardware features into a single device and developed a robust, AI-assisted workflow for debugging unfamiliar embedded systems.</p>',
            link: null,
            video: 'https://www.youtube.com/embed/_S6PgH1Q6a4'
        },
        '2': {
            title: 'AI Workflow for Interview Content Extraction',
            date: 'Oct 2024',
            tech: ['OpenAI Whisper', 'Gemini', 'ChatGPT', 'Claude', 'Prompt Engineering', 'Workflow Automation'],
            problem: 'I had a large volume of long-form interview videos. Manually reviewing and transcribing every minute to extract short, commercially viable clips was prohibitively time-consuming and inefficient.',
            solution: `
                <p>I created a pipeline to identify the most compelling content:</p>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li><strong>Transcription:</strong> Utilized the <strong>OpenAI Whisper model</strong> to quickly and accurately transcribe all interview audio.</li>
                    <li><strong>Analysis and Curation:</strong> Fed the raw transcripts, along with examples of successful commercial scripts, into multiple LLMs (<strong>Gemini, ChatGPT, and Claude</strong>).</li>
                    <li><strong>Prompt Engineering:</strong> Developed and refined diverse system prompts to instruct the models to act as content analysts, comparing the transcripts to the examples and extracting sections that matched the required tone and promotional goal.</li>
                </ol>
            `,
            outcomeTitle: 'Outcome',
            outcome: '<p>This workflow saved significant hours of manual review, allowing me to focus immediately on production rather than searching for clips.</p>',
            link: null,
            video: 'https://www.youtube.com/embed/5Ax2cUIOMM4'
        },
        '3': {
            title: 'N8N Automation for Canvas File Downloads',
            date: 'Oct 2025',
            tech: ['N8N', 'Workflow Automation', 'Web Hooks', 'APIs'],
            problem: 'The Canvas learning platform of my university locked down a central page to access and download all files (presentations, assignments, resources) across multiple classes. Manually navigating and clicking into every single class module to download individual files was a repetitive and frustrating process.',
            solution: `
                <p>I developed an automation workflow using <strong>N8N</strong> (a low-code workflow automation tool). This script systematically accesses the relevant class endpoints, identifies all available file links, and downloads them in recursively to a folders on my local personal server.</p>
            `,
            outcomeTitle: 'Outcome',
            outcome: '<p>This simple automation eliminated a major point of friction, saving valuable time and ensuring all resources were immediately available locally without manual interaction.</p>',
            link: null,
            video: 'https://www.youtube.com/embed/Rp-FB3mvlp8'
        },
        '4': {
            title: 'GPT Wrapper (MVP)',
            date: 'Apr - May 2024',
            tech: ['JavaScript', 'Front-end', 'Back-end', 'DigitalOcean', 'GitHub', 'LLM APIs (GPT-3/4)'],
            problem: 'This project, built a year ago in the generative AI trend (with minimal JavaScript knowledge), was an MVP designed to help users write supportive and empathetic biographies of loved ones.',
            solution: `
                <p>The primary engineering challenge was not the front-end or basic hosting, but overcoming the <strong>limitations of the early LLM APIs</strong>. I spent significant time:</p>
                <ul class="list-disc list-outside pl-5 space-y-2">
                    <li><strong>Designing System Prompts:</strong> Engineered sophisticated, multi-layered system prompts to force the model into the desired supportive, empathetic, and highly creative tone, maintaining quality over long chat logs.</li>
                    <li><strong>End-to-End Delivery:</strong> Managed the full process from concept to deployment on DigitalOcean, including basic chat logging and context-aware features (like summarizing the chat log to write the final biography).</li>
                </ul>
            `,
            outcomeTitle: 'Key Achievement',
            outcome: '<p>Successfully delivered a full-stack application by leveraging early AI tools for co-development and specialized in advanced system prompt design to control model output.</p>',
            link: 'https://github.com/CTLR-X/Dodi',
            images: ['images/Dodi AI Main.jpg', 'images/Dodi AI Chat.jpg', 'images/Bio Editor from dodi AI.jpg', 'images/Dodi AI Options.jpg']
        }
    };

    // --- Modal Elements ---
    const modal = document.getElementById('project-modal');
    const modalPanel = document.getElementById('modal-panel');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const openModalBtns = document.querySelectorAll('.open-modal-btn');

    const modalTitle = document.getElementById('modal-title');
    const modalDate = document.getElementById('modal-date');
    const modalTech = document.getElementById('modal-tech');
    const modalProblem = document.getElementById('modal-problem');
    const modalSolution = document.getElementById('modal-solution');
    const modalOutcomeTitle = document.getElementById('modal-outcome-title');
    const modalOutcome = document.getElementById('modal-outcome');
    const modalLinkContainer = document.getElementById('modal-link-container');
    const modalLink = document.getElementById('modal-link');
    const modalImages = document.getElementById('modal-images');
    const modalImagesContainer = document.getElementById('modal-images-container');
    const carouselPrev = document.getElementById('carousel-prev');
    const carouselNext = document.getElementById('carousel-next');
    const carouselIndicators = document.getElementById('carousel-indicators');
    const modalVideo = document.getElementById('modal-video');
    const modalVideoIframe = document.getElementById('modal-video-iframe');

    // --- Carousel State ---
    let currentImageIndex = 0;
    let carouselImages = [];

    // --- Preload Images ---
    const preloadedImages = new Map();
    let currentCarouselImg = null;
    
    function preloadCarouselImages(imageArray) {
        const loadPromises = imageArray.map(imageSrc => {
            return new Promise((resolve) => {
                if (preloadedImages.has(imageSrc)) {
                    resolve(imageSrc);
                    return;
                }
                const img = new Image();
                img.onload = () => {
                    preloadedImages.set(imageSrc, true);
                    resolve(imageSrc);
                };
                img.onerror = () => {
                    preloadedImages.set(imageSrc, true); // Mark as attempted even on error
                    resolve(imageSrc);
                };
                img.src = imageSrc;
            });
        });
        return Promise.all(loadPromises);
    }

    // --- Carousel Functions ---
    function showCarouselImage(index) {
        currentImageIndex = index;
        
        if (carouselImages.length === 0) return;
        
        const imageSrc = carouselImages[currentImageIndex];
        
        // If no image element exists, create one
        if (!currentCarouselImg) {
            currentCarouselImg = document.createElement('img');
            currentCarouselImg.alt = 'Project screenshot';
            currentCarouselImg.className = 'w-full h-80 object-contain rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity';
            modalImagesContainer.innerHTML = '';
            modalImagesContainer.appendChild(currentCarouselImg);
        }
        
        // Update click handler
        currentCarouselImg.onclick = () => openLightbox(carouselImages[currentImageIndex], currentImageIndex);
        
        // Check if image is preloaded
        if (preloadedImages.has(imageSrc)) {
            // Image is preloaded, swap immediately without fade
            currentCarouselImg.style.transition = 'none';
            currentCarouselImg.src = imageSrc;
            currentCarouselImg.style.opacity = '1';
            // Re-enable transition for next change
            setTimeout(() => {
                currentCarouselImg.style.transition = '';
            }, 50);
        } else {
            // Preload in background, then swap
            const tempImg = new Image();
            tempImg.onload = () => {
                preloadedImages.set(imageSrc, true);
                currentCarouselImg.style.transition = 'opacity 0.15s ease';
                currentCarouselImg.style.opacity = '0';
                setTimeout(() => {
                    currentCarouselImg.src = imageSrc;
                    currentCarouselImg.style.opacity = '1';
                }, 50);
            };
            tempImg.onerror = () => {
                preloadedImages.set(imageSrc, true);
                currentCarouselImg.src = imageSrc;
                currentCarouselImg.style.opacity = '1';
            };
            tempImg.src = imageSrc;
        }
        
        // Show/hide navigation buttons
        if (carouselImages.length > 1) {
            carouselPrev.style.display = 'block';
            carouselNext.style.display = 'block';
        } else {
            carouselPrev.style.display = 'none';
            carouselNext.style.display = 'none';
        }
        
        // Update indicators
        carouselIndicators.innerHTML = '';
        if (carouselImages.length > 1) {
            carouselImages.forEach((_, idx) => {
                const dot = document.createElement('button');
                dot.className = `w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'w-6' : 'bg-gray-600'}`;
                dot.style.backgroundColor = idx === currentImageIndex ? '#042521' : '#4b5563';
                dot.onclick = () => showCarouselImage(idx);
                carouselIndicators.appendChild(dot);
            });
        }
    }

    function nextCarouselImage() {
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
        showCarouselImage(currentImageIndex);
    }

    function prevCarouselImage() {
        currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
        showCarouselImage(currentImageIndex);
    }

    // --- Carousel Event Listeners ---
    carouselPrev.addEventListener('click', prevCarouselImage);
    carouselNext.addEventListener('click', nextCarouselImage);

    // --- Modal Functions ---
    function openModal(projectId) {
        const data = projects[projectId];
        if (!data) return;

        modalTitle.textContent = data.title;
        if (data.date) {
            modalDate.textContent = data.date;
            modalDate.classList.remove('hidden');
        } else {
            modalDate.textContent = '';
            modalDate.classList.add('hidden');
        }
        modalProblem.innerHTML = data.problem;
        modalSolution.innerHTML = data.solution;
        modalOutcomeTitle.textContent = data.outcomeTitle;
        modalOutcome.innerHTML = data.outcome;

        modalTech.innerHTML = '';
        data.tech.forEach(techName => {
            const techTag = document.createElement('span');
            techTag.className = 'text-sm font-medium px-3 py-1.5 rounded-full';
            techTag.style.backgroundColor = 'rgba(4, 37, 33, 1)';
            techTag.style.color = '#2dd4bf';
            techTag.style.border = '1px solid rgb(10, 90, 81)';
            techTag.textContent = techName;
            modalTech.appendChild(techTag);
        });

        // Handle images with carousel
        if (data.images && data.images.length > 0) {
            carouselImages = data.images;
            currentImageIndex = 0;
            currentCarouselImg = null; // Reset carousel image element
            
            modalImages.classList.remove('hidden');
            
            // Preload first image immediately, then show
            const firstImg = new Image();
            firstImg.onload = () => {
                preloadedImages.set(carouselImages[0], true);
                showCarouselImage(0);
            };
            firstImg.onerror = () => {
                preloadedImages.set(carouselImages[0], true);
                showCarouselImage(0);
            };
            firstImg.src = carouselImages[0];
            
            // Preload remaining images in background
            if (carouselImages.length > 1) {
                preloadCarouselImages(carouselImages.slice(1));
            }
        } else {
            modalImages.classList.add('hidden');
        }

        // Handle video
        if (data.video && data.video !== '[LINK]') {
            // Set video src - if preloaded, it should load faster
            modalVideoIframe.src = data.video;
            modalVideo.classList.remove('hidden');
            
            // Trigger preload if not already done (for next time)
            if (!preloadedVideos.has(projectId)) {
                preloadYouTubeVideo(data.video, projectId);
            }
        } else {
            modalVideo.classList.add('hidden');
        }

        if (data.link && data.link !== '[LINK]') {
            modalLink.href = data.link;
            modalLinkContainer.classList.remove('hidden');
        } else {
            modalLinkContainer.classList.add('hidden');
        }
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        // Ensure modal content starts at top for every open
        if (modalPanel) {
            modalPanel.scrollTop = 0;
        }
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modalPanel.classList.remove('scale-95', 'opacity-0');
        }, 10);
    }

    function closeModal() {
        // Clear video iframe to stop playback
        if (modalVideoIframe) {
            modalVideoIframe.src = '';
        }
        
        modalPanel.classList.add('scale-95', 'opacity-0');
        modal.classList.add('opacity-0');
        document.body.style.overflow = '';
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }

    // --- Event Listeners ---
    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card click from firing
            openModal(btn.dataset.projectId);
        });
    });

    // Make project images clickable
    const openModalImgs = document.querySelectorAll('.open-modal-img');
    openModalImgs.forEach(img => {
        img.addEventListener('click', () => {
            openModal(img.dataset.projectId);
        });
    });

    // Make entire project cards clickable
    const openModalCards = document.querySelectorAll('.open-modal-card');
    openModalCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking the button (let button handle its own click)
            if (!e.target.closest('.open-modal-btn')) {
                openModal(card.dataset.projectId);
            }
        });
    });

    closeModalBtn.addEventListener('click', closeModal);

    // --- Image Lightbox ---
    const imageLightbox = document.getElementById('image-lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeLightboxBtn = document.getElementById('close-lightbox');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    let lightboxImages = [];
    let lightboxCurrentIndex = 0;

    function getHighQualityImage(imageSrc) {
        // Convert JPG to PNG for high quality, or return original if already PNG
        if (imageSrc.endsWith('.jpg')) {
            return imageSrc.replace('.jpg', '.png');
        }
        return imageSrc;
    }

    function openLightbox(imageSrc, imageIndex = 0) {
        // Get all images for navigation
        lightboxImages = carouselImages.map(img => getHighQualityImage(img));
        lightboxCurrentIndex = imageIndex;
        
        // Load high quality PNG version
        const highQualitySrc = getHighQualityImage(imageSrc);
        lightboxImage.src = highQualitySrc;
        imageLightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Show/hide navigation buttons
        if (lightboxImages.length > 1) {
            lightboxPrev.classList.remove('hidden');
            lightboxNext.classList.remove('hidden');
            updateLightboxButtons();
        } else {
            lightboxPrev.classList.add('hidden');
            lightboxNext.classList.add('hidden');
        }
        
        setTimeout(() => {
            imageLightbox.classList.remove('opacity-0');
        }, 10);
    }

    function updateLightboxButtons() {
        // Update button visibility based on current index
        if (lightboxCurrentIndex > 0) {
            lightboxPrev.classList.remove('hidden');
        } else {
            lightboxPrev.classList.add('hidden');
        }
        if (lightboxCurrentIndex < lightboxImages.length - 1) {
            lightboxNext.classList.remove('hidden');
        } else {
            lightboxNext.classList.add('hidden');
        }
    }

    function showLightboxImage(index) {
        if (index >= 0 && index < lightboxImages.length) {
            lightboxCurrentIndex = index;
            lightboxImage.src = lightboxImages[lightboxCurrentIndex];
            updateLightboxButtons();
        }
    }

    function nextLightboxImage() {
        if (lightboxCurrentIndex < lightboxImages.length - 1) {
            showLightboxImage(lightboxCurrentIndex + 1);
        }
    }

    function prevLightboxImage() {
        if (lightboxCurrentIndex > 0) {
            showLightboxImage(lightboxCurrentIndex - 1);
        }
    }

    function closeLightbox() {
        imageLightbox.classList.add('opacity-0');
        document.body.style.overflow = '';
        setTimeout(() => {
            imageLightbox.classList.add('hidden');
            lightboxImage.src = '';
            lightboxImages = [];
        }, 300);
    }

    closeLightboxBtn.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', prevLightboxImage);
    lightboxNext.addEventListener('click', nextLightboxImage);
    
    imageLightbox.addEventListener('click', (e) => {
        if (e.target === imageLightbox || e.target === lightboxImage) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (!imageLightbox.classList.contains('hidden')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                prevLightboxImage();
            } else if (e.key === 'ArrowRight') {
                nextLightboxImage();
            }
        }
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // --- Smooth Scrolling ---
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetHref = this.getAttribute('href');
            const isHashLink = targetHref && targetHref.startsWith('#');
            if (!isHashLink) {
                return; // allow normal navigation for external/file links (e.g., PDF)
            }
            const targetElement = document.querySelector(targetHref);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 64; // Height of the sticky nav
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- Mobile Menu ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        const closeMobileMenu = () => {
            mobileMenu.classList.remove('open');
            mobileMenu.classList.add('hidden');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
        };

        const openMobileMenu = () => {
            mobileMenu.classList.add('open');
            mobileMenu.classList.remove('hidden');
            mobileMenuButton.setAttribute('aria-expanded', 'true');
        };

        mobileMenuButton.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('open');
            if (isOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        // Close on link click and enable smooth scroll like desktop
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const targetHref = link.getAttribute('href');
                const isHashLink = targetHref && targetHref.startsWith('#');
                if (isHashLink) {
                    const targetElement = document.querySelector(targetHref);
                    if (targetElement) {
                        e.preventDefault();
                        const headerOffset = 64;
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                }
                closeMobileMenu();
            });
        });

        // Close if window resized to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 640) {
                closeMobileMenu();
            }
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            const target = e.target;
            const clickedInsideMenu = mobileMenu.contains(target);
            const clickedToggle = mobileMenuButton.contains(target);
            if (!clickedInsideMenu && !clickedToggle && mobileMenu.classList.contains('open')) {
                closeMobileMenu();
            }
        });

        // Close on scroll
        window.addEventListener('scroll', () => {
            if (mobileMenu.classList.contains('open')) {
                closeMobileMenu();
            }
        }, { passive: true });

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
                closeMobileMenu();
            }
        });
    }

    // --- Parallax Effect ---
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        const handleParallax = () => {
            const scrolled = window.pageYOffset;
            const heroSection = document.getElementById('home');
            if (heroSection) {
                const heroRect = heroSection.getBoundingClientRect();
                if (heroRect.bottom > 0 && heroRect.top < window.innerHeight) {
                    const parallaxSpeed = 0.5;
                    const offset = scrolled * parallaxSpeed;
                    parallaxBg.style.transform = `translateY(${offset}px)`;
                }
            }
        };

        // Initial call
        handleParallax();

        // Throttled scroll event
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleParallax();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // Setup video preloading after a short delay
    setTimeout(() => {
        setupVideoPreloading();
        // Also preload videos after user interaction (better for performance)
        const preloadOnInteraction = () => {
            preloadAllVideos();
        };
        document.addEventListener('mousemove', preloadOnInteraction, { once: true });
    }, 1000);
});


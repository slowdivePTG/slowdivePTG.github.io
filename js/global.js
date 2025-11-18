// Enhanced animations and interactions for Chang Liu's personal website

document.addEventListener('DOMContentLoaded', function() {
    
    // Audio Pronunciation Button
    function initAudioSymbol() {
        const audioBtn = document.getElementById('pronunciation-btn');
        const audio = document.getElementById('pronunciation-audio');
        
        if (!audioBtn || !audio) {
            console.log('Audio elements not found:', { audioBtn, audio });
            return;
        }
        
        console.log('Audio elements found, initializing...');
        
        audioBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Audio button clicked, audio paused:', audio.paused);
            
            if (audio.paused) {
                audio.play().catch(function(error) {
                    console.error('Audio play error:', error);
                });
            } else {
                audio.pause();
            }
        });
        
        audio.addEventListener('play', function() {
            console.log('Audio started playing');
            audioBtn.classList.add('playing');
        });
        
        audio.addEventListener('pause', function() {
            console.log('Audio paused');
            audioBtn.classList.remove('playing');
        });
        
        audio.addEventListener('ended', function() {
            console.log('Audio ended');
            audioBtn.classList.remove('playing');
        });
        
        audio.addEventListener('error', function(e) {
            console.error('Audio error:', e, audio.error);
        });
        
        audio.addEventListener('loadstart', function() {
            console.log('Audio load started');
        });
        
        audio.addEventListener('canplay', function() {
            console.log('Audio can play');
        });
        
        // Preload audio for better performance
        audio.load();
    }
    
    // Enhanced card interactions
    function initCardInteractions() {
        document.querySelectorAll('.md-card').forEach(card => {
            // Add hover effect
            card.addEventListener('mouseenter', function() {
                this.style.animationPlayState = 'paused';
            });

            card.addEventListener('mouseleave', function() {
                this.style.animationPlayState = 'running';
            });

            // Add click ripple effect
            card.addEventListener('click', function(e) {
                const ripple = document.createElement('div');
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(78, 42, 132, 0.3);
                    transform: scale(0);
                    animation: ripple 600ms ease-out;
                    pointer-events: none;
                `;
                
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
                ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });

        // Add ripple animation CSS
        if (!document.querySelector('#ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'ripple-styles';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Loading animation for images
    function initImageLoadingEffects() {
        document.querySelectorAll('img').forEach(img => {
            if (!img.complete) {
                img.style.opacity = '0';
                img.style.filter = 'blur(5px)';
                
                img.addEventListener('load', function() {
                    this.style.transition = 'opacity 0.5s ease, filter 0.5s ease';
                    this.style.opacity = '1';
                    this.style.filter = 'blur(0)';
                });
            }
        });
    }

    // Auto-wrap H2 sections in cards for markdown pages
    function wrapH2SectionsInCards() {
        console.log('[Card Wrapper] Starting...');
        console.log('[Card Wrapper] Current pathname:', window.location.pathname);
        
        // Only apply to pages that have markdown content (not index.html or CV page)
        // Check if we're on the actual home page by looking for index-profile-container
        if (document.querySelector('.index-profile-container')) {
            console.log('[Card Wrapper] Skipping - home page detected');
            return; // Skip for home page which already has custom cards
        }
        
        // Skip CV page which has its own card layout
        const pathname = window.location.pathname.toLowerCase();
        if (pathname.includes('/cv')) {
            console.log('[Card Wrapper] Skipping - CV page detected');
            return;
        }
        
        const content = document.querySelector('.post-content');
        console.log('[Card Wrapper] Content element:', content);
        
        if (!content) {
            console.log('[Card Wrapper] No post-content element found, aborting');
            return;
        }
        
        const h2Elements = content.querySelectorAll('h2');
        console.log('[Card Wrapper] Found H2 elements:', h2Elements.length);
        
        h2Elements.forEach(function(h2, index) {
            console.log(`[Card Wrapper] Processing H2 #${index}:`, h2.textContent);
            
            // Skip if already inside a card
            if (h2.closest('.md-card')) {
                console.log(`[Card Wrapper] H2 #${index} already in card, skipping`);
                return;
            }
            
            // Create card wrapper
            const card = document.createElement('div');
            card.className = 'md-card shadow';
            card.style.textAlign = 'left';
            
            // Create title section with appropriate icon
            const titleDiv = document.createElement('div');
            
            // Get icon from data-icon attribute, or use default
            const iconClass = h2.getAttribute('data-icon') || 'icon-briefcase';
            
            titleDiv.className = `title ${iconClass}`;
            
            // Move h2 into title div
            const h2Clone = h2.cloneNode(true);
            titleDiv.appendChild(h2Clone);
            card.appendChild(titleDiv);
            
            // Create content section
            const contentDiv = document.createElement('div');
            contentDiv.className = 'content';
            
            // Collect all elements until next h2, h1, or end of content
            let nextElement = h2.nextElementSibling;
            const elementsToMove = [];
            
            while (nextElement && nextElement.tagName !== 'H2' && nextElement.tagName !== 'H1') {
                elementsToMove.push(nextElement);
                nextElement = nextElement.nextElementSibling;
            }
            
            // Move collected elements to content div
            elementsToMove.forEach(function(element) {
                contentDiv.appendChild(element);
            });
            
            card.appendChild(contentDiv);
            
            // Replace original h2 with card
            h2.parentNode.insertBefore(card, h2);
            h2.remove();
            
            console.log(`[Card Wrapper] H2 #${index} wrapped successfully`);
        });
        
        console.log('[Card Wrapper] Finished processing all H2 elements');
    }

    // Performance optimization: only run animations if user hasn't specified reduced motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        initCardInteractions();
    }

    // Always init these for usability
    initAudioSymbol();
    initSmoothScrolling();
    initImageLoadingEffects();
    wrapH2SectionsInCards();

    // Add some Easter eggs for fun
    let clickCount = 0;
    document.addEventListener('click', function() {
        clickCount++;
        if (clickCount === 10) {
            console.log('🌟 Thanks for exploring! Hope you enjoyed the animations! 🚀');
            clickCount = 0;
        }
    });

    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Alt + A for "animations toggle"
        if (e.altKey && e.key === 'a') {
            document.body.classList.toggle('animations-disabled');
            console.log('Animations toggled!');
        }
    });
    
    // Initialize card wrapping for markdown pages
    wrapH2SectionsInCards();
});
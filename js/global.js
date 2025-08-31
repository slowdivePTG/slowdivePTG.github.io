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

    // Performance optimization: only run animations if user hasn't specified reduced motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        initCardInteractions();
    }

    // Always init these for usability
    initAudioSymbol();
    initSmoothScrolling();
    initImageLoadingEffects();

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
});
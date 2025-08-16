
// Initialize AOS
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: false,
            mirror: true
        });

        // Preloader
        window.addEventListener('load', function() {
            const preloader = document.getElementById('preloader');
            setTimeout(function() {
                preloader.classList.add('hidden');
            }, 1000);
        });

        // Mobile Navigation Toggle
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        const logoImg = document.querySelector('.logo-img');

        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.classList.add('nav-open');
                document.body.style.top = `-${window.scrollY}px`;
            } else {
                const scrollY = document.body.style.top;
                document.body.classList.remove('nav-open');
                document.body.style.top = '';
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                
                // Re-enable body scroll
                const scrollY = document.body.style.top;
                document.body.classList.remove('nav-open');
                document.body.style.top = '';
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
            
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                
                // Re-enable body scroll
                const scrollY = document.body.style.top;
                document.body.classList.remove('nav-open');
                document.body.style.top = '';
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('nav-open');
                document.body.style.top = '';
            }
        });
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            const logoImg = document.querySelector('.logo-img');
            
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
                if (logoImg) {
                    logoImg.src = './assests/Logo/Trans-Siberian Shipping LLC (White).png';
                }
            } else {
                navbar.classList.remove('scrolled');
                if (logoImg) {
                    logoImg.src = './assests/Logo/Trans-Siberian Shipping LLC.png';
                }
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
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

        // Optimize images for mobile
        function optimizeImages() {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                if (!img.hasAttribute('loading')) {
                    img.setAttribute('loading', 'lazy');
                }
            });
        }

        // Call optimization functions
        optimizeImages();

        // Handle viewport changes for better mobile experience
        function handleViewportChange() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }

        window.addEventListener('resize', handleViewportChange);
        window.addEventListener('orientationchange', handleViewportChange);
        handleViewportChange();

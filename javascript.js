    // Dark Mode Logic
        function toggleDarkMode() {
            const html = document.documentElement;
            html.classList.toggle('dark');
            const icon = document.getElementById('dark-icon');
            icon.innerText = html.classList.contains('dark') ? 'light_mode' : 'dark_mode';
            localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
        }

        // Carousel Scroll
        function scrollCarousel(amount) {
            const carousel = document.getElementById('home-carousel');
            carousel.scrollBy({ left: amount, behavior: 'smooth' });
        }

        // Auto Carousel
        setInterval(() => {
            const carousel = document.getElementById('home-carousel');
            if (!carousel) return;
            if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carousel.scrollBy({ left: 300, behavior: 'smooth' });
            }
        }, 5000);

        // Initialize
        window.addEventListener('load', () => {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark');
                document.getElementById('dark-icon').innerText = 'light_mode';
            }

            const hash = window.location.hash.replace('#', '');
            if (['home', 'impact', 'join'].includes(hash)) {
                navigate(hash);
            } else {
                navigate('home');
            }
        });
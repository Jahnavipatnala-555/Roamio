<script>
    // DOM Content Loaded Event
    document.addEventListener('DOMContentLoaded', function() {
        // Mobile Navigation Toggle
        const menuIcon = document.querySelector('.menu-icon');
        const navList = document.querySelector('.nav-list');
        
        if (menuIcon && navList) {
            menuIcon.addEventListener('click', function() {
                navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
            });
        }

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (navList && menuIcon && 
                !event.target.closest('.nav-list') && 
                !event.target.closest('.menu-icon') &&
                window.innerWidth < 768) {
                navList.style.display = 'none';
            }
        });

        // Window resize event handler
        window.addEventListener('resize', function() {
            // Adjust navigation for different screen sizes
            if (window.innerWidth >= 768 && navList) {
                navList.style.display = 'flex';
            } else if (window.innerWidth < 768 && navList) {
                navList.style.display = 'none';
            }
            
            // Adjust form layout for mobile
            const form = document.querySelector('form');
            if (window.innerWidth < 768 && form) {
                form.style.flexDirection = 'column';
                form.style.alignItems = 'center';
            } else if (form) {
                form.style.flexDirection = 'row';
                form.style.alignItems = 'center';
            }
        });

        // Form validation
        const searchForm = document.querySelector('form');
        if (searchForm) {
            searchForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const destinationInput = document.querySelector('input[type="text"]');
                const checkInInput = document.querySelectorAll('input[type="date"]')[0];
                const checkOutInput = document.querySelectorAll('input[type="date"]')[1];
                
                // Simple validation
                if (!destinationInput.value.trim()) {
                    alert('Please enter a destination');
                    destinationInput.focus();
                    return false;
                }
                
                if (!checkInInput.value) {
                    alert('Please select check-in date');
                    checkInInput.focus();
                    return false;
                }
                
                if (!checkOutInput.value) {
                    alert('Please select check-out date');
                    checkOutInput.focus();
                    return false;
                }
                
                // If validation passes, you can submit the form to a server here
                alert('Searching for: ' + destinationInput.value);
                // searchForm.submit(); // Uncomment to actually submit the form
            });
        }

        // Initialize date inputs with today's date
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        
        const formatDate = (date) => {
            return date.toISOString().split('T')[0];
        };
        
        const dateInputs = document.querySelectorAll('input[type="date"]');
        if (dateInputs.length >= 2) {
            dateInputs[0].value = formatDate(today);
            dateInputs[1].value = formatDate(tomorrow);
            
            // Set minimum dates to prevent selecting past dates
            dateInputs[0].min = formatDate(today);
            dateInputs[1].min = formatDate(today);
            
            // Update checkout min date when checkin changes
            dateInputs[0].addEventListener('change', function() {
                dateInputs[1].min = this.value;
                
                // If checkout is before the new checkin date, update it
                if (dateInputs[1].value < this.value) {
                    const newCheckout = new Date(this.value);
                    newCheckout.setDate(newCheckout.getDate() + 1);
                    dateInputs[1].value = formatDate(newCheckout);
                }
            });
        }

        // Add smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('.nav-list li');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.textContent.toLowerCase();
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu after clicking
                    if (window.innerWidth < 768 && navList) {
                        navList.style.display = 'none';
                    }
                }
            });
        });

        // Add animation to cards on scroll
        const animateOnScroll = function() {
            const cards = document.querySelectorAll('.card, .col');
            
            cards.forEach(card => {
                const cardPosition = card.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (cardPosition < screenPosition) {
                    card.style.opacity = 1;
                    card.style.transform = 'translateY(0)';
                }
            });
        };

        // Initialize card animation styles
        const cards = document.querySelectorAll('.card, .col');
        cards.forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });

        // Listen for scroll events
        window.addEventListener('scroll', animateOnScroll);
        // Trigger once on load
        animateOnScroll();

        // Initialize navigation based on screen size
        if (window.innerWidth >= 768 && navList) {
            navList.style.display = 'flex';
        } else if (navList) {
            navList.style.display = 'none';
        }
    });
    <script>
    // DOM Content Loaded Event
    document.addEventListener('DOMContentLoaded', function() {
        // Mobile Navigation Toggle
        const menuIcon = document.querySelector('.menu-icon');
        const navList = document.querySelector('.nav-list');
        
        if (menuIcon && navList) {
            menuIcon.addEventListener('click', function() {
                navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
            });
        }

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (navList && menuIcon && 
                !event.target.closest('.nav-list') && 
                !event.target.closest('.menu-icon') &&
                window.innerWidth < 768) {
                navList.style.display = 'none';
            }
        });

        // Window resize event handler
        window.addEventListener('resize', function() {
            // Adjust navigation for different screen sizes
            if (window.innerWidth >= 768 && navList) {
                navList.style.display = 'flex';
            } else if (window.innerWidth < 768 && navList) {
                navList.style.display = 'none';
            }
            
            // Adjust form layout for mobile
            const form = document.querySelector('form');
            if (window.innerWidth < 768 && form) {
                form.style.flexDirection = 'column';
                form.style.alignItems = 'center';
            } else if (form) {
                form.style.flexDirection = 'row';
                form.style.alignItems = 'center';
            }
        });

        // Form validation and navigation to destination
        const searchForm = document.querySelector('form');
        if (searchForm) {
            searchForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const destinationInput = document.querySelector('input[type="text"]');
                const checkInInput = document.querySelectorAll('input[type="date"]')[0];
                const checkOutInput = document.querySelectorAll('input[type="date"]')[1];
                const adultsInput = document.querySelectorAll('input[type="number"]')[0];
                const childrenInput = document.querySelectorAll('input[type="number"]')[1];
                
                // Simple validation
                if (!destinationInput.value.trim()) {
                    alert('Please enter a destination');
                    destinationInput.focus();
                    return false;
                }
                
                if (!checkInInput.value) {
                    alert('Please select check-in date');
                    checkInInput.focus();
                    return false;
                }
                
                if (!checkOutInput.value) {
                    alert('Please select check-out date');
                    checkOutInput.focus();
                    return false;
                }
                
                // If validation passes, navigate to the destination section
                navigateToDestination(destinationInput.value.trim());
            });
        }

        // Function to navigate to the destination
        function navigateToDestination(destination) {
            // Convert destination to lowercase and replace spaces with dashes for ID
            const destinationId = destination.toLowerCase().replace(/\s+/g, '-');
            
            // Check if destination section exists
            let destinationSection = document.getElementById(destinationId);
            
            // If destination section doesn't exist, check if it matches any of our destinations
            if (!destinationSection) {
                // Map common destination names to our existing destinations
                const destinationMap = {
                    'kerala': 'kerala',
                    'kashmir': 'kashmir',
                    'spain': 'spain',
                    'bali': 'bali',
                    'dubai': 'dubai',
                    'netherlands': 'netherlands',
                    'paris': 'paris'
                };
                
                const mappedDestination = destinationMap[destination.toLowerCase()];
                if (mappedDestination) {
                    destinationSection = document.getElementById(mappedDestination);
                }
            }
            
            if (destinationSection) {
                // Smooth scroll to the destination section
                window.scrollTo({
                    top: destinationSection.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Highlight the destination section briefly
                destinationSection.style.boxShadow = '0 0 20px rgba(32, 228, 97, 0.7)';
                destinationSection.style.transition = 'box-shadow 0.5s ease';
                
                setTimeout(() => {
                    destinationSection.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
                }, 2000);
            } else {
                // If destination not found, show a message and scroll to destination section generally
                alert('Destination "' + destination + '" not found in our featured list. Showing all destinations.');
                
                const destinationSection = document.querySelector('.destination');
                if (destinationSection) {
                    window.scrollTo({
                        top: destinationSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        }

        // Initialize date inputs with today's date
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        
        const formatDate = (date) => {
            return date.toISOString().split('T')[0];
        };
        
        const dateInputs = document.querySelectorAll('input[type="date"]');
        if (dateInputs.length >= 2) {
            dateInputs[0].value = formatDate(today);
            dateInputs[1].value = formatDate(tomorrow);
            
            // Set minimum dates to prevent selecting past dates
            dateInputs[0].min = formatDate(today);
            dateInputs[1].min = formatDate(today);
            
            // Update checkout min date when checkin changes
            dateInputs[0].addEventListener('change', function() {
                dateInputs[1].min = this.value;
                
                // If checkout is before the new checkin date, update it
                if (dateInputs[1].value < this.value) {
                    const newCheckout = new Date(this.value);
                    newCheckout.setDate(newCheckout.getDate() + 1);
                    dateInputs[1].value = formatDate(newCheckout);
                }
            });
        }

        // Add IDs to destination cards for navigation
        const destinationCards = document.querySelectorAll('.destination .col');
        const destinationIds = ['kerala', 'kashmir', 'spain', 'bali', 'dubai', 'netherlands', 'paris'];
        
        destinationCards.forEach((card, index) => {
            if (index < destinationIds.length) {
                card.id = destinationIds[index];
            }
        });

        // Add smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('.nav-list li');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.textContent.toLowerCase();
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu after clicking
                    if (window.innerWidth < 768 && navList) {
                        navList.style.display = 'none';
                    }
                }
            });
        });

        // Add animation to cards on scroll
        const animateOnScroll = function() {
            const cards = document.querySelectorAll('.card, .col');
            
            cards.forEach(card => {
                const cardPosition = card.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (cardPosition < screenPosition) {
                    card.style.opacity = 1;
                    card.style.transform = 'translateY(0)';
                }
            });
        };

        // Initialize card animation styles
        const cards = document.querySelectorAll('.card, .col');
        cards.forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });

        // Listen for scroll events
        window.addEventListener('scroll', animateOnScroll);
        // Trigger once on load
        animateOnScroll();

        // Initialize navigation based on screen size
        if (window.innerWidth >= 768 && navList) {
            navList.style.display = 'flex';
        } else if (navList) {
            navList.style.display = 'none';
        }
    });
</script>
</script>
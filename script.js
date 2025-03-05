// Wait for the page to load
window.onload = function() {
    // Hamburger menu
    var hamburger = document.querySelector('.hamburger-icon');
    var navLinks = document.querySelector('.nav-links');
    
    hamburger.onclick = function() {
        navLinks.classList.toggle('show');
    }
    
    // Close menu when clicking outside
    document.onclick = function(event) {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove('show');
        }
    }

    // Blog posts navigation
    var blogPosts = document.querySelectorAll('.blog-post');
    var currentBlogPost = 0;
    blogPosts[0].classList.add('active');
    
    var blogPrevBtn = document.querySelector('.blog-section .prev-btn');
    var blogNextBtn = document.querySelector('.blog-section .next-btn');
    
    function updateBlogButtons() {
        // Always show buttons since we can now cycle
        blogPrevBtn.style.display = 'block';
        blogNextBtn.style.display = 'block';
    }

    blogPrevBtn.onclick = function() {
        blogPosts[currentBlogPost].classList.remove('active');
        currentBlogPost = currentBlogPost > 0 ? currentBlogPost - 1 : blogPosts.length - 1;
        blogPosts[currentBlogPost].classList.add('active');
    }
    
    blogNextBtn.onclick = function() {
        blogPosts[currentBlogPost].classList.remove('active');
        currentBlogPost = currentBlogPost < blogPosts.length - 1 ? currentBlogPost + 1 : 0;
        blogPosts[currentBlogPost].classList.add('active');
    }
    
    updateBlogButtons();

    // Gallery navigation
    var galleryItems = document.querySelectorAll('.gallery-item');
    var currentGalleryItem = 0;
    galleryItems[0].classList.add('active');
    
    var galleryPrevBtn = document.querySelector('.gallery-section .prev-btn');
    var galleryNextBtn = document.querySelector('.gallery-section .next-btn');
    
    function updateGalleryButtons() {
        // Always show buttons since we can now cycle
        galleryPrevBtn.style.display = 'block';
        galleryNextBtn.style.display = 'block';
    }

    galleryPrevBtn.onclick = function() {
        galleryItems[currentGalleryItem].classList.remove('active');
        currentGalleryItem = currentGalleryItem > 0 ? currentGalleryItem - 1 : galleryItems.length - 1;
        galleryItems[currentGalleryItem].classList.add('active');
    }
    
    galleryNextBtn.onclick = function() {
        galleryItems[currentGalleryItem].classList.remove('active');
        currentGalleryItem = currentGalleryItem < galleryItems.length - 1 ? currentGalleryItem + 1 : 0;
        galleryItems[currentGalleryItem].classList.add('active');
    }
    
    updateGalleryButtons();
}

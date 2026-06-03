document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    const slideInterval = 5000; // Time frame per slide change (2 seconds)

    function nextSlide() {
        // Remove the active class from the current slide
        slides[currentSlide].classList.remove('active');
        
        // Calculate index rotation mapping loop
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Inject active state rules onto the next target slide container
        slides[currentSlide].classList.add('active');
    }

    // Initialize the background processing rotation track
    if (slides.length > 0) {
        setInterval(nextSlide, slideInterval);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // The lower the number, the faster the speed animation cycle

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Configuration options for the viewport intersection watcher
    const observerOptions = {
        root: null, // Uses the browser viewport
        rootMargin: "0px",
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the class to execute the CSS fade-up transition
                entry.target.classList.add("visible");
                // Stop tracking this element once animated to save processing overhead
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target all declared animation hooks on the page
    const elementsToAnimate = document.querySelectorAll(".fade-up-element");
    elementsToAnimate.forEach(element => animationObserver.observe(element));
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("whatsappAdmissionForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const studentName = document.getElementById("studentName").value.trim();
        const admissionLevel = document.getElementById("admissionLevel").value;
        const parentName = document.getElementById("parentName").value.trim();
        const parentLocation = document.getElementById("parentLocation").value.trim();

        const phoneNumber = "2348135305659";

        const message = 
`Hello God's Power Academy Registry,

I would like to submit an online admission request for my ward. Here are the registration details:

* STUDENT DETAILS *
- Full Name: ${studentName}
- Target Entry Level: ${admissionLevel}

* GUARDIAN DETAILS *
- Parent Name: ${parentName}
- Residential Location: ${parentLocation}

Please let me know the next steps for validation and structural clearance.`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const constructionModal = document.getElementById("constructionModal");
    const closeConstructionBtn = document.getElementById("closeConstructionBtn");
    
    // Select both portal buttons in the navigation bar
    const portalButtons = document.querySelectorAll(".btn-check, .btn-portal");

    // Open popup when any portal button is clicked
    portalButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent unexpected navigation or reloads
            constructionModal.classList.add("active");
        });
    });

    // Close popup when clicking the Acknowledge button
    closeConstructionBtn.addEventListener("click", () => {
        constructionModal.classList.remove("active");
    });

    // Close popup automatically if user clicks on the outer blurred background
    constructionModal.addEventListener("click", (e) => {
        if (e.target === constructionModal) {
            constructionModal.classList.remove("active");
        }
    });
});
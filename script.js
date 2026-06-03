document.addEventListener('DOMContentLoaded', () => {
    // --- 1. HERO SLIDER CORE CONFIG ---
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    const slideInterval = 5000;

    function nextSlide() {
        if (slides.length === 0) return;
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    if (slides.length > 0) {
        setInterval(nextSlide, slideInterval);
    }

    // --- 2. MULTI-TARGET SCROLL REVEAL & NUMERICAL COUNTER ENGINE ---
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    };

    const pageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                } else {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll(".fade-up-element");
    elementsToAnimate.forEach(element => pageObserver.observe(element));

    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => pageObserver.observe(counter));

    function animateCounter(counter) {
        const speed = 200;
        const target = +counter.getAttribute('data-target');
        
        const updateCount = () => {
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
    }

    // --- 3. DEDICATED STANDALONE ADMISSION FORM INTERCEPT ---
    const form = document.getElementById("whatsappAdmissionForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // Stop page from refreshing

            // Extract input values safely
            const studentName = document.getElementById("studentName").value.trim();
            const admissionLevel = document.getElementById("admissionLevel").value;
            const parentName = document.getElementById("parentName").value.trim();
            const parentLocation = document.getElementById("parentLocation").value.trim();

            // International format for your WhatsApp destination desk
            const phoneNumber = "2348135305659";

            // Compile information string block
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

            // URL encode formatting properties smoothly
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            // Open message context in a brand new tab execution vector
            window.open(whatsappUrl, '_blank');
        });
    }

    // --- 4. UNDER CONSTRUCTION MODAL INTERACTION INTERFACE ---
    const constructionModal = document.getElementById("constructionModal");
    const closeConstructionBtn = document.getElementById("closeConstructionBtn");
    const portalButtons = document.querySelectorAll(".btn-check, .btn-portal");

    if (constructionModal && closeConstructionBtn) {
        portalButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                e.preventDefault();
                constructionModal.classList.add("active");
            });
        });

        closeConstructionBtn.addEventListener("click", () => {
            constructionModal.classList.remove("active");
        });

        constructionModal.addEventListener("click", (e) => {
            if (e.target === constructionModal) {
                constructionModal.classList.remove("active");
            }
        });
    }
});
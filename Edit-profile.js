document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.profile-form');
    const submitBtn = document.querySelector('.submit-btn');
    const bioTextarea = document.getElementById('bio');
    const charCountSpan = document.querySelector('.char-count');
    const maxChars = 150;

    // --- 1. Enable Submit Button on Change ---
    // A simple function to check if the form fields have changed (in a real app, this is more complex)
    const enableSubmitIfChanged = () => {
        // For this example, we'll just check if the bio is not empty
        if (bioTextarea.value.trim() !== "") {
            submitBtn.disabled = false;
        } else {
            // In a real app, check all fields against original values
            submitBtn.disabled = true;
        }
    };

    // Listen for input and change events on the form elements
    form.addEventListener('input', enableSubmitIfChanged);
    form.addEventListener('change', enableSubmitIfChanged);


    // --- 2. Bio Character Count Logic ---
    const updateCharCount = () => {
        const currentLength = bioTextarea.value.length;
        charCountSpan.textContent = `${currentLength} / ${maxChars}`;

        if (currentLength > maxChars) {
            charCountSpan.style.color = 'red';
            // Optionally truncate the input
            bioTextarea.value = bioTextarea.value.substring(0, maxChars);
        } else {
            charCountSpan.style.color = 'var(--secondary-text-color)';
        }
    };

    bioTextarea.addEventListener('input', updateCharCount);

    // Initialize character count on page load
    updateCharCount();


    // --- 3. Handle Form Submission ---
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted! (In a real application, data would be sent to the server)');
    });
});
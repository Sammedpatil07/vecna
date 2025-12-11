document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay = document.getElementById('modalOverlay');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const selectFileBtn = document.getElementById('selectFileBtn');
    const fileInput = document.getElementById('fileInput');

    // Function to show the modal
    const openModal = () => {
        modalOverlay.classList.add('active');
        // Prevent background scrolling when modal is open
        document.body.style.overflow = 'hidden';
    };

    // Function to hide the modal
    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    // 1. Open Modal when the main button is clicked
    openModalBtn.addEventListener('click', openModal);

    // 2. Close Modal when the 'X' button is clicked
    closeModalBtn.addEventListener('click', closeModal);

    // 3. Close Modal when clicking outside the modal content
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

    // 4. Close Modal when the ESC key is pressed
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
    
    // 5. Trigger the hidden file input when "Select from computer" button is clicked
    selectFileBtn.addEventListener('click', () => {
        fileInput.click();
    });

    // Optional: Log selected files (for demonstration)
    fileInput.addEventListener('change', (event) => {
        if (event.target.files.length > 0) {
            console.log('Files selected:', event.target.files);
            alert(`Selected ${event.target.files.length} file(s)!`);
            // In a real application, you would now upload/process these files
        }
    });
});
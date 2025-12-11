document.addEventListener('DOMContentLoaded', () => {
    // Select the action buttons
    const editButton = document.querySelector('.primary-btn');
    const archiveButton = document.querySelector('.secondary-btn');
    const tabItems = document.querySelectorAll('.content-tabs .tab-item');

    // Add click handlers for buttons
    if (editButton) {
        editButton.addEventListener('click', () => {
            alert('Opening Edit Profile settings...');
        });
    }

    if (archiveButton) {
        archiveButton.addEventListener('click', () => {
            alert('Viewing Archive...');
        });
    }

    // Add click handlers for tabs to simulate switching content
    tabItems.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault(); // Stop default link behavior

            // Remove active class from all tabs
            tabItems.forEach(t => t.classList.remove('active'));

            // Add active class to the clicked tab
            tab.classList.add('active');

            // In a real app, you would fetch and display new content (Posts, Reels, etc.) here
            console.log(`Switched to tab: ${tab.querySelector('i').textContent}`);
        });
    });

    // In a full application, you'd use JS to:
    // 1. Load the actual profile image.
    // 2. Fetch and render the post grid content.
    // 3. Handle the 'Note...' feature interaction.
});
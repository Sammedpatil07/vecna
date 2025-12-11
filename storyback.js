let currentSegment = 1;
const totalSegments = 3;
const segmentDuration = 5000; // 5 seconds per segment (matches CSS animation)

// Function to update the progress bar animation
function updateProgressBar() {
    const segments = document.querySelectorAll('.progress-segment');
    segments.forEach((seg, index) => {
        const segmentNumber = index + 1;
        seg.classList.remove('active');
        // Clear any previous animation (not strictly needed with a page reload but good practice)
        seg.style.animation = 'none'; 
        seg.style.width = '100%'; 

        if (segmentNumber < currentSegment) {
            // Segments that are already viewed
            seg.classList.add('finished');
        } else if (segmentNumber === currentSegment) {
            // The current active segment
            seg.classList.add('active');
            
            // Restart the animation for the active segment
            const activeAfter = seg.querySelector('::after');
            // This is a common way to restart a CSS animation
            seg.style.animation = 'none';
            void seg.offsetWidth; // Trigger reflow
            seg.style.animation = null; 
        }
    });
}

// Function to move to the next or previous segment within the main story
function navigateSegment(direction) {
    currentSegment += direction;

    if (currentSegment > totalSegments) {
        // Mock navigation: If end of story, close or move to next full story
        console.log('Story finished, navigating to next story...');
        currentSegment = totalSegments; // Stay on last for now
        return;
    } else if (currentSegment < 1) {
        // Mock navigation: If start of story, move to previous full story
        console.log('Navigating to previous story...');
        currentSegment = 1; // Stay on first for now
        return;
    }

    updateProgressBar();
}

// Function to handle clicking on the navigation areas (prev/next)
window.navigateStory = function(direction) {
    navigateSegment(direction);
};


// Initial setup on load
document.addEventListener('DOMContentLoaded', () => {
    updateProgressBar();

    // The image tag is just a placeholder; a real implementation would use an actual image path
    const storyContent = document.querySelector('.story-content');
    if (storyContent) {
        storyContent.innerHTML = `
            <img src="product_image.jpg" alt="Product Display" style="max-width: 90%; max-height: 80%; border-radius: 8px;">
            <p class="story-caption">@LANCOMEOFFICIAL @MYNYKAA</p>
        `;
    }
});
// Select all like buttons
const likeButtons = document.querySelectorAll('.like-button');

// Select the notification box
const notification = document.getElementById('like-notification');

// Add click event listener to each like button
likeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the number of likes stored in the button's data-likes attribute
        let likeCount = parseInt(this.getAttribute('data-likes'));
        
        // Increment like count
        likeCount++;

        // Update the button's text and like count display
        this.textContent = 'Liked';
        this.classList.add('liked');
        this.setAttribute('data-likes', likeCount);

        // Update the like count text for this pin
        const likeCountDisplay = this.nextElementSibling;
        likeCountDisplay.textContent = `${likeCount} Likes`;

        // Show the notification
        showNotification();
    });
});

// Function to show notification
function showNotification() {
    notification.style.display = 'block';

    // Hide the notification after 3 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

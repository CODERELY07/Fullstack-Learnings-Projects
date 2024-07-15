const evelButton = document.getElementById('evil-button');
const OFFSET = 100;

// Event listener for click on the button
evelButton.addEventListener("click", () => {
    alert("Nice Try");
    window.close();
});

// Event listener for mousemove on the document
document.addEventListener('mousemove', (e) => {
    const x = e.pageX;
    const y = e.pageY;

    // Get the position and dimensions of the button
    const buttonBox = evelButton.getBoundingClientRect();

    // Calculate distances from the mouse to the center of the button
    const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width);
    const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height);
    const horizontalOffset = buttonBox.width / 2 + OFFSET;
    const verticalOffset = buttonBox.height / 2 + OFFSET;

    // If the mouse is too close to the button, move the button away
    if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
        setButtonPosition(
            buttonBox.left + horizontalOffset / horizontalDistanceFrom * 10,
            buttonBox.top + verticalOffset / verticalDistanceFrom * 10
        );
    }
});

// Function to set new position of the button
function setButtonPosition(left, top) {
    const windowBox = document.body.getBoundingClientRect();
    const buttonBox = evelButton.getBoundingClientRect();

    // Adjust button position to keep it within the document boundaries
    if (left < windowBox.left + OFFSET) {
        left = windowBox.left + OFFSET;
    }
    if (left + buttonBox.width > windowBox.right - OFFSET) {
        left = windowBox.right - buttonBox.width - OFFSET;
    }
    if (top < windowBox.top + OFFSET) {
        top = windowBox.top + OFFSET;
    }
    if (top + buttonBox.height > windowBox.bottom - OFFSET) {
        top = windowBox.bottom - buttonBox.height - OFFSET;
    }

    // Set the new position of the button
    evelButton.style.left = `${left}px`;
    evelButton.style.top = `${top}px`;
}

// Function to calculate distance from center
function distanceFromCenter(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize / 2;
}

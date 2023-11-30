// Function to create a firework
function createFirework() {
  const firework = document.createElement('div');
  firework.className = 'firework';
  document.body.appendChild(firework);

  // Set random position for the firework
  const xPos = Math.random() * window.innerWidth;
  const yPos = Math.random() * window.innerHeight;
  firework.style.left = xPos + 'px';
  firework.style.top = yPos + 'px';

  // After a delay, remove the firework
  setTimeout(() => {
    firework.remove();
  }, 2000); // Change the duration as needed
}

// Function to initiate multiple fireworks
function initiateFireworks() {
  setInterval(createFirework, 500); // Adjust timing for fireworks
}

// Call the function to start the fireworks when the page loads
window.onload = initiateFireworks;

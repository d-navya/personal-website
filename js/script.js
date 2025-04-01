document.querySelector('.start-btn').addEventListener('click', () => {
    // Play a retro sound effect
    const audio = new Audio('assets/retro-click.mp3');
    audio.play();

    // Delay transition to the next page to hear the sound effect
    setTimeout(() => {
        window.location.href = 'about.html';
    }, 500); // Wait 500ms before switching
});
const buttons = document.querySelectorAll('.flicker');
function randomFlicker() {
    buttons.forEach(button => {
        const intensity = Math.random() * 10 + 5; // Random glow intensity
        const shadowBlur = Math.random() * 10 + 5; // Random blur amount
        button.style.boxShadow = `0 0 ${intensity}px #00ff00, 0 0 ${shadowBlur}px #00ff00`;

        // Set a timeout to vary timing
        setTimeout(randomFlicker, Math.random() * 500 + 200);
    });
}
randomFlicker();

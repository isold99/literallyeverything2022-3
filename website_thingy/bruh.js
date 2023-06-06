function update_bg() {
    addX = (window.innerWidth / 2 - event.clientX) / 16;
    addY = (window.innerHeight / 2 - event.clientY) / 16;
    document.getElementById('bg').style.backgroundPosition = `calc(50% + ${addX}px) calc(50% + ${addY}px)`;
}
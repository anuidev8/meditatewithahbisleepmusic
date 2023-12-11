document.getElementById('rain-sound').addEventListener('click', function() {
    var rainSound = document.getElementById('rainAudio');
    
    // Check if the audio is playing
    if (rainSound.paused) {
        this.classList.add('active')
        rainSound.play(); // Play the sound if it was paused
    } else {
        this.classList.remove('active')
        rainSound.pause(); // Pause the sound if it was playing
    }
});

document.getElementById('fire-sound').addEventListener('click', function() {
    var rainSound = document.getElementById('fireAudio');

    // Check if the audio is playing
    if (rainSound.paused) {
        this.classList.add('active')
        rainSound.play(); // Play the sound if it was paused
    } else {
        this.classList.remove('active')
        rainSound.pause(); // Pause the sound if it was playing
    }
});


document.getElementById('crickets-sound').addEventListener('click', function() {
    var rainSound = document.getElementById('cricketsAudio');
   
    // Check if the audio is playing
    if (rainSound.paused) {
        this.classList.add('active')
        rainSound.play(); // Play the sound if it was paused
    } else {
        this.classList.remove('active')
        rainSound.pause(); // Pause the sound if it was playing
    }
});

document.body.addEventListener('click', function() {
    var environmentSound = document.getElementById('environmentAudio');
    if (environmentSound.paused) {
        environmentSound.play();
    }
});

// Optional: Play the sound when the page has focus
window.onfocus = function() {
    var environmentSound = document.getElementById('environmentAudio');
    if (environmentSound.paused) {
        environmentSound.play();
    }
};



// Music tracks and their associated sound effects
const musicTracks = [
    { id: 'rainAudio', src: 'https://res.cloudinary.com/dnmjmjdsj/video/upload/v1702247988/audios/rain_oj61ra.mp3',imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702248157/audios/1_iljszo.png", },
    { id: 'cricketsAudio', src: 'https://res.cloudinary.com/dnmjmjdsj/video/upload/v1702248061/audios/crickets_kk9pv5.mp3',imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702308893/audios/2_ti0t8p.png", },
    { id: 'fireAudio', src: 'https://res.cloudinary.com/dnmjmjdsj/video/upload/v1702248021/audios/fire_tzgdsb.mp3' ,imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702308741/audios/4_dwiztb.png",},
]





// Function to update sound effects based on the selected track
function updateSoundEffects(effect) {
    const soundEffectsContainer = document.getElementById('sound-effects');
   
    const existingEffectIds = Array.from(soundEffectsContainer.children).map(child => child.id);

 
        
               if(!document.getElementById(`audio-${effect.id}`)) {

             
            let box = document.createElement('div')
            box.classList.add(`box-${effect.id}`)

             // Create button to toggle effect
             let button = document.createElement('button');
             button.id = effect.id;
             button.addEventListener('click', function() {
                 toggleSoundEffect(effect.id);
             });
             box.appendChild(button)
             let pr = document.createElement('p');
             pr.innerText = effect.id;

        let figure = document.createElement('figure');
       

        let img = document.createElement('img');
        img.src = effect.imageUrl;
        img.alt = effect.id;
        figure.appendChild(img)

        // Create audio element for each effect
        let audio = document.createElement('audio');
        audio.id = `audio-${effect.id}`;
        audio.src = effect.src;
        audio.loop = true;

   

        // Create volume slider for each effect
        let volumeSlider = document.createElement('input');
        volumeSlider.type = 'range';
        volumeSlider.min = 0;
        volumeSlider.max = 1;
        volumeSlider.step = 0.01;
        volumeSlider.value = 0.5; // Default volume
        volumeSlider.addEventListener('input', function() {
            adjustVolume(effect.id, this.value);
        });
        box.appendChild(volumeSlider)

        button.appendChild(figure);
        button.appendChild(pr)
        button.appendChild(audio);
       

        soundEffectsContainer.append(box)
    }
        
    
}

// Function to adjust volume
function adjustVolume(soundId, volume) {
    var soundEffect = document.getElementById(`audio-${soundId}`);
    soundEffect.volume = volume;
}

// Toggle sound effects
function toggleSoundEffect(soundId) {
   
    var soundEffect = document.getElementById(`audio-${soundId}`)
    const button = document.querySelector(`#${soundId} figure`) 
    if (soundEffect.paused) {
        button.classList.add('active')
        soundEffect.play();
    } else {
        button.classList.remove('active')
        soundEffect.pause();
    }
}

// Existing code for musicTracks...

// Function to update sound effects based on selected tracks
function updateSelectedSoundEffects() {
    const selectedTracks = document.querySelectorAll('.musicTrack:checked');
    console.log(selectedTracks);
        let combinedEffects = [];
        selectedTracks.forEach(track => {
            let trackKey = track.getAttribute('data-track');
            const ms = musicTracks.find(music => music.id === trackKey)
            combinedEffects = [...combinedEffects, ms];
        });
    
       // updateSoundEffects(combinedEffects);
}

document.querySelectorAll('.musicTrack').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
        const effectId = e.target.id;
        if (e.target.checked) {
            // Add and play the effect if it's not already in the container
            const effect = musicTracks.find(music => music.id === effectId);
            updateSoundEffects(effect);
            playSoundEffect(effect.id);
        } else {
            // Remove and pause the effect if the checkbox is unchecked
            removeSoundEffect(effectId);
            pauseSoundEffect(effectId);
        }
    });
});

function removeSoundEffect(soundId) {
    const effectElement = document.querySelector(`.box-${soundId}`);
    
    if (effectElement) {
        document.getElementById('sound-effects').removeChild(effectElement)
    }
}

function playSoundEffect(soundId) {
    const soundEffect = document.getElementById(`audio-${soundId}`);
    const button = document.querySelector(`#${soundId} figure`) 
    if (soundEffect && soundEffect.paused) {
        button.classList.add('active')
        soundEffect.play();
    }
}

function pauseSoundEffect(soundId) {
    const soundEffect = document.getElementById(`audio-${soundId}`);
    const button = document.querySelector(`#${soundId} figure`) 
    if (soundEffect && !soundEffect.paused) {
        button.classList.remove('active')
        soundEffect.pause();
    }
}




// Existing code for updateSoundEffects, toggleSoundEffect, adjustVolume...
document.getElementById('menuIcon').addEventListener('click', function() {
  
    var musicMenu = document.getElementById('musicMenu');
    if (musicMenu.classList.contains('hidden')) {
        musicMenu.classList.remove('hidden');
        setTimeout(function() {
            musicMenu.classList.add('show');
        }, 10); // Timeout for CSS transition
    } else {
        musicMenu.classList.remove('show');
        setTimeout(function() {
            musicMenu.classList.add('hidden');
        }, 500); // Match the duration of the CSS transition
    }
});
document.getElementById('menuCloseIcon').addEventListener('click', function() {
  
    var musicMenu = document.getElementById('musicMenu');
    musicMenu.classList.remove('show');
    setTimeout(function() {
        musicMenu.classList.add('hidden');
    }, 500); // Match the duration of the CSS transition
});



// Initialize with default sound effects (optional)
//updateSelectedSoundEffects();

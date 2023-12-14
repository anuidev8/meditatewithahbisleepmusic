// Music tracks and their associated sound effects
/* const musicTracks = [
    { id: 'rainAudio', src: 'https://res.cloudinary.com/dnmjmjdsj/video/upload/v1702247988/audios/rain_oj61ra.mp3', imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702508479/audios/icons/1_ntd34p.png", },
    { id: 'cricketsAudio', src: 'https://res.cloudinary.com/dnmjmjdsj/video/upload/v1702248061/audios/crickets_kk9pv5.mp3', imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702509247/audios/icons/8_cslz5j.png", },
    { id: 'fireAudio', src: 'https://res.cloudinary.com/dnmjmjdsj/video/upload/v1702248021/audios/fire_tzgdsb.mp3', imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702509295/audios/icons/4_kolblb.png", },
    { id: 'ringAudio', src: 'https://res.cloudinary.com/dnmjmjdsj/video/upload/v1702509663/audios/sounds/service-bell-ring-14610_shzjhe.mp3', imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702509528/audios/sounds/6_xolypk.png", },
    
] */

const musicTracks = [
    {
        id: "rainAudio",
        track: "rainAudio",
        label: "Rain",
        imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702508479/audios/icons/1_ntd34p.png",
        src: 'https://res.cloudinary.com/dnmjmjdsj/video/upload/v1702247988/audios/rain_oj61ra.mp3',
    },
    {
        id: "cricketsAudio",
        track: "cricketsAudio",
        label: "Crickets",
        imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702509247/audios/icons/8_cslz5j.png",
        src: 'https://res.cloudinary.com/dnmjmjdsj/video/upload/v1702248061/audios/crickets_kk9pv5.mp3',
    },
    {
        id: "fireAudio",
        track: "fireAudio",
        label: "Fire",
        imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702509295/audios/icons/4_kolblb.png",
        src: 'https://res.cloudinary.com/dnmjmjdsj/video/upload/v1702248021/audios/fire_tzgdsb.mp3'
    },
    { id: 'ringAudio', label: 'Ring', track: 'ringAudio', src: 'https://res.cloudinary.com/dnmjmjdsj/video/upload/v1702509663/audios/sounds/service-bell-ring-14610_shzjhe.mp3', imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702509528/audios/sounds/6_xolypk.png", },
    {
        id: "bellAudio",
        track: "bellAudio",
        label: "Bells",
        imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702539357/audios/icons/7_rgwsr8.png",
        src:"https://res.cloudinary.com/dnmjmjdsj/video/upload/v1702540952/audios/icons/wind-chimes-bells-115747_a8tbkt.mp3"
    },
    {
        id: "thunderAudio",
        track: "thunderAudio",
        label: "Thunders",
        imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702539337/audios/icons/3_a1etkv.png",
        src:'https://res.cloudinary.com/dnmjmjdsj/video/upload/v1702540826/audios/icons/thunder-25689_r1bdzg.mp3'
    },
    {
        id: "windAudio",
        track: "windAudio",
        label: "Wind",
        imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702539346/audios/icons/5_a5smqk.png",
        src:'https://res.cloudinary.com/dnmjmjdsj/video/upload/v1702540653/audios/icons/wind-in-trees-117477_ezkw3v.mp3'
    },
    {
        id: "starsAudio",
        track: "starsAudio",
        label: "Stars",
        imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702539329/audios/icons/2_e7wbnx.png",
        src:'https://res.cloudinary.com/dnmjmjdsj/video/upload/v1702540356/audios/icons/ambience-night-field-cricket-01-7015_uc7p7r.mp3'
    },
    // Add more options as needed
];




// Function to update sound effects based on the selected track
function updateSoundEffects(effect) {
    const soundEffectsContainer = document.getElementById('sound-effects');

    const existingEffectIds = Array.from(soundEffectsContainer.children).map(child => child.id);



    if (!document.getElementById(`audio-${effect.id}`)) {


        let box = document.createElement('div')
        box.classList.add(`box-${effect.id}`)

        // Create button to toggle effect
        let button = document.createElement('button');
        button.id = effect.id;
        button.addEventListener('click', function () {
            toggleSoundEffect(effect.id);
        });
        box.appendChild(button)
        let pr = document.createElement('p');
        pr.innerText = effect.label;

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
        volumeSlider.addEventListener('input', function () {
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
document.getElementById('menuIcon').addEventListener('click', function () {

    var musicMenu = document.getElementById('musicMenu');
    if (musicMenu.classList.contains('hidden')) {
        musicMenu.classList.remove('hidden');
        setTimeout(function () {
            musicMenu.classList.add('show');
        }, 10); // Timeout for CSS transition
    } else {
        musicMenu.classList.remove('show');
        setTimeout(function () {
            musicMenu.classList.add('hidden');
        }, 500); // Match the duration of the CSS transition
    }
});
document.getElementById('menuCloseIcon').addEventListener('click', function () {

    var musicMenu = document.getElementById('musicMenu');
    musicMenu.classList.remove('show');
    setTimeout(function () {
        musicMenu.classList.add('hidden');
    }, 500); // Match the duration of the CSS transition
});


// load by default 
function initializeDefaultSoundEffects() {
    const defaultEffects = ['rainAudio', 'cricketsAudio', 'fireAudio', 'bellAudio'];

    defaultEffects.forEach(effectId => {
        const effect = musicTracks.find(track => track.id === effectId);
        if (effect) {
            updateSoundEffects(effect);
            selectCheckbox(effectId);
        }
    });
}

function selectCheckbox(effectId) {
    const checkbox = document.getElementById(effectId);
    if (checkbox) {
        checkbox.checked = true;
    }
}

// Call this function when the mainApp screen is loaded
initializeDefaultSoundEffects();

document.getElementById('homeIcon').addEventListener('click', function() {
    localStorage.clear('currentPlaying')
    
    changeScreen('welcomeScreen'); // Navigate back to the welcome screen
    window.location.reload()
});

function stopAndRemoveAllSoundEffects() {
    const soundEffectsContainer = document.getElementById('sound-effects');
    while (soundEffectsContainer.firstChild) {
        const audioElement = soundEffectsContainer.firstChild.querySelector('audio');
        if (audioElement) {
            audioElement.pause();
            audioElement.currentTime = 0; // Reset the audio playback position
        }
        soundEffectsContainer.removeChild(soundEffectsContainer.firstChild);
    }
}

// ... rest of your existing code ...


// Initialize with default sound effects (optional)
//updateSelectedSoundEffects();

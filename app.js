function changeScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden-app');
        screen.classList.remove('show-app');
    });

    const selectedScreen = document.getElementById(screenId);
    selectedScreen.classList.remove('hidden-app');
    setTimeout(() => {
        selectedScreen.classList.add('show-app');
    }, 10);

    localStorage.setItem('lastSelectedScreen', screenId);
}

function loadLastSelectedScreen() {
    const lastScreen = localStorage.getItem('lastSelectedScreen');
    if (lastScreen) {
        changeScreen(lastScreen);
    } else {
        changeScreen('welcomeScreen');
    }
    loadAndPlaySavedMusic();
}

function playSelectedMusic(musicFile) {
    const audio = new Audio(musicFile);
    audio.play();

    // Save the currently playing music to localStorage
    localStorage.setItem('currentPlayingMusic', musicFile);

    // Change to the main app screen after selecting music
    changeScreen('mainApp');
}

function loadAndPlaySavedMusic() {
    const savedMusic = localStorage.getItem('currentPlayingMusic');
    if (savedMusic) {
        playSelectedMusic(savedMusic);
    }
}



loadLastSelectedScreen();

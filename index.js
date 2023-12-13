// Define your menu options
const menuOptions = [
    {
        id: "rainAudio",
        track: "rainAudio",
        label: "Rain",
        imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702248157/audios/1_iljszo.png"
    },
    {
        id: "cricketsAudio",
        track: "cricketsAudio",
        label: "Crickets",
        imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702308893/audios/2_ti0t8p.png",
    },
    {
        id: "fireAudio",
        track: "fireAudio",
        label: "Fire",
        imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702308741/audios/4_dwiztb.png",
    },
    // Add more options as needed
];

// Function to create a menu option
function createMenuOption(option) {
    const menuOptionDiv = document.createElement('div');
    menuOptionDiv.className = 'menu-option';

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = option.id;
    input.className = 'musicTrack';
    input.setAttribute('data-track', option.track);

    const label = document.createElement('label');
    label.setAttribute('for', option.id);

    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = option.imageUrl;
    img.width = 100;
    img.height = 100;
    figure.appendChild(img);

    label.appendChild(figure);
    label.appendChild(document.createTextNode(option.label));

    menuOptionDiv.appendChild(input);
    menuOptionDiv.appendChild(label);

    return menuOptionDiv;
}

// Function to add menu options to the musicMenu
function addMenuOptions() {
    const musicMenu = document.getElementById('music-menu-container');
    menuOptions.forEach(option => {
        musicMenu.appendChild(createMenuOption(option));
    });
}

// Call addMenuOptions to initialize the menu
addMenuOptions();

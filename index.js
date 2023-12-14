// Define your menu options
const menuOptions = [
    {
        id: "rainAudio",
        track: "rainAudio",
        label: "Rain",
        imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702508479/audios/icons/1_ntd34p.png"
    },
    {
        id: "cricketsAudio",
        track: "cricketsAudio",
        label: "Crickets",
        imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702509247/audios/icons/8_cslz5j.png",
    },
    {
        id: "fireAudio",
        track: "fireAudio",
        label: "Fire",
        imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702509295/audios/icons/4_kolblb.png",
    },
    { id: 'ringAudio', label: 'Ring', track: 'ringAudio', src: 'https://res.cloudinary.com/dnmjmjdsj/video/upload/v1702509663/audios/sounds/service-bell-ring-14610_shzjhe.mp3', imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702509528/audios/sounds/6_xolypk.png", },
    {
        id: "bellAudio",
        track: "bellAudio",
        label: "Bells",
        imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702539357/audios/icons/7_rgwsr8.png",
    },
    {
        id: "thunderAudio",
        track: "thunderAudio",
        label: "Thunders",
        imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702539337/audios/icons/3_a1etkv.png",
    },
    {
        id: "windAudio",
        track: "windAudio",
        label: "Wind",
        imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702539346/audios/icons/5_a5smqk.png",
    },
    {
        id: "starsAudio",
        track:"starsAudio",
        label: "Stars",
        imageUrl: "https://res.cloudinary.com/dnmjmjdsj/image/upload/v1702539329/audios/icons/2_e7wbnx.png",
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

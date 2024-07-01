document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('#fireworks');
    const fireworks = new Fireworks.default(container, {
        autoresize: true,
        opacity: 0.7,
        acceleration: 1.00,
        friction: 0.90,
        gravity: 1,
        particles: 200,
        traceLength: 1.5,
        traceSpeed: 5,
        explosion: 2,
        intensity: 10,
        flickering: 50,
        lineStyle: 'round',
        hue: {
            min: 0,
            max: 360
        },
        delay: {
            min: 30,
            max: 60
        },
        rocketsPoint: {
            min: 50,
            max: 50
        },
        lineWidth: {
            explosion: {
                min: 1,
                max: 4
            },
            trace: {
                min: 1,
                max: 2
            }
        },
        brightness: {
            min: 50,
            max: 80
        },
        decay: {
            min: 0.015,
            max: 0.03
        },
        mouse: {
            click: true,
            move: false,
            max: 10
        },
        sound: {
            enabled: true,
            files: ["./sounds/explosion0.mp3", "./sounds/explosion1.mp3", "./sounds/explosion2.mp3"],
            volume: {
                min: 25,
                max: 60
            }
        }
    });

    const launchInput = document.querySelector('input[name="launch"]');
    const jsButton = document.querySelector('#js');
    const bothButton = document.querySelector('#both');
    const allinputs = document.querySelectorAll('input');
    const settingsMenu = document.getElementById('settings-menu');
    const settingsInputs = settingsMenu.querySelectorAll('input');
    let isEnabled = false;

    launchInput.addEventListener('click', function () {
        isEnabled = !isEnabled;

        allinputs.forEach(input => {
            if (input !== launchInput && input.name !== 'popup' && !settingsMenu.contains(input)) {
                input.disabled = isEnabled;
            }
        });

        if (isEnabled) {
            if (jsButton.checked) {
                cssdivs.forEach(element => {
                    element.style.display = "none";
                });
                fireworks.start();

            } else if (bothButton.checked) {
                fireworks.start();
            } else {
                cssdivs.forEach(element => {
                    element.style.display = "block";
                });
            }
        } else {
            fireworks.waitStop();
        }
    });

    let cssdivs = container.querySelectorAll('div');

    let soundButton = document.getElementById("sound-button");
    soundButton.addEventListener("click", function () {
        toggleMuteAudio();
    });

    var isMuted = false;

    function toggleMuteAudio() {
        isMuted = !isMuted;
        fireworks.sound.options.sound.enabled = !fireworks.sound.options.sound.enabled;
        console.log(fireworks.sound.options.sound.enabled ? "unmuted" : "muted");
    }

    const cssButton = document.querySelector('#css');
    const fifthLi = document.querySelector('section > ul > li:nth-of-type(5)');
    const fourthLi = document.querySelector('section > ul > li:nth-of-type(4)');
    const thirdLi = document.querySelector('section > ul > li:nth-of-type(3)');
    const secondLi = document.querySelector('section > ul > li:nth-of-type(2)');
    const sectionconsole = document.querySelector('section:nth-of-type(2)');
    const sectionconsoleBottom = document.querySelector('section:nth-of-type(3)');
    const sectionconsoleUl = sectionconsole.querySelector('ul');

    cssButton.addEventListener('click', function () {
        [fifthLi, fourthLi, thirdLi, secondLi].forEach(li => li.style.removeProperty('display'));
        sectionconsole.style.removeProperty('min-width');
        sectionconsoleBottom.style.removeProperty('min-width');
        sectionconsoleUl.style.removeProperty('grid-template-columns');
    });

    jsButton.addEventListener('click', function () {
        [thirdLi, secondLi, fourthLi, fifthLi].forEach(li => li.style.display = "none");
        sectionconsole.style.minWidth = '0';
        sectionconsoleBottom.style.minWidth = '160px';
        sectionconsoleUl.style.gridTemplateColumns = '1fr';
    });

    const settingsBtn = document.getElementById('settings-btn');
    settingsMenu.style.display = 'none';

    settingsBtn.addEventListener('click', () => {
        if (settingsMenu.classList.contains('fadeOut')) {
            settingsMenu.classList.remove('fadeOut');
        }
        settingsMenu.style.display = (settingsMenu.style.display === 'none') ? 'flex' : 'none';
    });

    const cloudButton = document.getElementById('cloud-button');
    cloudButton.addEventListener('change', () => {
        let clouds = document.querySelectorAll(".bigCloud");
        clouds.forEach(cloud => {
            cloud.style.display = cloudButton.checked ? 'block' : 'none';
        });
    });

    const starButton = document.getElementById('star-button');
    starButton.addEventListener('change', () => {
        let starContainer = document.getElementById('starContainer')

        starContainer.style.display = starButton.checked ? 'block' : 'none';

    });
const autoscrollButton = document.getElementById('autoscroll-button');
let autoscroll = true; // Initial state is autoscrolling on

autoscrollButton.addEventListener('change', () => {
    if (autoscroll) {
        stopAutoScroll();
        autoscroll = false;
        console.log('Autoscroll turned off');
    } else {
        startAutoScroll(timeToScroll, pauseTime);
        autoscroll = true;
        console.log('Autoscroll turned on');
    }
});

let scrollPosition = 0;
let scrollDirection = 1;
let isManualScroll = false;
let autoScrollInterval;
let timeToScroll = 50000;
let pauseTime = 5000;

function startAutoScroll(scrollTime, stayTime) {
    const scrollStep = (document.body.scrollHeight - window.innerHeight) / (scrollTime / 10);
    let stayCounter = 0;
    let isStaying = false;
    
    autoScrollInterval = setInterval(() => {
        if (!isManualScroll && autoscroll) { // Check if autoscroll is enabled
            if (!isStaying) {
                scrollPosition += scrollDirection * scrollStep;
                
                if (scrollPosition >= document.body.scrollHeight - window.innerHeight) {
                    scrollDirection = -1;
                    scrollPosition = document.body.scrollHeight - window.innerHeight;
                    isStaying = true;
                } else if (scrollPosition <= 0) {
                    scrollDirection = 1;
                    scrollPosition = 0;
                    isStaying = true;
                }
                
                document.documentElement.scrollTop = scrollPosition;
                document.body.scrollTop = scrollPosition;
                
                // console.log('Scrolling to:', scrollPosition);
                // for testing the position timing
            } else {
                stayCounter += 10;
                if (stayCounter >= stayTime) {
                    stayCounter = 0;
                    isStaying = false;
                }
            }
        }
    }, 10);
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

window.addEventListener('scroll', () => {
    if (!isManualScroll) {
        stopAutoScroll();
        isManualScroll = true;
        console.log('Manual scroll detected');
        
        setTimeout(() => {
            isManualScroll = false;
            if (autoscroll) {
                startAutoScroll(timeToScroll, pauseTime);
                console.log('Resuming auto scroll');
            }
        }, 10000);
    }
});

let manualScrollTimeout;
startAutoScroll(timeToScroll, pauseTime);


});


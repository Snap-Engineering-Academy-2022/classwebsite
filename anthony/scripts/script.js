const intro = document.getElementById("intro");
const wedontcare = document.getElementById("wedontcare");
const graduationday = document.getElementById("graduationday");
const allfallsdown = document.getElementById("allfallsdown");
const illflyaway = document.getElementById("illflyaway");
const spaceship = document.getElementById("spaceship");
const jesuswalks = document.getElementById("jesuswalks");
const neverletmedown = document.getElementById("neverletmedown");
const getemhigh = document.getElementById("getemhigh");
const workoutplan = document.getElementById("workoutplan");
const thenewworkoutplan = document.getElementById("thenewworkoutplan");

const slowjamz = document.getElementById("slowjamz");
const breatheinbreatheout = document.getElementById("breatheinbreatheout");
const schoolspiritskit1 = document.getElementById("schoolspiritskit1");
const schoolspirit = document.getElementById("schoolspirit");
const schoolspiritskit2 = document.getElementById("schoolspiritskit2");
const liljimmyskit = document.getElementById("liljimmyskit");
const twowords = document.getElementById("twowords");
const throughthewire = document.getElementById("throughthewire");
const familybusiness = document.getElementById("familybusiness");
const lastcall = document.getElementById("lastcall");

const playerMessage = document.getElementById("player-message");
const audioPlayer = document.getElementById("audio-player");

const introIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7lIr3vVhpDkU5mQEDcnA0S?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';
const wedontcareIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0IW0qaeyxL5Et4UG2MrJKB?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';
const graduationdayIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7wL7Lb8Q3aYyq6gmRL0PZq?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';
const allfallsdownIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5SkRLpaGtvYPhw02vZhQQ9?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';
const illflyawayIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6MgGapP3EPFm9kYUvYBTZR?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';
const spaceshipIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1ko2NuvWlQdxtNRc8QQzmT?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';
const jesuswalksIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5g1vtHqi9uV7xtYeCcFOBx?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';
const neverletmedownIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/34j4OxJxKznBs88cjSL2j9?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';
const getemhighIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5b2FFKC64kxqcfaFnIZxoM?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';
const workoutplanIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2a1JSfTePKhysdIif2bzut?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';
const thenewworkoutplanIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1Vp4St7JcXaUoJcIahtf3L?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';


const slowjamzIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3A4cpTBPaIQdtPFb5JxtaX?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';
const breatheinbreatheoutIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4KFY4EEv9CN6ivrzD6vEvg?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';
const schoolspiritskit1Iframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/25mwJPzWVmS2yronBNQJF1?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';
const schoolspiritIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1th3G3okofWlvGWAAR7Y4V?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';
const schoolspiritskit2Iframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5MAY7XyW322jMwLDtBQgsZ?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';
const liljimmyskitIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4BhwlQ9mTwhFGXpQvP9JTV?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';
const twowordsIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/62wtttQzoIA9HnNmGVd9Yq?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';
const throughthewireIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4mmkhcEm1Ljy1U9nwtsxUo?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';
const familybusinessIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5DBmXF7QO43Cuy9yqva116?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';
const lastcallIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7iOhWWYjhhQiXzF4o4HhXN?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';

intro.onclick = function() {
    playerMessage.style.display = "none";

    while (audioPlayer.firstChild) {
        audioPlayer.removeChild(audioPlayer.firstChild);
    }

    audioPlayer.innerHTML = introIframe;

    // intro.classList.add('active');
};

wedontcare.onclick = function() {
    playerMessage.style.display = "none";

    while (audioPlayer.firstChild) {
        audioPlayer.removeChild(audioPlayer.firstChild);
    }

    audioPlayer.innerHTML = wedontcareIframe;
};

graduationday.onclick = function() {
    playerMessage.style.display = "none";

    while (audioPlayer.firstChild) {
        audioPlayer.removeChild(audioPlayer.firstChild);
    }

    audioPlayer.innerHTML = graduationdayIframe;
};

allfallsdown.onclick = function() {
    playerMessage.style.display = "none";

    while (audioPlayer.firstChild) {
        audioPlayer.removeChild(audioPlayer.firstChild);
    }

    audioPlayer.innerHTML = allfallsdownIframe;
};

illflyaway.onclick = function() {
    playerMessage.style.display = "none";

    while (audioPlayer.firstChild) {
        audioPlayer.removeChild(audioPlayer.firstChild);
    }

    audioPlayer.innerHTML = illflyawayIframe;
};

spaceship.onclick = function() {
    playerMessage.style.display = "none";

    while (audioPlayer.firstChild) {
        audioPlayer.removeChild(audioPlayer.firstChild);
    }

    audioPlayer.innerHTML = spaceshipIframe;
};

jesuswalks.onclick = function() {
    playerMessage.style.display = "none";

    while (audioPlayer.firstChild) {
        audioPlayer.removeChild(audioPlayer.firstChild);
    }

    audioPlayer.innerHTML = jesuswalksIframe;
};

neverletmedown.onclick = function() {
    playerMessage.style.display = "none";

    while (audioPlayer.firstChild) {
        audioPlayer.removeChild(audioPlayer.firstChild);
    }

    audioPlayer.innerHTML = neverletmedownIframe;
};

getemhigh.onclick = function() {
    playerMessage.style.display = "none";

    while (audioPlayer.firstChild) {
        audioPlayer.removeChild(audioPlayer.firstChild);
    }

    audioPlayer.innerHTML = getemhighIframe;
};

workoutplan.onclick = function() {
    playerMessage.style.display = "none";

    while (audioPlayer.firstChild) {
        audioPlayer.removeChild(audioPlayer.firstChild);
    }

    audioPlayer.innerHTML = workoutplanIframe;
};

thenewworkoutplan.onclick = function() {
    playerMessage.style.display = "none";

    while (audioPlayer.firstChild) {
        audioPlayer.removeChild(audioPlayer.firstChild);
    }

    audioPlayer.innerHTML = thenewworkoutplanIframe;
};

slowjamz.onclick = function() {
    playerMessage.style.display = "none";

    while (audioPlayer.firstChild) {
        audioPlayer.removeChild(audioPlayer.firstChild);
    }

    audioPlayer.innerHTML = slowjamzIframe;
};

slowjamz.onclick = function() {
    playerMessage.style.display = "none";

    while (audioPlayer.firstChild) {
        audioPlayer.removeChild(audioPlayer.firstChild);
    }

    audioPlayer.innerHTML = slowjamzIframe;
};

breatheinbreatheout.onclick = function() {
    playerMessage.style.display = "none";

    while (audioPlayer.firstChild) {
        audioPlayer.removeChild(audioPlayer.firstChild);
    }

    audioPlayer.innerHTML = breatheinbreatheoutIframe;
};

schoolspiritskit1.onclick = function() {
    playerMessage.style.display = "none";

    while (audioPlayer.firstChild) {
        audioPlayer.removeChild(audioPlayer.firstChild);
    }

    audioPlayer.innerHTML = schoolspiritskit1Iframe;
};

schoolspirit.onclick = function() {
    playerMessage.style.display = "none";

    while (audioPlayer.firstChild) {
        audioPlayer.removeChild(audioPlayer.firstChild);
    }

    audioPlayer.innerHTML = schoolspiritIframe;
};

schoolspiritskit2.onclick = function() {
    playerMessage.style.display = "none";

    while (audioPlayer.firstChild) {
        audioPlayer.removeChild(audioPlayer.firstChild);
    }

    audioPlayer.innerHTML = schoolspiritskit2Iframe;
};

schoolspiritskit2.onclick = function() {
    playerMessage.style.display = "none";

    while (audioPlayer.firstChild) {
        audioPlayer.removeChild(audioPlayer.firstChild);
    }

    audioPlayer.innerHTML = schoolspiritskit2Iframe;
};

liljimmyskit.onclick = function() {
    playerMessage.style.display = "none";

    while (audioPlayer.firstChild) {
        audioPlayer.removeChild(audioPlayer.firstChild);
    }

    audioPlayer.innerHTML = liljimmyskitIframe;
};

twowords.onclick = function() {
    playerMessage.style.display = "none";

    while (audioPlayer.firstChild) {
        audioPlayer.removeChild(audioPlayer.firstChild);
    }

    audioPlayer.innerHTML = twowordsIframe;
};

throughthewire.onclick = function() {
    playerMessage.style.display = "none";

    while (audioPlayer.firstChild) {
        audioPlayer.removeChild(audioPlayer.firstChild);
    }

    audioPlayer.innerHTML = throughthewireIframe;
};

familybusiness.onclick = function() {
    playerMessage.style.display = "none";

    while (audioPlayer.firstChild) {
        audioPlayer.removeChild(audioPlayer.firstChild);
    }

    audioPlayer.innerHTML = familybusinessIframe;
};

familybusiness.onclick = function() {
    playerMessage.style.display = "none";

    while (audioPlayer.firstChild) {
        audioPlayer.removeChild(audioPlayer.firstChild);
    }

    audioPlayer.innerHTML = familybusinessIframe;
};

lastcall.onclick = function() {
    playerMessage.style.display = "none";

    while (audioPlayer.firstChild) {
        audioPlayer.removeChild(audioPlayer.firstChild);
    }

    audioPlayer.innerHTML = lastcallIframe;
};
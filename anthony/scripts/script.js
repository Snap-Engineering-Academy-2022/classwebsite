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

const introIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7lIr3vVhpDkU5mQEDcnA0S?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
const wedontcareIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0IW0qaeyxL5Et4UG2MrJKB?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
const graduationdayIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7wL7Lb8Q3aYyq6gmRL0PZq?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
const allfallsdownIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7lIr3vVhpDkU5mQEDcnA0S?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
const illflyawayIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7lIr3vVhpDkU5mQEDcnA0S?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
const spaceshipIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1ko2NuvWlQdxtNRc8QQzmT?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
const jesuswalksIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5g1vtHqi9uV7xtYeCcFOBx?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
const neverletmedownIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7lIr3vVhpDkU5mQEDcnA0S?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
const getemhighIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5b2FFKC64kxqcfaFnIZxoM?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
const workoutplanIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7lIr3vVhpDkU5mQEDcnA0S?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
const thenewworkoutplanIframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7lIr3vVhpDkU5mQEDcnA0S?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'


intro.onclick = function() {
    playerMessage.style.display = "none";

    while (audioPlayer.firstChild) {
        audioPlayer.removeChild(audioPlayer.firstChild);
    }

    audioPlayer.innerHTML = introIframe;
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

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


function playerOpenOnClick(track) {
    document.getElementById(track).addEventListener('click', () => {
        console.log(track);
    })
}

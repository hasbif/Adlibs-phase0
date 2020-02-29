window.addEventListener('load', loadSounds())



function loadSounds() {
    var sound = document.querySelectorAll(".adlib")
    var button = document.querySelectorAll(".ads div")

    button.forEach((but2, id) => {
        but2.addEventListener('click', function () {
            sound[id].currentTime = 0
            sound[id].play()
            pluses(id)
        })
    });
}
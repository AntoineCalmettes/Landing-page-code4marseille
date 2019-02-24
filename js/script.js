window.addEventListener("scroll", () => {
    let navbarElt = document.getElementById("nav-bar")
    let scrollTop = $(window).scrollTop();
    if (scrollTop > 10) {
        navbarElt.classList.add('shadow-small')
    } else {
        navbarElt.classList.remove('shadow-small')
    }
});
let video = document.getElementById('videosAvantages');
video.load();

window.addEventListener("DOMContentLoaded", onLoad);


function onLoad() {
    projects = document.querySelectorAll(".projects__link");
    projects.forEach(element => {
        element.addEventListener("mouseover", showProjectImage);
        element.addEventListener("mouseout", removeProjectImage);
    }
    );

    var newImg = new Image;
    newImg.onload = function () {
        _img.src = this.src;
    }
    newImg.src = '../Images/CNN News.jpg';
}

function showProjectImage() {
    let container = document.querySelector('.content__img');
    container.style.backgroundImage = `url("../Images/${this.innerHTML}.jpg`;
    container.style.opacity = 1;
    container.style.transform = `scale(1)`;
}

function removeProjectImage() {
    let container = document.querySelector('.content__img');
    container.style.opacity = 0;
    container.style.transform = `scale(0.5)`;
}
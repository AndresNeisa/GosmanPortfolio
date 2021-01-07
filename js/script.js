window.addEventListener("DOMContentLoaded", onLoad);

function onLoad() {
    projects = document.querySelectorAll(".projects__link");
    projects.forEach(element => {
        element.addEventListener("mouseover", showProjectImage);
        element.addEventListener("mouseout", removeProjectImage);
    }
    );

    footerSocialMedia = document.querySelectorAll(".footer__link");
    footerSocialMedia.forEach(element => {
        element.addEventListener("mouseover", socialMediaHoverOn.bind(null, footerSocialMedia));
        element.addEventListener("mouseout", socialMediaHoverOff.bind(null, footerSocialMedia));
    });

    socialMedia = document.querySelectorAll(".content__social-media__link");
    socialMedia.forEach(element => {
        element.addEventListener("mouseover", socialMediaHoverOn.bind(null, socialMedia));
        element.addEventListener("mouseout", socialMediaHoverOff.bind(null, socialMedia));
    })

}

function showProjectImage() {
    let container = document.querySelector('.content__img');
    container.style.backgroundImage = `url("Images/${this.innerHTML}.jpg")`;
    container.style.opacity = 1;
    container.style.transform = `scale(1)`;
}

function removeProjectImage() {
    let container = document.querySelector('.content__img');
    container.style.opacity = 0;
    container.style.transform = `scale(0.5)`;
}

function socialMediaHoverOn(socialMedia) {
    socialMedia.forEach(element => {
        element.classList.add("footer__link--hidden");
    })
}

function socialMediaHoverOff(socialMedia) {
    socialMedia.forEach(element => {
        element.classList.remove("footer__link--hidden");
    })
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
        }
        else {
            entry.target.classList.remove("is-visible");
        }
    });
}, options);

const targets = document.querySelectorAll(".show-on-scroll");
targets.forEach(target => observer.observe(target));

// targets.forEach(function (target) {
//     observer.observe(target);
// });
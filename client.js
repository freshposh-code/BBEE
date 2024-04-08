//DOM ELEMENT
const navTogglers = document.querySelectorAll('[navbar-menu-toggler]')

navTogglers.forEach(togglers => {
    togglers.addEventListener('click', function () {
        const navabr = document.querySelector('[navbar]');

        navabr.classList.toggle('active');

    })
})

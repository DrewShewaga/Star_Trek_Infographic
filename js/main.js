// JavaScript Document
(() => {
    // VARIABLE STACK
    let scrollArrow = document.querySelector('#arrow_down'),
        toTop = document.querySelector('#topScroll'),
        upOne = document.querySelector('#upScroll'),
        graphic = document.querySelector('html'),
        body = document.querySelector('body'),
        h = window.innerHeight,
        toggle = document.querySelector('#toggleScroll');


    // FUNCTIONS

    function heightSet(className) {
        var elems = document.querySelectorAll('.trekScreen');
        var index = 0, length = elems.length;
        for ( ; index < length; index++) {
            elems[index].style.height = h+'px';
        }
    }

    function pageScroll() {
        window.scrollBy(0, h+3);
    }

    function upScroll() {
        window.scrollBy(0, -h-3);
    }

    function checkScrollDown() {
        if (graphic.scrollTop > 19600) {
            scrollArrow.style.display = 'none';
        } else {
            scrollArrow.style.display = 'block';
        }
    }

    function checkScrollUp() {
        if (graphic.scrollTop < 600) {
            toTop.style.display = 'none';
            upOne.style.display = 'none';
        } else {
            toTop.style.display = 'block';
            upOne.style.display = 'block';
        }
    }

    function toggleScroll() {
        if (body.style.overflow = "hidden") {
            body.style.overflow = "visible";
            toggle.style.display = "none";
        }
    }

    heightSet();

    // EVENT HANDLING
    scrollArrow.addEventListener('click', pageScroll);
    upOne.addEventListener('click', upScroll);
    window.addEventListener('scroll', checkScrollDown);
    window.addEventListener('scroll', checkScrollUp);
    toggle.addEventListener('click', toggleScroll);
})();

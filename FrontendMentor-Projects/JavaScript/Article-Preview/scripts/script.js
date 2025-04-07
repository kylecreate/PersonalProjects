"use strict";

function toggleShareIcons() {
    const shareIcons = document.getElementById('shareIcons');

    if (shareIcons.classList.contains('visible')) {
        shareIcons.classList.remove('visible');
    } else {
        shareIcons.classList.add('visible');
    }
}
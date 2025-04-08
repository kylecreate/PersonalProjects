"use strict";

function toggleShareIcons() {
    // Icons container ID
    const shareIcons = document.getElementById('shareIcons');

    // If visibile, hide
    if (shareIcons.classList.contains('visible')) {
        shareIcons.classList.remove('visible');

    // If hidden, show
    } else {
        shareIcons.classList.add('visible');
    }
}
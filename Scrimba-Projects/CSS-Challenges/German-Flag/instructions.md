Going to be creating the flag of Germany with an aspect ratio of 3:5.

How to calculate aspect ratio
height * ratioHeight / ratioWidth

Example
    Flag Ratio: 5:4
    Flag Height: 200px

    .country-flag {
        width: calc(var(--flag-height) * 4 / 5);
    }
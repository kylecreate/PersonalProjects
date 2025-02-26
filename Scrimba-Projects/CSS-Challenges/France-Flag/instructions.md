Going to be creating the French flag which are stripes of equal length/width that are blue, white, and red.

You can make sure the flag is of a certain length is by using aspect ratio. (2:3 for the French flag, 2 = width and 3 = height)

How to calculate aspect ratio within CSS
height * ratioHeight / ratioWidth

Example of above calculation
Flag Ratio: 5/4
Flag Height: 200px

```
.country-flag {
    width: calc(200px * 4/5);
}```
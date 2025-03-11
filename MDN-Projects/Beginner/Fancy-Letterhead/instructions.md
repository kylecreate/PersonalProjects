https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper

## Starting Point
To start this challenge, you should:
    * Make local copies of the HTML and CSS — save them as `index.html` and `style.css` in a new directory.
    * Save local copies of the `top`, `bottom` and `logo` images in the same directory as your code files.

# Project Brief
You have been given the files needed to create a letterheaded paper template. You just need to put the files together. To get there, you need to:

## The Main Letter
* Apply the CSS to the HTML.
* Add a background declaration to the letter that:
        * Fixes the top image to the top of the letter
        * Fixes the bottom image to the bottom of the letter
        * Adds a semi-transparent gradient over the top of both of the previous backgrounds that gives the letter a bit of texture. Make it slightly dark right near the top and bottom, but completely transparent for a large part of the center.
* Add another background declaration that just adds the top image to the top of the letter, as a fallback for browsers that don't support the previous declaration.
* Add a white background color to the letter.
* Add a 1mm top and bottom solid border to the letter, in a color that is in keeping with the rest of the color scheme.

## The Logo
* To the `h1`, add the logo as a background image.
* Add a filter to the logo to give it a subtle drop shadow.
* Now comment out the filter and implement the drop shadow in a different (slightly more cross-browser compatible) way, which still follows the shape of the round image.

## Hints & Tips
* Remember that you can create a fallback for older browsers by putting the fallback version of a declaration first, followed by the version that works across newer browsers only. Older browsers will apply the first declaration and ignore the second one, whereas newer browsers will apply the first one, then override it with the second one.
* Feel free to create your own graphics for the challenge if you wish.
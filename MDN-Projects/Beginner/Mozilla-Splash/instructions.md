https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Mozilla_splash_page

In this challenge, we'll test your knowledge of some of the techniques discussed in the last couple of lessons, getting you to add some images and video to a funky splash page all about Mozilla!

## Starting Point
To start off this assessment, you need to grab the HTML and all the images available in the mdn-splash-page-start directory on GitHub. Save the contents of index.html in a file called index.html on your local drive, in a new directory. Then save pattern.png in the same directory (right click on the image to get an option to save it.)

Access the different images in the originals directory and save them in the same way; you'll want to save them in a different directory for now, as you'll need to manipulate (some of) them using a graphics editor before they're ready to be used.

## Project Brief
In this assessment we are presenting you with a mostly-finished Mozilla splash page, which aims to say something nice and interesting about what Mozilla stands for, and provide some links to further resources. Unfortunately, no images or video have been added yet — this is your job! You need to add some media to make the page look nice and make more sense. The following subsections detail what you need to do:

### Preparing Images
Using your favorite image editor, create 400px wide versions of:
    * `firefox_logo_only_RGB.png`
    * `firefox-addons.jpg`
    * `mozilla-dinosaur-head.png`

Along with `mdn.svg`, these images will be your icons to link to further resources, inside the `further-info` area. You'll also link to the Firefox logo in the site header. Save copies of all these inside the same directory as `index.html`.

Next, create a 1200px wide landscape version of `red-panda.jpg`, Call it something sensible so you can easily identify it. Save a copy inside the same directory as `index.html`.

#### Adding a logo to the header
Inside the `<header>` element, add an `<img>` element that will embed the small version of the Firefox logo in the header.

#### ADding a video to the main article content
Just inside the `<article>` element (right below the opening tag), embed the YouTube video found at `https://www.youtube.com/watch?v=ojcNcvb1olg`, using the appropriate YouTube tools to generate the code. The video should be 400px wide.

#### Adding images to the further info links
Inside the `<div>` with the class of `further-info` you will find four `<a>` elements — each one linking to an interesting Mozilla-related page. To complete this section you'll need to insert an `<img>` element inside each one to embed the appropriate image. Make sure you match the correct images wit the correct links!

#### Adding the Red Panda
Inside the `<div>` with the class of `red-panda`, we want to insert an `<img>` element that displays the red panda image.
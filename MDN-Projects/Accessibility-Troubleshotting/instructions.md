https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/Accessibility_troubleshooting

# Project Brief
For this project, you are presented with a fictional nature site displaying a "factual" article about bears. As it stands, it has a number of accessibility issues — your task is to explore the existing site and fix them to the best of your abilities, answering the questions given below.

## Color
The text is difficult to read because of the current color scheme. Can you do a test of the current color contrast (text/background), report the results of the test, and then fix it by changing the assigned colors?

## Semantic HTML
* The content is still not very accessible — report on what happens when you try to navigate it using a screen reader.
* Can you update the article text to make it easier for screen reader users to navigate?
* The navigation menu part of the site (wrapped in `<div class="nav"></div>`) could be made more accessible by putting it in a proper HTML semantic element. Which one should it be updated to? Make the update.

## The Images
The images are currently inaccessible to screen reader users. Can you fix this?

## The Audio Player
1. The `<audio>` player isn't accessible to hearing impaired (deaf) people — can you add some kind of accessible alternative for these users?
2. The `<audio>` player isn't accessible to those using older browsers that don't support HTML audio. How can you allow them to still access the audio?

## The Forms
1. The `<input>` element in the search form at the top could do with a label, but we don't want to add a visible text label that would potentially spoil the design and isn't really needed by sighted users. How can you add a label that is only accessible to screen readers?
2. The two `<input>` elements in the comment form have visible text labels, but they are not unambiguously associated with their labels — how do you achieve this? Note that you'll need to update some of the CSS rule as well.

## The Show/Hide Comment Control
The show/hide comment control button is not currently keyboard-accessible. Can you make it keyboard accessible, both in terms of focusing it using the tab key, and activating it using the return key?

## The Table
The data table is not currently very accessible — it is hard for screen reader users to associate data rows and columns together, and the table also has no kind of summary to make it clear what it shows. Can you add some features to your HTML to fix this problem?

## Other Considerations?
Can you list two more ideas for improvements that would make the website more accessible?
# Instagram Stories Menu
Instagram "stories" are slideshowsof photos, memes, and text. Each element in the example represents a user who has posted a story. The state of each story is communicated visually via the color of its border. Create 3 classes that can be added to the `.story` element to visually indicate the state of each story.
    * `.new` - Add gradient border to show the story has NOT yet been viewed.
    * `.viewed` - Adds a gray border to show the story has already been viewed.
    * `.live` - Adds a red notification badge, to show the user is currently livestreaming.

## Hints
* A gradient border effect can be accomplished using a wrapping div (note that the `border-image` property will not work properly with `border-radius`).
* How you add the "LIVE" badge if that text doesn't already exist in the DOM? Try using a pseudo element and the `content` property.
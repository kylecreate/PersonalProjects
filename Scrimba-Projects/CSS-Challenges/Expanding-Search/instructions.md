Going to be creating a expanding search bar that when clicked inside of it, it will expand to the width of the container. When you click out of it, it will reverse back to the original size.

## Requirements
* Search input
    * Takes up 1/3 of the width of its container

* When the user clicks into the search bar:
    * Input grows the entire width of it's parent container with a smooth transition.
    * Shrinks back to original size when the user clicks away
    * Blue border
    * Bonus: Placeholder text is not visibile when user clicks inside of the search bar.

* Accessibility
    * For accessibility, form inputs should always have a label. Create a label with a valid `for` attribute.
    * Look up some CSS rules or a group of CSS styles (no need to write them yourself) that hide the search input's label visually but keeps it accessible to screen readers.

Hints & Help
    * Use a transition to make sure the search bar expands smoothly.

What to Research:
    * The `:focus` pseudo selector.
    * A pseudo selector that lets you change placeholder styles.
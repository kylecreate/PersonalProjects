Source Link: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Marking_up_a_letter

# Start
To begin, get the raw text provided and use CSS to style the project.

## Project Brief
For this project, your task is to mark up a letter that needs to be hosted on a university intranet. The letter is a response from a research fellow to a prospective PhD student concerning their application to the university.

### Block/structural semantics
    * Use appropriate document structure including doctype, and <html>, <head> and <body> elements.
    * In general, the letter should be marked up as an organization of headings and paragraphs, with the following exception. There is one top level heading (the "Re:" line) and three second level headings.
    * Use an appropriate list type to mark up the semester start dates, study subjects, and exotic dances.
    * Put the two addresses inside <address> elements. Each line of the address should sit on a new line, but not be in a new paragraph.

### Inline semantics
    * The names of the sender and receiver (and Tel and Email) should be marked up with strong importance.
    * The four dates in the document should have appropriate elements containing machine-readable dates.
    * The first address and first date in the letter should have a class attribute value of sender-column. The CSS you'll add later will cause these to be right aligned, as it should be in the case in a classic letter layout.
    * Mark up the following five acronyms/abbreviations in the main text of the letter — "PhD," "HTML," "CSS," "BC," and "Esq." — to provide expansions of each one.
    * The six sub/superscripts should be marked up appropriately — in the chemical formulae, and the numbers 103 and 104 (they should be 10 to the power of 3 and 4, respectively).
    * Try to mark up at least two appropriate words in the text with strong importance/emphasis.
    * There are two places where the letter should have a hyperlink. Add appropriate links with titles. For the location that the links point to, you may use http://example.com as the URL.
    * Mark up the university motto quote and citation with appropriate elements.

### The head of the document
    * The character set of the document should be set as utf-8 using the appropriate meta tag.
    * The author of the letter should be specified in an appropriate meta tag.
    * The provided CSS should be included inside an appropriate tag.
## 2026-04-21 - Use Textareas for Descriptions
**Learning:** Single-line text inputs for fields like "Description" severely hinder usability, as users cannot see what they are typing once it exceeds the width of the input field. Using a `<textarea>` instead is a highly effective, low-effort micro-UX improvement that improves both comfort and the accuracy of user input.
**Action:** Always verify if a field implying large textual content (e.g., Description, Bio, Summary) uses a `<textarea>` rather than an `<input type="text">`. If not, update it and add appropriate `rows` attributes.

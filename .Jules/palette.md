## 2024-04-07 - Use interactive elements for primary actions
**Learning:** Found a pattern of using non-interactive `<small>` elements styled as buttons for critical actions (Add to Cart, Delete, Update, Details). This breaks keyboard accessibility (tab focus) and screen reader semantics.
**Action:** Replaced all `<small>` "buttons" with semantic `<button>` elements to ensure proper keyboard navigation and accessibility.
## 2024-06-25 - Async Button Feedback Pattern
**Learning:** Add to cart operations lack visual feedback, making users unsure if the action succeeded without checking the side view cart. This leads to double-clicks and confusion. Adding a temporary "Added!" state with a success color (btn-success) provides clear confirmation.
**Action:** Always include inline loading ("Adding...") and temporary success states ("Added!" with color change) for asynchronous shopping actions before returning the button to its default state.
## 2024-05-18 - Semantic Buttons and Visual Hierarchy in Auth Forms
**Learning:** Found `<button href="...">` used for navigation in the signup form, which breaks accessibility and can cause unintended form submissions instead of navigation. Also found primary buttons used for all actions, competing for user attention.
**Action:** Always use semantic `<a>` tags for navigation actions (even if styled as buttons) and apply distinct visual hierarchy (e.g., `btn-primary` vs `btn-outline-secondary`) to guide users towards the primary action on auth forms.
## 2024-05-24 - [Contextual ARIA Labels for Grids/Lists]
**Learning:** Adding contextual ARIA labels (e.g., `aria-label="Add {{product.name}} to cart"`) to icon-only or repeated action buttons inside grid/list structures is crucial for accessibility. Without it, screen reader users will just hear "Add To Cart" repeated over and over, lacking necessary context.
**Action:** When implementing grid layouts or lists where an identical action (like "Add to Cart", "Delete", or "Update") is repeated, ensure the button’s `aria-label` includes a contextual identifier, typically the item name.

## 2024-05-30 - Empty States for Dynamic Lists
**Learning:** Dynamic lists (like product lists or admin listings) lacked empty states. When no items are present, displaying nothing is poor UX as it leaves users wondering if the app is loading or if something is broken. Empty states provide immediate feedback and can guide users towards their next action.
**Action:** Always include empty states for dynamic lists using Handlebars `{{else}}` within an `{{#each}}` loop. The empty state should include an icon, clear messaging, and a helpful call-to-action (like "List your first product") when appropriate.
## 2024-05-18 - Adding Empty States to Product Grids
**Learning:** When data grids (like product lists) are empty, a blank page can be confusing for users (making them think the page is still loading or broken).
**Action:** Always include an empty state (`{{else}}` in Handlebars lists) with a friendly icon/graphic, explanatory text, and ideally a clear call-to-action (like "List Your First Product" for admins).

## 2024-05-25 - [Visual Hierarchy and Empty States in Admin Views]
**Learning:** Having multiple primary buttons for destructive (Delete) and editing (Update) actions on the same card creates cognitive overload and increases the risk of accidental clicks. Additionally, list views without empty states leave users confused about next steps.
**Action:** Always apply semantic button variants (`btn-outline-danger` for delete, `btn-outline-secondary` for edit) to differentiate actions. Provide an empty state with a clear, primary Call to Action (like "List a Product") when lists are empty.
## 2024-05-31 - [Bootstrap Form Validation Feedback]
**Learning:** Bootstrap's `.needs-validation` class alone does not trigger the visual display of `.invalid-feedback` messages upon form submission. Without client-side JavaScript to intercept the submission and apply the `.was-validated` class to the form, validation fails silently, leaving users confused about why their form submission did not work.
**Action:** Always include a client-side JavaScript snippet to handle the form's `submit` event, call `event.preventDefault()` when invalid, and apply the `was-validated` class to any Bootstrap form that uses `needs-validation`.
## 2024-06-04 - Autocomplete for authentication forms
**Learning:** Proper use of `autocomplete` attributes (`username`, `current-password`, `new-password`) in authentication forms is critical for an optimal UX. It heavily reduces friction for users utilizing password managers to sign in or create accounts, increasing conversion rates.
**Action:** Always verify that input fields handling credentials in login/signup flows have explicit, correct autocomplete attributes attached to them.
## 2024-06-05 - Autocomplete Attributes for Authentication Forms
**Learning:** Found that authentication forms (login/signup) were missing `autocomplete` attributes on username and password fields. This degrades UX by preventing password managers and browser autofill from seamlessly securely filling credentials, increasing friction.
**Action:** Always include appropriate `autocomplete` attributes (`username`, `current-password` for login, `new-password` for signup) on authentication forms to ensure compatibility with password managers and reduce user friction.

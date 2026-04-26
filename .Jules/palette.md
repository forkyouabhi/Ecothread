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

## 2024-05-18 - Auth Forms Micro-UX
**Learning:** For authentication forms (login, signup), using `autocomplete` (e.g., `username`, `current-password`, `new-password`) and `autofocus` on the initial input are simple but crucial micro-interactions. They dramatically speed up user flow by signaling password managers directly and saving a click.
**Action:** Always verify `autocomplete` attributes on sensitive/common forms to leverage native browser and password manager capabilities.

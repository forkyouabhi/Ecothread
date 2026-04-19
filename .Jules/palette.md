## 2024-06-25 - Async Button Feedback Pattern
**Learning:** Add to cart operations lack visual feedback, making users unsure if the action succeeded without checking the side view cart. This leads to double-clicks and confusion. Adding a temporary "Added!" state with a success color (btn-success) provides clear confirmation.
**Action:** Always include inline loading ("Adding...") and temporary success states ("Added!" with color change) for asynchronous shopping actions before returning the button to its default state.
## 2024-05-18 - Semantic Buttons and Visual Hierarchy in Auth Forms
**Learning:** Found `<button href="...">` used for navigation in the signup form, which breaks accessibility and can cause unintended form submissions instead of navigation. Also found primary buttons used for all actions, competing for user attention.
**Action:** Always use semantic `<a>` tags for navigation actions (even if styled as buttons) and apply distinct visual hierarchy (e.g., `btn-primary` vs `btn-outline-secondary`) to guide users towards the primary action on auth forms.
## 2024-05-24 - [Contextual ARIA Labels for Grids/Lists]
**Learning:** Adding contextual ARIA labels (e.g., `aria-label="Add {{product.name}} to cart"`) to icon-only or repeated action buttons inside grid/list structures is crucial for accessibility. Without it, screen reader users will just hear "Add To Cart" repeated over and over, lacking necessary context.
**Action:** When implementing grid layouts or lists where an identical action (like "Add to Cart", "Delete", or "Update") is repeated, ensure the button’s `aria-label` includes a contextual identifier, typically the item name.

## 2024-05-25 - [Visual Hierarchy and Empty States in Admin Views]
**Learning:** Having multiple primary buttons for destructive (Delete) and editing (Update) actions on the same card creates cognitive overload and increases the risk of accidental clicks. Additionally, list views without empty states leave users confused about next steps.
**Action:** Always apply semantic button variants (`btn-outline-danger` for delete, `btn-outline-secondary` for edit) to differentiate actions. Provide an empty state with a clear, primary Call to Action (like "List a Product") when lists are empty.

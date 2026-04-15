## 2024-05-18 - Semantic Buttons and Visual Hierarchy in Auth Forms
**Learning:** Found `<button href="...">` used for navigation in the signup form, which breaks accessibility and can cause unintended form submissions instead of navigation. Also found primary buttons used for all actions, competing for user attention.
**Action:** Always use semantic `<a>` tags for navigation actions (even if styled as buttons) and apply distinct visual hierarchy (e.g., `btn-primary` vs `btn-outline-secondary`) to guide users towards the primary action on auth forms.
## 2024-05-24 - [Contextual ARIA Labels for Grids/Lists]
**Learning:** Adding contextual ARIA labels (e.g., `aria-label="Add {{product.name}} to cart"`) to icon-only or repeated action buttons inside grid/list structures is crucial for accessibility. Without it, screen reader users will just hear "Add To Cart" repeated over and over, lacking necessary context.
**Action:** When implementing grid layouts or lists where an identical action (like "Add to Cart", "Delete", or "Update") is repeated, ensure the button’s `aria-label` includes a contextual identifier, typically the item name.

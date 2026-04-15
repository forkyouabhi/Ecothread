## 2024-05-18 - Semantic Buttons and Visual Hierarchy in Auth Forms
**Learning:** Found `<button href="...">` used for navigation in the signup form, which breaks accessibility and can cause unintended form submissions instead of navigation. Also found primary buttons used for all actions, competing for user attention.
**Action:** Always use semantic `<a>` tags for navigation actions (even if styled as buttons) and apply distinct visual hierarchy (e.g., `btn-primary` vs `btn-outline-secondary`) to guide users towards the primary action on auth forms.

## 2024-05-18 - Form Associations and Input Groups
**Learning:** Found an 'Upload an Image' label unassociated to the file input (due to a stray `for="country"`) and floating currency symbol text. This causes problems for screen readers navigating the form and produces an inconsistent UI.
**Action:** Always ensure labels are explicitly linked to input IDs using the `for` attribute and utilize existing design system features, such as Bootstrap `input-group`, for inline prefix/suffix elements to maintain a cohesive form layout.

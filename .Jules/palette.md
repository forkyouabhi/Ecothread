## 2024-04-07 - Use interactive elements for primary actions
**Learning:** Found a pattern of using non-interactive `<small>` elements styled as buttons for critical actions (Add to Cart, Delete, Update, Details). This breaks keyboard accessibility (tab focus) and screen reader semantics.
**Action:** Replaced all `<small>` "buttons" with semantic `<button>` elements to ensure proper keyboard navigation and accessibility.

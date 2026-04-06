## 2024-04-06 - Invalid button links in forms
**Learning:** Using `<button href="...">` for navigation links inside forms is a common anti-pattern that not only breaks accessibility but also causes unintended form submissions instead of proper navigation.
**Action:** Always use `<a href="...">` styled as buttons (e.g., with `role="button"`) when navigation is intended, especially within `<form>` tags, to prevent accidental POST requests.

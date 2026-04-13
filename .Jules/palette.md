## 2024-05-18 - Accessible Interactive Star Ratings
**Learning:** Custom interactive components like star rating inputs often use `focus:outline-none` to hide default browser focus rings, completely breaking keyboard navigation for accessibility. Additionally, interactive SVG icons within these components are not inherently readable by screen readers.
**Action:** When creating custom interactive inputs, always replace `focus:outline-none` with visible focus alternatives like `focus-visible:ring-2`, add descriptive `aria-label`s to the interactive elements (buttons), and set `aria-hidden="true"` on inner decorative SVGs so screen readers announce the button label clearly.
## 2024-04-13 - Security Fix: Environment Variable Exposure
**Learning:** Found a security vulnerability where the `GEMINI_API_KEY` was being inadvertently injected into the client-side bundle via the Vite `define` config.
**Action:** Removed the `define` block from `vite.config.ts` entirely to prevent any server-side secrets from being exposed to the client.

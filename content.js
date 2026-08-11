let isInspecting = false;
let hoveredElement = null;

// Create persistent highlight box overlay
const overlay = document.createElement("div");
overlay.id = "dom-prompt-overlay";
document.body.appendChild(overlay);

// Toggle inspector on keypress or trigger
window.addEventListener("keydown", (e) => {
  // Press Option+P (Alt+P) to toggle inspect mode
  if (e.altKey && e.code === "KeyP") {
    isInspecting = !isInspecting;
    if (!isInspecting) overlay.style.display = "none";
  }
});

document.addEventListener("mouseover", (e) => {
  if (!isInspecting) return;
  hoveredElement = e.target;

  const rect = hoveredElement.getBoundingClientRect();
  overlay.style.top = `${rect.top + window.scrollY}px`;
  overlay.style.left = `${rect.left + window.scrollX}px`;
  overlay.style.width = `${rect.width}px`;
  overlay.style.height = `${rect.height}px`;
  overlay.style.display = "block";
});

document.addEventListener(
  "click",
  (e) => {
    if (!isInspecting) return;
    e.preventDefault();
    e.stopPropagation();

    const element = e.target;
    const promptText = buildLlmPrompt(element);

    navigator.clipboard.writeText(promptText).then(() => {
      alert("DOM Prompt copied to clipboard!");
      isInspecting = false;
      overlay.style.display = "none";
    });
  },
  true,
);

function buildLlmPrompt(el) {
  const styles = window.getComputedStyle(el);
  const relevantCSS = `display: ${styles.display}; flex-direction: ${styles.flexDirection}; gap: ${styles.gap}; padding: ${styles.padding}; margin: ${styles.margin}; color: ${styles.color}; background-color: ${styles.backgroundColor};`;

  return `
### Goal
Help me redesign/fix this UI component or replicate its layout and styles.

### Targeted Component Context
- **Tag:** \`<${el.tagName.toLowerCase()}>\`
- **Class List:** \`${el.className}\`
- **Computed Key Styles:** \`${relevantCSS}\`
- **Parent Context:** \`<${el.parentElement?.tagName.toLowerCase()}>\` with classes \`${el.parentElement?.className}\`

### Element HTML Snippet
\`\`\`html
${el.outerHTML.slice(0, 1500)}
\`\`\`

### Instructions
Please analyze this component and provide updated React/Tailwind/CSS code that achieves the following goal:
`.trim();
}

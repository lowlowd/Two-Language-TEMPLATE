# React to Astro Hero Button Migration Guide

## Complete Reference for AI Agents

**Purpose:** Guide for migrating React interactive buttons to Astro with vanilla JavaScript
**Use Case:** Copy this document and paste it as context for any AI agent working on similar migrations

---

## Quick Reference Table

| Concept        | React                       | Astro                            |
| -------------- | --------------------------- | -------------------------------- |
| File Extension | `.jsx` / `.tsx`             | `.astro`                         |
| Props          | `function Button({ text })` | `const { text } = Astro.props`   |
| State          | `useState()`                | DOM manipulation in `<script>`   |
| Events         | `onClick={handler}`         | `addEventListener` in `<script>` |
| className      | `className="btn"`           | `class="btn"`                    |

---

## Real-World Example: ClipboardButton

### BEFORE (React)

```tsx
// components/ClipboardButton.tsx
import React, { useState, useEffect } from 'react';

interface ClipboardButtonProps {
  referralCode: string;
  buttonText?: string;
  visitUrl?: string;
  visitButtonText?: string;
}

export const ClipboardButton: React.FC<ClipboardButtonProps> = ({
  referralCode,
  buttonText = 'Copy Promo Code',
  visitUrl = 'https://example.com',
  visitButtonText = 'Visit Website',
}) => {
  const [copied, setCopied] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const now = new Date();
    const options = { year: 'numeric', month: 'long' };
    setCurrentDate(now.toLocaleDateString('en-US', options));
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8">
      <div className="text-center space-y-6">
        {/* Promo Code Display */}
        <div className="border-2 border-dashed border-purple-500 rounded-xl px-6 py-8">
          <div className="text-4xl font-bold text-purple-600">{referralCode}</div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <button
            onClick={handleCopy}
            className={`w-full py-4 px-8 rounded-xl font-bold text-lg text-white transition-all ${
              copied ? 'bg-emerald-500' : 'bg-purple-600 hover:bg-purple-700'
            }`}
          >
            <span>{copied ? 'Copied!' : `1. ${buttonText}`}</span>
            <CopyIcon />
          </button>

          <a
            href={visitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-8 rounded-xl font-bold text-lg bg-gray-200 text-gray-700"
          >
            2. {visitButtonText}
            <ExternalLinkIcon />
          </a>
        </div>

        <p className="text-sm text-slate-500">Verified for {currentDate}</p>
      </div>
    </div>
  );
};
```

### AFTER (Astro)

```astro
---
// components/ui/ClipboardButton.astro
interface Props {
  referralCode: string;
  buttonText?: string;
  visitUrl?: string;
  visitButtonText?: string;
}

const {
  referralCode,
  buttonText = 'Copy Promo Code',
  visitUrl = 'https://example.com',
  visitButtonText = 'Visit Website',
} = Astro.props;

// Generate unique ID to avoid conflicts when component is used multiple times
const uniqueId = `clipboard-${Math.random().toString(36).substring(2, 9)}`;
---

<div class="max-w-xl mx-auto p-8">
  <div class="text-center space-y-6">
    <!-- Promo Code Display -->
    <div class="border-2 border-dashed border-purple-500 rounded-xl px-6 py-8">
      <div class="text-4xl font-bold text-purple-600">{referralCode}</div>
    </div>

    <!-- Buttons -->
    <div class="flex flex-col gap-4">
      <button
        type="button"
        id={`${uniqueId}-copy`}
        data-code={referralCode}
        class="w-full py-4 px-8 rounded-xl font-bold text-lg text-white bg-purple-600 hover:bg-purple-700 transition-all min-w-[320px]"
      >
        <span id={`${uniqueId}-text`}>1. {buttonText}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 inline ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2.2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          ></path>
        </svg>
      </button>

      <a
        href={visitUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="w-full py-4 px-8 rounded-xl font-bold text-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
      >
        2. {visitButtonText}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 inline ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2.2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
        </svg>
      </a>
    </div>

    <p class="text-sm text-slate-500">
      Verified for <span id={`${uniqueId}-date`}></span>
    </p>
  </div>
</div>

<script is:inline define:vars={{ uniqueId, referralCode, buttonText }}>
  // Initialize date (replaces useEffect)
  const dateEl = document.getElementById(`${uniqueId}-date`);
  if (dateEl) {
    const now = new Date();
    const options = { year: 'numeric', month: 'long' };
    dateEl.textContent = now.toLocaleDateString('en-US', options);
  }

  // Copy button functionality (replaces useState + onClick)
  const copyBtn = document.getElementById(`${uniqueId}-copy`);
  const textEl = document.getElementById(`${uniqueId}-text`);

  if (copyBtn && textEl) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(referralCode);

        // Show success state (replaces setCopied(true))
        textEl.textContent = 'Copied!';
        copyBtn.classList.remove('bg-purple-600');
        copyBtn.classList.add('bg-emerald-500');

        // Reset after 2 seconds (replaces setTimeout with setCopied(false))
        setTimeout(() => {
          textEl.textContent = `1. ${buttonText}`;
          copyBtn.classList.remove('bg-emerald-500');
          copyBtn.classList.add('bg-purple-600');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    });
  }
</script>
```

---

## Key Migration Steps

### Step 1: Convert File Structure

```
React:                          Astro:
function Component() {          ---
  // logic                      // server logic
  return (                      ---
    <div>...</div>              <div>...</div>
  );
}
```

### Step 2: Convert Props

```tsx
// React
function Button({ text, onClick }) {
  // ...
}

// Astro
---
const { text, onClick } = Astro.props;
---
```

### Step 3: Replace useState with DOM Manipulation

```tsx
// React
const [copied, setCopied] = useState(false);

// When updating:
setCopied(true);

// In template:
{
  copied ? 'Copied!' : 'Copy';
}
```

```astro
<!-- Astro -->
<span id="text-element">Copy</span>

<script>
  // When updating:
  document.getElementById('text-element').textContent = 'Copied!';

  // To reset:
  setTimeout(() => {
    document.getElementById('text-element').textContent = 'Copy';
  }, 2000);
</script>
```

### Step 4: Replace useEffect with Script Initialization

```tsx
// React
useEffect(() => {
  const date = new Date().toLocaleDateString();
  setDate(date);
}, []);
```

```astro
<!-- Astro - just runs when script loads -->
<span id="date-element"></span>

<script>
  const dateEl = document.getElementById('date-element');
  dateEl.textContent = new Date().toLocaleDateString();
</script>
```

### Step 5: Replace onClick with addEventListener

```tsx
// React
<button onClick={handleClick}>Click</button>
```

```astro
<!-- Astro -->
<button id="my-button">Click</button>

<script>
  document.getElementById('my-button').addEventListener('click', handleClick);
</script>
```

### Step 6: Pass Props to Script

```astro
---
const { referralCode, buttonText } = Astro.props;
const uniqueId = `btn-${Math.random().toString(36).substr(2, 9)}`;
---

<button id={uniqueId}>{buttonText}</button>

<!-- Use define:vars to pass server props to client script -->
<script is:inline define:vars={{ uniqueId, referralCode, buttonText }}>
  const btn = document.getElementById(uniqueId);
  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(referralCode);
  });
</script>
```

---

## AI Agent Prompt Template

Copy this entire prompt and paste it when asking an AI to migrate components:

````
# Task: Migrate React Component to Astro

Convert the following React component to an Astro component.

## Rules:
1. Change file extension from .tsx/.jsx to .astro
2. Move props to frontmatter: `const { prop } = Astro.props;`
3. Remove `return` statement - template goes after `---`
4. Change `className` to `class`
5. Replace useState with DOM manipulation in <script>
6. Replace useEffect with script initialization code
7. Replace onClick with addEventListener in <script>
8. Generate unique IDs for elements: `const uniqueId = \`component-\${Math.random().toString(36).substr(2, 9)}\`;`
9. Use `define:vars={{ prop1, prop2 }}` to pass props to scripts
10. Add `is:inline` to script tag when using define:vars

## Pattern to follow:

REACT:
```tsx
function Component({ prop1, prop2 }) {
  const [state, setState] = useState(false);

  useEffect(() => {
    // initialization
  }, []);

  const handleClick = () => {
    setState(true);
  };

  return (
    <button className="btn" onClick={handleClick}>
      {state ? 'Active' : 'Inactive'}
    </button>
  );
}
````

ASTRO:

```astro
---
const { prop1, prop2 } = Astro.props;
const uniqueId = `component-${Math.random().toString(36).substr(2, 9)}`;
---

<button id={uniqueId} class="btn">
  <span id={`${uniqueId}-text`}>Inactive</span>
</button>

<script is:inline define:vars={{ uniqueId }}>
  // Initialization (was useEffect)
  const btn = document.getElementById(uniqueId);
  const textEl = document.getElementById(`${uniqueId}-text`);

  // Event handler (was onClick)
  btn.addEventListener('click', () => {
    // State change (was setState)
    textEl.textContent = 'Active';
  });
</script>
```

## Component to migrate:

[PASTE YOUR REACT COMPONENT HERE]

```

---

## Common Pitfalls to Avoid

| ❌ Wrong | ✅ Correct |
|----------|-----------|
| `className="btn"` | `class="btn"` |
| `<script define:vars={...}>` | `<script is:inline define:vars={...}>` |
| `{condition && <div>}` | `{condition ? (<div>) : null}` |
| Hardcoded element IDs | Generate unique IDs with `Math.random()` |
| Inline `onClick` | Use `addEventListener` in script |
| Using React hooks | Use vanilla JS DOM manipulation |

---

## Benefits of This Migration

1. **Zero JS by default** - Button works without JavaScript, copy feature progressively enhances
2. **Faster page loads** - No React runtime to download
3. **Better SEO** - Content is server-rendered HTML
4. **Simpler code** - No build step for client logic
5. **Smaller bundles** - Only load what you need

---

**File Location:** Save this as `react-to-astro-button-guide.md` in your project
**Last Updated:** December 23, 2025
```

# Intersection Observer Flash Fix Migration Guide

## For AstroWind-Based Websites

**Purpose:** Fix the "double flash" issue on page load caused by intersection observer animations on above-the-fold content  
**Applies to:** AstroWind template and similar Astro sites using intersection observer for scroll animations

---

## The Problem

When intersection observer animations are applied to **above-the-fold content** (hero sections), users see a "double flash":

```
1. Page HTML loads → Content visible (50ms)
2. JavaScript loads → Observer initializes → Content becomes invisible (opacity: 0)
3. Observer detects viewport → Content fades in (300ms)

Result: visible → invisible → visible = FLASH
```

This is jarring UX, especially on slower connections.

---

## Root Cause

The AstroWind template uses these CSS classes for scroll-triggered animations:

```
intersect-once           - Only animate once
intersect-quarter        - Trigger at 25% visibility
motion-safe:md:opacity-0 - Start invisible on desktop
motion-safe:md:intersect:animate-fade - Fade in when intersected
```

These work great for **below-the-fold** content but cause flash on **above-the-fold** content.

---

## Quick Fix Summary

| Component | Issue | Fix |
|-----------|-------|-----|
| Hero.astro | Flash on hero text | Remove all intersection classes |
| HeroText.astro | Flash on blog heroes | Remove all intersection classes |
| Hero2.astro | Flash on alt heroes | Remove all intersection classes |
| Footer.astro | Unnecessary animation | Remove intersection classes |
| WidgetWrapper.astro | Above-fold sections | Replace with plain `<section>` for hero content |
| BasicScripts.astro | Media query mismatch | Update breakpoint to match header |

---

## Step-by-Step Migration

### Step 1: Identify Flash Classes

Search your codebase for these patterns:
```bash
grep -r "motion-safe:md:opacity-0" src/components/
grep -r "intersect-once" src/components/
grep -r "intersect:animate-fade" src/components/
```

### Step 2: Fix Hero.astro

**File:** `src/components/widgets/Hero.astro`

**BEFORE:**
```astro
{tagline && (
  <p
    class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"
    set:html={tagline}
  />
)}
{title && (
  <Fragment
    as={titleAs}
    class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200 intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"
    set:html={title}
  />
)}
{subtitle && (
  <p
    class="text-xl text-muted mb-6 dark:text-slate-300 intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"
    set:html={subtitle}
  />
)}
{actions && (
  <div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">
    <!-- buttons -->
  </div>
)}
<div
  class="intersect-once intersect-no-queue intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"
>
  <!-- hero image -->
</div>
```

**AFTER:**
```astro
{tagline && (
  <p
    class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase"
    set:html={tagline}
  />
)}
{title && (
  <Fragment
    as={titleAs}
    class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200"
    set:html={title}
  />
)}
{subtitle && (
  <p
    class="text-xl text-muted mb-6 dark:text-slate-300"
    set:html={subtitle}
  />
)}
{actions && (
  <div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4">
    <!-- buttons -->
  </div>
)}
<div>
  <!-- hero image -->
</div>
```

**Classes to remove from each element:**
- `intersect-once`
- `intersect-quarter`
- `intersect-no-queue`
- `motion-safe:md:opacity-0`
- `motion-safe:md:intersect:animate-fade`

---

### Step 3: Fix HeroText.astro

**File:** `src/components/widgets/HeroText.astro`

Same pattern as Hero.astro. Remove intersection classes from:
- Tagline (line ~33)
- Title (line ~41)
- Subtitle (line ~50)
- CTA buttons container (line ~56)

---

### Step 4: Fix Hero2.astro

**File:** `src/components/widgets/Hero2.astro`

Same pattern. Remove intersection classes from:
- Tagline (line ~34)
- Title (line ~42)
- Subtitle (line ~51)
- Actions container (line ~59)
- Image container (line ~78)

---

### Step 5: Fix Footer.astro

**File:** `src/components/widgets/Footer.astro`

Footer doesn't need scroll animation - it's at the bottom of every page.

**BEFORE:**
```astro
<div
  class="relative max-w-7xl mx-auto px-4 sm:px-6 dark:text-slate-300 intersect-once intersect-quarter intersect-no-queue motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"
>
```

**AFTER:**
```astro
<div
  class="relative max-w-7xl mx-auto px-4 sm:px-6 dark:text-slate-300"
>
```

---

### Step 6: Fix WidgetWrapper for Hero Content

If your homepage uses `WidgetWrapper` for sections that appear above-the-fold:

**BEFORE (index.astro):**
```astro
<WidgetWrapper containerClass="bg-white py-4">
  <ClipboardButton referralCode="CODE123" />
</WidgetWrapper>
```

**AFTER:**
```astro
<section class="relative not-prose scroll-mt-[72px] bg-white py-4">
  <div class="mx-auto max-w-7xl px-4 md:px-6">
    <ClipboardButton referralCode="CODE123" />
  </div>
</section>
```

The key is replacing `WidgetWrapper` (which has intersection classes) with a plain `<section>` for above-the-fold content.

---

### Step 7: Fix BasicScripts Media Query (Optional)

If you see flash when resizing the browser window, check the media query in `BasicScripts.astro`:

**BEFORE:**
```javascript
const screenSize = window.matchMedia('(max-width: 767px)');
```

**AFTER (if header uses xl breakpoint):**
```javascript
const screenSize = window.matchMedia('(max-width: 1279px)');
```

This should match your header's mobile menu breakpoint.

---

## What NOT to Change

Keep intersection animations on these components (they're below-the-fold):

✅ **WidgetWrapper.astro** - For Features, FAQs, Stats sections  
✅ **ItemGrid.astro** - Feature cards  
✅ **ItemGrid2.astro** - Grid items  
✅ **Timeline.astro** - Timeline animations  
✅ **Pricing.astro** - Pricing cards  
✅ **Testimonials.astro** - Testimonial cards  
✅ **Stats.astro** - Statistics display  
✅ **RelatedPosts.astro** - Related posts at bottom of blog

These work correctly because they're only visible after scrolling.

---

## AI Agent Prompt Template

Copy this prompt when asking AI to fix flash issues on another site:

```
# Task: Fix Intersection Observer Flash Issues

The website has a "double flash" on page load where hero content appears, disappears, then fades in.

## Root Cause
Intersection observer animations applied to above-the-fold content cause:
1. Content visible on HTML load
2. JS sets opacity: 0
3. Observer detects viewport, fades content in
= Flash

## Fix Required
Remove these CSS classes from ALL Hero components (Hero.astro, HeroText.astro, Hero2.astro):

REMOVE:
- intersect-once
- intersect-quarter
- intersect-half
- intersect-no-queue
- motion-safe:md:opacity-0
- motion-safe:md:intersect:animate-fade

KEEP:
- All other styling classes (text colors, spacing, fonts, etc.)

## Files to Check
1. src/components/widgets/Hero.astro
2. src/components/widgets/HeroText.astro  
3. src/components/widgets/Hero2.astro
4. src/components/widgets/Footer.astro
5. Any page using WidgetWrapper for above-fold content

## Do NOT Change
- WidgetWrapper.astro (used for below-fold sections)
- ItemGrid, ItemGrid2, Timeline, Pricing, Stats, Testimonials
- These are below-fold and should keep animations

## Test After
1. Load homepage - hero should appear instantly (no flash)
2. Scroll down - Features/FAQs should still animate
3. Load blog pages - hero text instant, no flash
4. Check footer - should not animate

## Search Pattern
grep -r "motion-safe:md:opacity-0" src/components/widgets/Hero
```

---

## Testing Checklist

After applying fixes, verify:

**Homepage:**
- [ ] Hero title appears instantly (no flash)
- [ ] Hero subtitle appears instantly (no flash)
- [ ] CTA buttons appear instantly (no flash)
- [ ] Hero image appears instantly (no flash)
- [ ] Features section STILL animates on scroll ✅

**Blog Pages:**
- [ ] Blog hero text appears instantly
- [ ] Blog cards animate when scrolled into view ✅

**All Pages:**
- [ ] Footer appears without animation
- [ ] No visible flash on any page load
- [ ] Below-fold sections still animate

---

## Performance Impact

**Before Fix:**
- Intersection Observer tracking 26 elements
- Multiple animation delays on load
- Visible flash on slower connections
- Poor Core Web Vitals (CLS issues)

**After Fix:**
- Observer tracking only 9 elements (below-fold)
- No animation delays for hero
- Instant display on all connections
- Better CLS, LCP, FCP scores

---

## Quick Reference: Classes to Remove

For any element that's **above the fold on page load**, remove:

```diff
- intersect-once
- intersect-quarter
- intersect-half
- intersect-no-queue
- motion-safe:md:opacity-0
- motion-safe:md:intersect:animate-fade
```

Keep the element's base styling classes.

---

## Rule of Thumb

```
✅ BELOW the fold → Keep intersection animations
❌ ABOVE the fold → Remove intersection animations
⚠️ MAYBE visible → Use intersect-half instead of intersect-quarter
```

**If it's visible without scrolling, don't animate it.**

---

**File Location:** `docs/flash-fix-migration-guide.md`  
**Last Updated:** December 23, 2025

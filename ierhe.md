# Vue Reactivity Project Feedback
**Student:** Ierhe

This is a salad ingredient builder — `BuildClick.vue` has working reactive click and total logic, but `ClickingButton.vue` is critically broken due to a self-import, an undefined variable, and misplaced code.

## Vite CLI – Mastery
`package.json` correctly includes `vite` and `vue` with proper scripts.

## Iteration in Vue – Approaching
`v-for` is used to render ingredients. The `:key` is present. However, since `ClickingButton.vue` is broken (see below), the full iteration behavior can't be verified.

## Data Binding – Approaching
`BuildClick.vue` correctly uses reactive state with `ref`. Binding in the template with `{{ }}` works for the running total. However, `ClickingButton.vue` has an undefined variable `pirces` (a typo of `prices`) that would cause a runtime error.

## Click Methods – Approaching
`BuildClick.vue` has working `@click` handlers that update reactive state correctly. `ClickingButton.vue` is broken — it has three critical issues:

**Bug 1 — Component imports itself:**
```js
// Broken — a component cannot import itself:
import ClickingButton from './ClickingButton.vue'
```
Remove this self-import entirely.

**Bug 2 — Undefined variable `pirces`:**
```js
// Broken — 'pirces' is not defined (typo):
total.value += pirces

// Fix:
total.value += item.price
```

**Bug 3 — `methods` inside `defineProps`:**
Vue 3 with `<script setup>` does not use an Options API `methods` object. Functions are just declared directly in the script:
```js
// Broken:
defineProps({
  methods: {
    addItem() { ... }
  }
})

// Fix — remove from defineProps, define separately:
defineProps({ item: Object })
function addItem() { ... }
```

## Reactive UI – Approaching
`BuildClick.vue` updates the total reactively. The broken `ClickingButton.vue` prevents the full interactive experience from working.

## Semantic HTML – Approaching
Good use of headings and buttons overall. `<bowl>` is not a valid HTML element — replace it with a `<div>`, `<section>`, or `<ul>`:

```html
<!-- Invalid: -->
<bowl>...</bowl>

<!-- Fix: -->
<section class="salad-bowl">...</section>
```

## BEM CSS – Not Yet
No BEM class names are used. Add descriptive class names:
- `salad-builder` (block)
- `salad-builder__ingredient` (element)
- `salad-builder__total--updated` (modifier)

## Bonus – Aesthetics – Approaching
The layout has a good structure. Adding a food-themed color palette and hover effects would make this feel like a real recipe builder.

## Summary of Critical Fixes
1. **Remove the self-import in `ClickingButton.vue`** — a file cannot import itself.
2. **Fix `pirces` → `item.price`** — it's a typo causing an undefined variable error.
3. **Move `methods` out of `defineProps`** — in `<script setup>`, functions are declared directly, not inside an options object.
4. **Replace `<bowl>` with a valid HTML element** like `<section>` or `<div>`.

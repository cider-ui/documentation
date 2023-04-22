---
title: Buttons
description:
---

The `<button>` element is an interactive element activated by a user with a mouse, keyboard, finger and more. Once activated, it performs an action, such as submitting a form or opening a dialog.

---

## Import
```js
import { Button } from "@cider-ui/cider-ui";
```

## Usage
{% components-wrapper %}
  {% cider-button onClick="" label="Button" /%}
{% /components-wrapper %}
```jsx
  <Button label="Button" />
```

### Sizes
{% components-wrapper %}
  {% cider-button onClick="" size="small" label="small" /%}
  {% cider-button onClick="" size="medium" label="medium" /%}
  {% cider-button onClick="" size="large" label="large" /%}
{% /components-wrapper %}
```jsx
  <Button label="small" label="small" />
  <Button label="medium" label="medium" />
  <Button label="large" label="large" />

```

### Variants
{% components-wrapper %}
  {% cider-button onClick="" filled="true" label="primary" style="primary" /%}
  {% cider-button onClick="" filled="true" label="secondary" style="secondary" /%}
{% /components-wrapper %}
```jsx
  <Button filled style="primary" label="primary" />
  <Button filled style="secondary" label="secondary" />
```

### Styles
{% components-wrapper %}
  {% cider-button onClick="" style="primary" label="primary" /%}
  {% cider-button onClick="" style="secondary" label="secondary" /%}
{% /components-wrapper %}
```jsx
  <Button style="primary" label="primary" />
  <Button style="secondary" label="secondary" />
```

### With icons
{% components-wrapper %}
  {% cider-button onClick="" label="Send" rightIcon="true" /%}
  {% cider-button onClick="" label="Subscribe" leftIcon="true" /%}
{% /components-wrapper %}
```jsx
  <Button label="Send" rightIcon={<PaperAirplaneIcon />} />
  <Button label="Subscribe" leftIcon={<BellAlterIcon />} />
```
The `<PaperAirplainIcon />` ans `<BellAlterIcon />` are available from [HeroIcons](https://www.npmjs.com/package/@heroicons/react)

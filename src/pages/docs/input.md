---
title: Inputs
description:
---

The `<input>` element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available.

---

## Import
```js
import { Input } from "@cider-ui/cider-ui";
```

## Usage
{% components-wrapper %}
  {% cider-input placeholder="Hello World!" /%}
{% /components-wrapper %}
```jsx
  <Input style="primary" placeholder="Hello world!" />
```

### Styles
{% components-wrapper %}
  {% cider-input style="primary" placeholder="Primary" /%}
  {% cider-input style="secondary" placeholder="Secondary" /%}
{% /components-wrapper %}
```jsx
  <Input style="primary" placeholder="Primary"/>
  <Input style="secondary" placeholder="Secondary"/>
```

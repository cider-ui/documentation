---
title: Textareas
description:
---

The `<textarea>` element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.

---

## Import
```js
import { Textarea } from "@cider-ui/cider-ui";
```

## Usage
{% components-wrapper %}
  {% cider-textarea placeholder="Hello World!" /%}
{% /components-wrapper %}
```jsx
  <Textarea style="primary" placeholder="Hello world!" />
```

### Styles
{% components-wrapper %}
  {% cider-textarea style="primary" placeholder="Primary" /%}
  {% cider-textarea style="secondary" placeholder="Secondary" /%}
{% /components-wrapper %}
```jsx
  <Textarea style="primary" placeholder="Primary"/>
  <Textarea style="secondary" placeholder="Secondary"/>
```

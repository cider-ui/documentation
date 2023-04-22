---
title: Tags
description:
---


## Import
```js
import { Tag } from "@cider-ui/cider-ui";
```

## Usage
{% components-wrapper %}
  {% cider-tag label="Primary" /%}
{% /components-wrapper %}
```jsx
  <Tag label="Primary" />
```

### Styles
{% components-wrapper %}
  {% cider-tag label="Primary" style="primary" /%}
  {% cider-tag label="Secondary" style="secondary" /%}
  {% cider-tag label="Success" style="success" /%}
  {% cider-tag label="New" style="new" /%}
  {% cider-tag label="Warning" style="warning" /%}
  {% cider-tag label="Error" style="error" /%}
  {% cider-tag label="Processing" style="processing" /%}
{% /components-wrapper %}
```jsx
  <Tag label="primary" style="primary" />
  <Tag label="secondary" style="secondary" />
  <Tag label="success" style="success" />
  <Tag label="new" style="new" />
  <Tag label="warning" style="warning" />
  <Tag label="error" style="error" />
  <Tag label="processing" style="processing" />
```


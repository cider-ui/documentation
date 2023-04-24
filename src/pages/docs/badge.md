---
title: Badges
description:
---


## Import
```js
import { Badge } from "@cider-ui/cider-ui";
```

## Usage
{% components-wrapper %}
  {% cider-badge label="Primary" /%}
{% /components-wrapper %}
```jsx
  <Badge label="Primary" />
```

### Styles
{% components-wrapper %}
  {% cider-badge label="Primary" style="primary" /%}
  {% cider-badge label="Secondary" style="secondary" /%}
  {% cider-badge label="Success" style="success" /%}
  {% cider-badge label="New" style="new" /%}
  {% cider-badge label="Warning" style="warning" /%}
  {% cider-badge label="Error" style="error" /%}
  {% cider-badge label="Processing" style="processing" /%}
{% /components-wrapper %}
```jsx
  <Badge label="primary" style="primary" />
  <Badge label="secondary" style="secondary" />
  <Badge label="success" style="success" />
  <Badge label="new" style="new" />
  <Badge label="warning" style="warning" />
  <Badge label="error" style="error" />
  <Badge label="processing" style="processing" />
```


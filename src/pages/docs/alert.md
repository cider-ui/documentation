---
title: Alerts
description:
---


## Import
```js
import { Alert } from "@cider-ui/cider-ui";
```

## Usage
{% components-wrapper %}
  {% cider-alert title="success" label="Hello world!" /%}
{% /components-wrapper %}
```jsx
  <Alert title="sucess" label="Hello world!" />
```

### Styles
{% components-wrapper %}
  {% cider-alert title="Success: " label="Hello world!" severity="success" /%}
  {% cider-alert title="Warning: " label="Hello world!" severity="warning" /%}
  {% cider-alert title="Info: " label="Hello world!" severity="info" /%}
  {% cider-alert title="New: " label="Hello world!" severity="new" /%}
  {% cider-alert title="Error: " label="Hello world!" severity="error" /%}
{% /components-wrapper %}
```jsx
  <Alert title="Success: " label="Hello world!" severity="success"/>
  <Alert title="Warning: " label="Hello world!" severity="warning"/>
  <Alert title="Info: " label="Hello world!" severity="info"/>
  <Alert title="New: " label="Hello world!" severity="new"/>
  <Alert title="Error" label="Hello world!" severity="error"/>
```


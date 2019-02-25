This components was created to replace the *ReactComponent* from earlier Versions, 
as this component works better with typescript and offers more features.

Down below you see an example on how to use the higher order component
```typescript jsx
import * as React from "react";
import {IToolkit, toolkit} from "./Toolkit";
interface Props extends IToolkit {
  ...
}

class BasicClass extends React.Component<Props, any> {
  render() {
    return (
      <p>
        {this.props.translate("test_message")}
      </p>
    )
  }
}

export default toolkit(BasicClass);
```

First you extend your props interface or type with the toolkit interface 

```typescript jsx
interface Props extends IToolkit {
  ...
}
``` 

Now typescript knows that the function that the toolkit implements are available in the component,
but to make them really available you need to export your component like this

``` typescript jsx
    sexport default toolkit(BasicClass);
```
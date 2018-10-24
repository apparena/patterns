Extend `ReactComponent` instead of Component of React-Package directy
```
export default class MyAwesomeClass extends ReactComponent { }
```

## Functions

**Translation:**  
Use for translations, just pass the name of the translation inside of your translations.js.  
To initialize your translations use
```import i18n from "i18n-js";
  import translations from "../to/your/translations";
  //Setting up i18n
  i18n.defaultLocale = "de";
  i18n.locale = window.__initialState.locale || "de";
  i18n.fallbacks = true;
  i18n.translations = translations;`
```
```
{ReactComponent.t('my.translation')} //Call inside your xml-component
```

**InitialState:**  
Use to Set Initial State and bindings
```
    getInitState() {
        this.test = ::this.test;
        return {
            foo: this.props.foo
        };
    }
```

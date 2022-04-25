# be-fruitful [TODO]

Attribute-based equivalent of slot-kin.

```html
<my-outer-web-component be-fruitful>
    
    #shadowroot
    ...
        <template be-born><template>
<my-outer-web-component>

```

be-fruitful searches inside the shadowroot for all template elements with the attribute be-born, and instantiates them as "light" elements.





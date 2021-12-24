# be-fruitful [TODO]

Attribute-based equivalent of slot-kin.

```html
<my-outer-web-component>
    <slot name=slot1></slot>
    #shadowroot
    <my-inner-web-component>
        <slot name=slot1>
        <slot name=slot2>
        #shadowroot
        <template be-fruitful='{
            "waitTime": 50,
            "beVigilant": true,
        }'>
            <div slot=slot1>I am slot 1</div>
            <button slot=slot2>I am  slot 2</div>
        <template>
    <my-inner-web-component>
<my-outer-web-component>

```

How to work with flattening slots?


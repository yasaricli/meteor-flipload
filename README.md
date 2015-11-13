# meteor-flipload
Flipping HTML elements to show a loading indicator easily.

##### INSTALL 
    meteor add yasaricli:flipload


```js
Template.example.onRendered(function() {
  this.flip = new Flipload(this.find('.box'));
  
  // Start to load
  flip.load();
  
  // Loaded
  Meteor.setTimeout(function () {
      flip.done();
  }, 5000);
});
```

## API

### Flipload(el, options)
Create a new instance of `Flipload`.
- `el`: A given `HTMLElement` to create an instance of `Flipload`.
- `options`: An optional Options `Object` to customize an instance.
    - `className`: Add a custom className to `reverse` element.
    - `line`: Rotate around `horizontal` or `vertical` line. By default is `vertical` line.
    - `theme`: Select what spinner theme you want to use: `light` or `dark`. By default is `dark`.
    - `text`: Adds some text to the `spinner`.

```js
var flipload = new Flipload(box, [options]);
```

### Flipload#load()
Flips and shows the `spinner`.

```js
flipload.load();
```

### update()
Update size and positon values of the `reverse` element and `spinner`.

```js
flipload.update();
```

### enable()
Enables an instance of `Flipload`.

```js
flipload.enable();
```

### disable()
Disables an instance of `Flipload`.

```js
flipload.disable();
```

### toggle()
Flips and shows or hides the `spinner` element.

```js
flipload.toggle();
```

### done()
Flips and hides the `spinner`.

```js
flipload.done();
```

### destroy()
Destroys an instance of `Flipload`.

```js
flipload.destroy();
```

## License
Copyright (c) 2013 [@pazguille](https://github.com/pazguille) Licensed under the MIT license.

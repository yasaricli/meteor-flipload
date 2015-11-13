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
  window.setTimeout(function () {
      flip.done();
  }, 5000);
});
```
[View demo page](http://pazguille.github.io/flipload/)

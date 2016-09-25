(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1><strong>My First Angular App</strong></h1>'
    })
    .Class({
      constructor: function() {}
    });
  app.BodyComponent =
    ng.core.Component({
      selector: 'my-body',
      template: '<div>This is the body of my content.</div>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));

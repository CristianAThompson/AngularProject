(function(app) {
  app.AppModule =
    ng.core.NgModule({
      imports: [ ng.platformBrowser.BrowserModule ],
      declarations: [ app.AppComponent, app.BodyComponent ],
      bootstrap: [ app.AppComponent, app.BodyComponent ]
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));

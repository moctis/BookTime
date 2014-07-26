part of booktime;

void RouteInitializer(Router router, RouteViewFactory views) {
  views.configure({
    'front': ngRoute(path: "/front", view: 'views/viewFront.html', defaultRoute: true),
  });

}

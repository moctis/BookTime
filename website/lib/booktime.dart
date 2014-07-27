library booktime;

import 'package:di/di.dart';
import 'package:angular/angular.dart';
import 'package:angular/routing/module.dart';

part 'front/front_view.dart';
part 'home/home_view.dart';
part 'RouteInitializer.dart';

class BookTimeModule extends Module {
  BookTimeModule() {
    bind(FrontViewController);
    bind(HomeViewController);
    bind(RouteInitializerFn, toValue: RouteInitializer);
    bind(NgRoutingUsePushState, toFactory: (_) => new NgRoutingUsePushState.value(false));
  }
}

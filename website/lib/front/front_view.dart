library front_view_controller;

import 'package:angular/angular.dart';

@Controller(
    selector: "[view-front]", publishAs:"it")
class FrontViewController {
  String message = "hello";

  FrontViewController() {

  }
}

@MirrorsUsed(symbols: 'foo', override: '*')
import 'dart:mirrors';
import 'package:logging/logging.dart';
import 'package:angular/application_factory.dart';
import 'package:booktime/booktime.dart';
import 'package:angular_ui/angular_ui.dart';

void main() {
  Logger.root.level = Level.FINEST;
  Logger.root.onRecord.listen((LogRecord r) { print(r.message); });

  applicationFactory()
        .addModule(new BookTimeModule())
        .addModule(new AngularUIModule())
        .run();
}

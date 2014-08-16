part of booktime;

@Controller(selector: "[view-front]", publishAs: "it")
class FrontViewController {
  final Router _router;
  String message = "Hello";

  FrontViewController(this._router);
  void connectFacebook() {
    connectSuccess();
  }

  void connectGoogle() {
    connectSuccess();
  }

  void connectEmail() {
    connectSuccess();
  }

  void connectSuccess() {
    _router.gotoUrl('/home');
  }
}

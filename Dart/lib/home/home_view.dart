part of booktime;

@Controller(selector: "[view-home]", publishAs: "it")
class HomeViewController {
  final Router _router;

  HomeViewController(this._router);
  void back() {
    _router.gotoUrl('/front');
  }
}

import 'dart:html';

void main() {
  querySelector("#sample_text_id")
      ..text = "Click me!"
      ..onClick.listen(onClick)
      ..onTouchStart.listen(onTouchEnd);
  reverseText();

  querySelector("#sample_test").text = "Dart Ready";
}

void onClick(MouseEvent event) {
  reverseText();
}

void onTouchEnd(TouchEvent event) {
  reverseText();
}

void reverseText() {
  var text = querySelector("#sample_text_id").text;
  var buffer = new StringBuffer();
  for (int i = text.length - 1; i >= 0; i--) {
    buffer.write(text[i]);
  }
  querySelector("#sample_text_id").text = buffer.toString();
}

function lexer(input) {
  this.input = input;
  this.lex = function() {
    var laxer_stack = [];
    for (car in this.input) {
      laxer_stack.push(this.input[car]);
    }
    return laxer_stack;
  }
}

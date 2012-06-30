function test_lexer() {

  test("simple lex test", function() {
    var test_lexer = Sugilite.lexer("foo 123");
    equal( test_lexer, [{NAME:"STRING",VALUE:"foo"},{NAME:"NUMBER",VALUE:"123"}], "Lexing did not occur properly" );
  });

}

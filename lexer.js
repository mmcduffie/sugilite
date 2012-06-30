(function() {
  var Sugilite = {

    lexer : function(input) {
      var laxer_stack = [];
      for (car in input) {
        laxer_stack.push(input[car]);
      }
      return laxer_stack;
    },

  };

  window.Sugilite = Sugilite;
})();

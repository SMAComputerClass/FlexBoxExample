// Put your JavaScript in this file.
'use strict';   // Enable "strict mode".  Note: This *must* be the first statement in the script.
                // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

      var board = document.getElementById("board");  // only 1 board, use ID

// --- Click event on a board, but the actual event is on a square
      board.addEventListener('click', function(e)
      {
          e.target.innerHTML = "X";   // setter

          var squares = document.querySelectorAll('.square');

          console.log(squares);
          alert(squares[0].innerHTML);  // getter

          // alert(e.target.id);

      });  // end of the board eventlistener

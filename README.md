SEIRFX-831 Project 1: Tic Tac Toe

This is an app that can be used on a laptop, tablet, or smartphone to play the classic game, tic tac toe. 

https://johnnyvincent.github.io/tic-tac-toe-john/

For this project I used: git, github, JQuery, AJAX, CSS, Bootstrap, HTML, CURL, Javascript, JSON

Planning began with a very simple wire-frame. This indicated the functionality of a tic tac toe game which could be played on a laptop, tablet, or cell phone. Functionality included sign-up, sign-in, and sign-out options. 

![wireframe laptop](https://imgur.com/a/WB9O7oz)
![wireframe mobile](https://imgur.com/a/uarvGt6)

I used curl to test the sign-up functionality, creating a user account. I used POST and DELETE API requests for signing up and signing out. I then created HTML code for the sign-up and sign-in buttons, testing the functionality as they were created. 

I then moved to HTML for the post-sign-in view. This included a new-game button and a game board, created using HTML/CSS. I added click handlers for each space on the board, and moved on to developing game-play logic. Game-play logic included checking for empty spaces, adding tokens if spaces were empty, rotating between X and O and checking for a winner after each move. This took the longest and involved plugging in different solutions until one worked. 

Messaging was added to inform players whose turn it is, who has won, or if the game is a tie. 

I then created an event listener for a click on new-game button, which will bring up a new board with a message that it is X's turn. 

There are some unsolved problems. My onSelectSpace function does not show up as a function, but the code executes as designed. I am not sure why this is. I would have liked to develop a minimax algorithm which would allow a user to play against ai. 

User Stories Created Before Development: As a user, I want to sign up and sign in so that I can play tic tac toe. As a user, I want to play tic tac toe against one other player. As a user, I want to complete a game and see a banner declaring what the outcome of the game was so i can know whether or not I won. As a user, I want to be able to start a new game by pressing a new game button. 

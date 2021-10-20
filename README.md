SEIRFX-831 Project 1: Tic Tac Toe

For this project i used: git, github, JQuery, AJAX, CSS, Bootstrap, HTML, CURL, Javascript, JSON

Planning began with a very simple wire-frame. This indicated the functionality of a tic tac toe game which could be played on a laptop, tablet, or cell phone. Functionality included sign-up, sign-in, and sign-out options. 

I used curl to test the sign-up functionality, creating a user account. I used POST and DELETE API requests for signing up and signing out. I then created HTML code for the sign-up and sign-in buttons, testing the functionality as they were created. 

I then moved to HTML for the post-sign-in view. This included a new-game button and a game board, created using HTML/CSS. I added click handlers for each space on the board, and moved on to developing game-play logic. Game-play logic included checking for empty spaces, adding tokens if spaces were empty, rotating between X and O and checking for a winner after each move. This took the longest and involved plugging in different solutions until one worked. 

Messaging was added to inform players whose turn it is, who has won, or if the game is a tie. 

I then created an event listener for a click on new-game button, which will bring up a new board with a message that it is X's turn. 

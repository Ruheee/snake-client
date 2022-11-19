# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here. 

## Final Product

!["Game screen when connected"](./Screen%20Shot%202022-11-19%20at%2011.27.36%20AM.png)

!["Message to client upon connection"](./Screen%20Shot%202022-11-19%20at%2011.27.53%20AM.png)

!["Idle message"](./Screen%20Shot%202022-11-19%20at%2011.28.02%20AM.png)


## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command.

## How to play

Move the snake to eat the food on the screen, the more food the snake eats the more it grows.

- Use 'w' to move up
- Use 'a' to move left
- Use 's' to move down
- Use 'd' to move right

## Messages

Client snake has pre determined mesagges to interact with other users, just use one of the following keys to send the message:

- Use 'l' to send: LOL
- Use 'n' to send: Nice Move
- Use 'b' to send: BRB

## How to end the game

Press Ctrl + C to exit the program on the client side.
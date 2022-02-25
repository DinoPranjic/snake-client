# Snake Client Project
By Dino Pranjic

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here. 

## **STRETCH**
I modified the server code slightly to allow it to broadcast a message to all clients when a new player joins the game. I've included the updated server code. My modification can be seen in RemoteInterface.js. -> snake-client/SERVER/src/RemoteInterface.js

## **Final Product**

An image from the game. Control the snake using the WASD keys.
<img width="565" alt="snake1" src="https://user-images.githubusercontent.com/92807500/155753474-b621a7a1-9654-48f5-99a2-664d0e627980.PNG">


Players can send messages to each other using the number keys!
<img width="567" alt="Snake4" src="https://user-images.githubusercontent.com/92807500/155755448-54ddd8b2-0668-41ee-b945-abe19363f06b.PNG">


Multiple players can play at once! (Requires multiple terminals open)
<img width="561" alt="snake2" src="https://user-images.githubusercontent.com/92807500/155753983-89e9b3f1-8029-4d40-9939-ddcd67ae4017.PNG">


**STRETCH:** When a new player joins, the server will broadcast a message to all players notifying them.
<img width="569" alt="Snake3" src="https://user-images.githubusercontent.com/92807500/155754010-46b2e9f7-842a-4b3b-8818-f0b711c5d346.PNG">



## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command.
- Both server and client must be kept open to work. 
- Leave the game at any time by pressing Ctrl-c
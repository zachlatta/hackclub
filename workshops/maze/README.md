# Friendly Maze Game

Short link to this workshop: https://workshops.hackclub.com/maze

## 1. Demo

Your mission is to build your own version of [The Scary Maze Game](http://www.playscarymazegame.net/play-scary-maze-game/).

Navigate your mouse through the maze without touching the walls:

![](img/demo.gif)

[![](img/bttn_play_now.png)][demo_output]
[![](img/bttn_view_code.png)][demo]

[demo]: https://jsbin.com/gist/219e3fb960306fba24bb
[demo_output]: https://jsbin.com/gist/219e3fb960306fba24bb

## 2. How to Use This Tutorial

In this tutorial, instead of walking you through how to build everything from scratch, we give you the code for how to make the maze game shown above and your mission will be to make your own version of it.

This workshop also, assumes that you have done the [Dodge](../dodge/README.md) workshop. Make sure you do that workshop first.

## 3. Setup

1. If you're more experienced and want to use your own editor, go ahead. Open the following files in your editor of choice. Do note however that the rest of this tutorial be written assuming that you are using JS Bin.

    - [This HTML file](examples/demo/index.html)
    - [This JavaScript file](examples/demo/main.js)
    - [This CSS file](examples/demo/style.css)

2. If you haven't already, make sure you have created (and logged into) a JS Bin account first. <a href="https://jsbin.com/register" target="_blank_">Create one here</a>.
3. Then open <a target="_blank_"href="http://jsbin.com/xivifu/12/edit?js,output"> this JS Bin</a>. It has all the starter code we need for this tutorial. Write any new code in this JS Bin. We'll refer to this JS Bin as your _"working bin"_.

## 4. Understanding the Code

Let's understand the code in your working bin. There are two main parts:

1. Adding the maze sprite
2. Removing the maze if the player touches the maze

### Adding the Maze Sprite

Here is the top half of the code that is responsible for adding the maze sprite.

```js
var maze;
var mazeImg;

function setup() {
  createCanvas(400, 400);                 // create a canvas

  maze = createSprite(200, 200);          // create a sprite in the center
  mazeImg = loadImage('http://i.imgur.com/ImtI8zi.png');    // load an image
  maze.addImage(mazeImg);                 // make the sprite have an image
}

function draw() {
  background(255, 255, 255);              // clear the background
  drawSprites();                          // draw all the sprites
```

For a refresher for how to do the following, see the corresponding sections from the Dodge workshop

- [Creating a blank canvas](https://github.com/hackclub/hackclub/blob/master/workshops/dodge/blank_canvas.md)
- [Adding a sprite](https://github.com/hackclub/hackclub/blob/master/workshops/dodge/add_player_sprite.md)
- [Adding an image to your sprite](https://github.com/hackclub/hackclub/blob/master/workshops/dodge/player_image.md)

### Game Over Condition

The remainder of the code is responsible for removing the maze if the the mouse touches it.

```js
  if(maze.overlapPixel(mouseX, mouseY)){  // if the mouse touches the image
    maze.remove();                           // remove the maze
  }
}
```

Note that `mouseX` represents the current **x** coordinate of the mouse and `mouseY` represents the current **y** coordinate of the mouse.

For a refresher of the coordinate system, you can checkout <a href="https://github.com/hackclub/hackclub/blob/master/workshops/soccer/add_player_sprite.md#understanding-the-coordinate-system" target="_blank"> this section</a> of the Soccer Workshop.

With that, you can interpret the above line of code as:

If the mouse's `x` and `y` coordinates overlap with with one of the maze's pixels, then remove the maze.

To get a more in depth explanation, ask someone who you think might know for help : )

## 5. Extending the Game

Now try extending the game on your own. Here are some things that you can try to figure out how to do:

- Try pausing the game before game starts
- Instead of using the provided maze, try finding your own maze on Google Images
- Try drawing and uploading your own maze to Imgur
- Make it work on mobile by using `touchX` and `touchY` instead of `mouseX` and `mouseY`
- Try making it say "Game Over" when you hit the walls of the maze
- Try making it say "Win" when you reach the end of the maze
- Try making a scary popup appear and a "scream" sound play after a certain amount of time or when the player reaches a certain part of the maze
- Try adding different levels to the game

One last thing. Please click a rating below to rate this workshop. It'll only take 3 seconds.

_How likely is it that you would recommend this workshop to a friend?_

| [1][r1] | [2][r2] | [3][r3] | [4][r4] | [5][r5] | [6][r6] | [7][r7] | [8][r8] | [9][r9] | [10][r10] |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | --------- |

[r1]: https://feedback-redir.hackclub.com/1xPK4BbSJ3Q4iouohj0V9511rqD4a9Sf1JSebGcD4qmU?ip=entry.78173348&rfield=entry.559841237&r=1
[r2]: https://feedback-redir.hackclub.com/1xPK4BbSJ3Q4iouohj0V9511rqD4a9Sf1JSebGcD4qmU?ip=entry.78173348&rfield=entry.559841237&r=2
[r3]: https://feedback-redir.hackclub.com/1xPK4BbSJ3Q4iouohj0V9511rqD4a9Sf1JSebGcD4qmU?ip=entry.78173348&rfield=entry.559841237&r=3
[r4]: https://feedback-redir.hackclub.com/1xPK4BbSJ3Q4iouohj0V9511rqD4a9Sf1JSebGcD4qmU?ip=entry.78173348&rfield=entry.559841237&r=4
[r5]: https://feedback-redir.hackclub.com/1xPK4BbSJ3Q4iouohj0V9511rqD4a9Sf1JSebGcD4qmU?ip=entry.78173348&rfield=entry.559841237&r=5
[r6]: https://feedback-redir.hackclub.com/1xPK4BbSJ3Q4iouohj0V9511rqD4a9Sf1JSebGcD4qmU?ip=entry.78173348&rfield=entry.559841237&r=6
[r7]: https://feedback-redir.hackclub.com/1xPK4BbSJ3Q4iouohj0V9511rqD4a9Sf1JSebGcD4qmU?ip=entry.78173348&rfield=entry.559841237&r=7
[r8]: https://feedback-redir.hackclub.com/1xPK4BbSJ3Q4iouohj0V9511rqD4a9Sf1JSebGcD4qmU?ip=entry.78173348&rfield=entry.559841237&r=8
[r9]: https://feedback-redir.hackclub.com/1xPK4BbSJ3Q4iouohj0V9511rqD4a9Sf1JSebGcD4qmU?ip=entry.78173348&rfield=entry.559841237&r=9
[r10]: https://feedback-redir.hackclub.com/1xPK4BbSJ3Q4iouohj0V9511rqD4a9Sf1JSebGcD4qmU?ip=entry.78173348&rfield=entry.559841237&r=10

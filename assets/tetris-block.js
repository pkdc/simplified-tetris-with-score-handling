"use strict";
import {nextRound} from './scoreboard.js';
import Block from './block.js';
class tetrisBlock {
    constructor(x1, y1, x2, y2, x3, y3, x4, y4, blockColour, shape, locked, end) {
        this.blocks = [
          new Block(x1, y1),
          new Block(x2, y2),
          new Block(x3, y3),
          new Block(x4, y4),
        ]
        this.blockColour = blockColour;
        this.shape = shape;
        this.locked = locked;
        this.end = end;
        // this.canMove = canMove;
      }

      // get getBlock1() {return {x: _x1, y: _y1};}
      // get getBlock2() {return {x: _x2, y: _y2};}
      // get getBlock3() {return {x: _x3, y: _y3};}
      // get getBlock4() {return {x: _x4, y: _y4};}
      // get getShape() {return _shape;}

      // set setBlock1({x, y}) {
      //   this._x1 = x;
      //   this._y1 = y;
      // }
      // set setBlock2({x, y}) {
      //   this._x2 = x;
      //   this._y2 = y;
      // }
      // set setBlock3({x, y}) {
      //   this._x3 = x;
      //   this._y3 = y;
      // }
      // set setBlock4({x, y}) {
      //   this._x4 = x;
      //   this._y4 = y;
      // }
      // set setCanMove(able) {
      //   this._canMove = able;
      // }

      get endGame() {
        // console.log("get end", this.end);
        return this.end;
      }

      // for optimisation purposes
      get endSoon() {
        return this.soon;
      }

      // slowFall
      fall(curBlocks, gameBoard) {
        let collide = this.blocks.some((block) => {
          let nextBlock = document.querySelector(`.x-${block.x}.y-${block.y+1}`);
          return nextBlock && nextBlock.classList.contains("occupied");
        });

        console.log("collided", collide);

        if (collide && this.blocks.some(block => block.y <= 0)) {
          // end the game
          this.end = true;
          console.log("Game over", "end: ", this.end);
          return;
        }

        if (collide && this.blocks.some(block => block.y === 1)) {
          this.soon = true;
          console.log("ending soon", "soon: ", this.soon);
        }

        // lock the blocks if collided or reached the bottom
        if (this.blocks.some(block => block.y >= gameBoard.getMaxY-1 || collide)) {
          // console.log("can't move");
          this.locked = true;

          this.blocks.forEach((block) => {
            let domBlock = document.querySelector(`.x-${block.x}.y-${block.y}`);
            domBlock.classList.add("occupied");
            domBlock.style.background = this.blockColour;
          });

          // console.log(this.locked);
          const returnBlocks = tetrisBlock.newBlocks(curBlocks, gameBoard);

          return returnBlocks;
        }

        // remove the prev occupied class after moving out the pixel
        // move the blocks down by 1
        this.blocks.forEach((block) => {
          let prevDomBlock = document.querySelector(`.x-${block.x}.y-${block.y}`);
          if (prevDomBlock) {
            prevDomBlock.classList.remove("occupied");
          }
          block.y += 1;
        });

        return;
      }

      // check if there is a wall next to it
      mvRight(maxX) {
        if (this.blocks.some(block => block.x === maxX-1)) {
          return;
        }

        // check if there is another block
        let nextBlockArr = this.blocks.map(block => document.querySelector(`.x-${block.x+1}.y-${block.y}`));

        if (nextBlockArr.some((el) => el.classList.contains("occupied"))) {
          return;
        }

        // move right
        this.blocks.forEach(block => {
          block.x += 1;
        });
      }

      mvLeft() {
        // check if there is a wall next to it
        if (this.blocks.some(block => block.x === 0)) {
          return;
        }

        // check if there is another block
        let nextBlockArr = this.blocks.map(block => document.querySelector(`.x-${block.x-1}.y-${block.y}`))

        if (nextBlockArr.some((el) => el.classList.contains("occupied"))) {
          return;
        }

        // move left
        this.blocks.forEach(block => {
          block.x -= 1;
        });
      }

      // rotate
      rotate() {
        // switch(this.shape) {
        //   case "rect":
        //     console.log(this.shape);
        //     // just making it vertical...
        //     this.x2 = this.x1;
        //     this.x3 = this.x1;
        //     this.x4 = this.x1
        //     this.y2 = this.y1+1;
        //     this.y3 = this.y1+2;
        //     this.y4 = this.y1+3;
        // }
      }

      erase() {
        this.blocks.forEach((block => {
          let domBlock = document.querySelector(`.x-${block.x}.y-${block.y}`)
          domBlock.style.background = "var(--grey)";
        }))
      }

      // colour
      colour() {
        // if (!this.locked) {

        // }
        this.blocks.forEach((block) => {
          let domBlock = document.querySelector(`.x-${block.x}.y-${block.y}`);
          domBlock.style.background = this.blockColour;
        });
      }

      // generate
      static generateTBlock(gameBoard) {
        nextRound(gameBoard);
        console.log("maxX", gameBoard.getMaxX);
        let x1, y1, x2, y2, x3, y3, x4, y4, blockColour, shape;
        let locked = false;
        let end = false;
        let soon = false;
        const rand = Math.floor(Math.random()*6);
        console.log(`generate new ${rand}`);

        switch(rand) {
          case 0: // rectangle
            x1 = gameBoard.getMaxX/2 - 2;
            y1 = 0;
            x2 = gameBoard.getMaxX/2 - 1;
            y2 = 0;
            x3 = gameBoard.getMaxX/2;
            y3 = 0;
            x4 = gameBoard.getMaxX/2 + 1;
            y4 = 0;
            blockColour = "skyblue";
            shape = "rect";
            break;
          case 1: // sq
            x1 = gameBoard.getMaxX/2 - 1;
            y1 = 0;
            x2 = gameBoard.getMaxX/2;
            y2 = 0;
            x3 = gameBoard.getMaxX/2 - 1;
            y3 = 1;
            x4 = gameBoard.getMaxX/2;
            y4 = 1;
            blockColour = "yellow";
            shape = "sq";
            break;
          case 2: // L
            x1 = gameBoard.getMaxX/2 - 1;
            y1 = 0;
            x2 = gameBoard.getMaxX/2 - 1;
            y2 = 1;
            x3 = gameBoard.getMaxX/2 - 1;
            y3 = 2;
            x4 = gameBoard.getMaxX/2;
            y4 = 2;
            blockColour = "orange";
            shape = "L";
            break;
          case 3: // T
            x1 = gameBoard.getMaxX/2 - 1;
            y1 = 0;
            x2 = gameBoard.getMaxX/2;
            y2 = 0;
            x3 = gameBoard.getMaxX/2 + 1;
            y3 = 0;
            x4 = gameBoard.getMaxX/2;
            y4 = 1;
            blockColour = "purple";
            shape = "T";
            break;
          case 4: // Z
            x1 = gameBoard.getMaxX/2 - 1;
            y1 = 0;
            x2 = gameBoard.getMaxX/2;
            y2 = 0;
            x3 = gameBoard.getMaxX/2;
            y3 = 1;
            x4 = gameBoard.getMaxX/2 + 1;
            y4 = 1;
            blockColour = "red";
            shape = "Z";
            break;
          case 5: // S
            x1 = gameBoard.getMaxX/2 + 1;
            y1 = 0;
            x2 = gameBoard.getMaxX/2;
            y2 = 0;
            x3 = gameBoard.getMaxX/2;
            y3 = 1;
            x4 = gameBoard.getMaxX/2 - 1;
            y4 = 1;
            blockColour = "green";
            shape = "S";
            break;
          case 6: // L-inverse
            x1 = gameBoard.getMaxX/2 + 1;
            y1 = 0;
            x2 = gameBoard.getMaxX/2 + 1;
            y2 = 1;
            x3 = gameBoard.getMaxX/2 + 1;
            y3 = 2;
            x4 = gameBoard.getMaxX/2;
            y4 = 2;
            blockColour = "blue";
            shape = "L-inverse";
            break;
        }
        console.log(x1, y1);
        console.log(x2, y2);
        console.log(x3, y3);
        console.log(x4, y4);
        return [x1, y1, x2, y2, x3, y3, x4, y4, blockColour, shape, locked, end];
      }

      static newBlocks(curBlocks, gameBoard) {
        // generate
        console.log("game maxX", gameBoard.getMaxX);
        curBlocks = new tetrisBlock(...tetrisBlock.generateTBlock(gameBoard));
        console.log("shape", `${curBlocks.shape}`);
        console.log("locked?", `${curBlocks.locked}`);
        // console.log(`blocks created`);
        curBlocks.colour();
        // console.log(`blocks coloured`);
        return curBlocks;
    }
};

export default tetrisBlock;

// tetrisBlock.prototype.slowDrop = function() {

// };
// tetrisBlock.prototype.rotate
// tetrisBlock.prototype.moveRight
// tetrisBlock.prototype.moveLeft
// tetrisBlock.prototype.fastDrop

      // fastFall
      // fastFall(maxY) {
      //   console.log(this);
      //   wait = 1000;
      //   if (this.y1 >= maxY-1 || this.y2 >= maxY-1 || this.y3 >= maxY-1 || this.y4 >= maxY-1) {
      //     console.log("bottom reached");
      //     this.canMove = false;
      //     return;
      //   }
      //   // const bStyles = window.getComputedStyle(this);
      //   // const bBGColour = bStyles.getPropertyValue("background");
      //   // if (bBGColour !== "var(--grey)") {
      //     // console.log("another block reached");
      //   // }
      //   // console.log(this.y1);
      //   this.y1 += 1;
      //   this.y2 += 1;
      //   this.y3 += 1;
      //   this.y4 += 1;
      // }
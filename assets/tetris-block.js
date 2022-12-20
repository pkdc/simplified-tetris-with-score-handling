"use strict";
import {nextRound} from './scoreboard.js';
class tetrisBlock {
    constructor(x1, y1, x2, y2, x3, y3, x4, y4, blockColour, shape, locked, end) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
        this.x4 = x4;
        this.y4 = y4;
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

      get endSoon() {
        return this.soon;
      }

      // slowFall
      fall(curBlocks, gameBoard) {
        // console.log(this);
        let block1 = document.querySelector(`.x-${this.x1}.y-${this.y1}`);
        let block2 = document.querySelector(`.x-${this.x2}.y-${this.y2}`);
        let block3 = document.querySelector(`.x-${this.x3}.y-${this.y3}`);
        let block4 = document.querySelector(`.x-${this.x4}.y-${this.y4}`);

        let blockArr = [block1, block2, block3, block4];

        let nextBlock1 = document.querySelector(`.x-${this.x1}.y-${this.y1+1}`);
        let nextBlock2 = document.querySelector(`.x-${this.x2}.y-${this.y2+1}`);
        let nextBlock3 = document.querySelector(`.x-${this.x3}.y-${this.y3+1}`);
        let nextBlock4 = document.querySelector(`.x-${this.x4}.y-${this.y4+1}`);
        let nextBlockArr = [nextBlock1,nextBlock2,nextBlock3,nextBlock4]

        let collide = false;

        // if (blockArr.some(el => el.classList.contains("occupied"))) {
        //   blockArr.forEach(blk => blk.classList.add("occupied"));
        //   collide = true;
        // }
        // console.log(blockArr.some((el) => el.classList.contains("occupied")))
        // collide = blockArr.some((el) => el.classList.contains("occupied"));
        collide = nextBlockArr.some((el) => {
        //   // const bStyles = window.getComputedStyle(el);
        //   // const bBGColour = bStyles.getPropertyValue("background-color");
        //   // console.log(bBGColour);
        //   // if (bBGColour !== "rgb(189, 176, 176)") {
        //   //   console.log("another block reached");
        //   //   return true;
        //   // }
        //   // console.log("collided");
        //   // if (this.y1 !== 0 || this.y2 !== 0 || this.y3 !== 0 || this.y4 !== 0 || this.y1 !== 1 || this.y2 !== 1 || this.y3 !== 1 || this.y4 !== 1 ) {
            return el.classList.contains("occupied");
        //   // }
        });
        console.log("collided", collide);

        if (collide && (this.y1 <= 0 || this.y2 <= 0 || this.y3 <= 0 || this.y4 <= 0)) {
          // end the game
          this.end = true;
          console.log("Game over", "end: ", this.end);
          return;
        }

        if (collide && (this.y1 === 1 || this.y2 === 1 || this.y3 === 1 || this.y4 === 1)) {
          this.soon = true;
          console.log("ending soon", "soon: ", this.soon);
        }

        // lock the blocks
        if (this.y1 >= gameBoard.getMaxY-1 || this.y2 >= gameBoard.getMaxY-1 || this.y3 >= gameBoard.getMaxY-1 || this.y4 >= gameBoard.getMaxY-1 || collide) {
          // console.log("can't move");
          this.locked = true;
          for (const el of blockArr) {
            el.classList.add("occupied");
            el.style.background = this.blockColour;
          }
          // console.log(this.locked);
          const returnBlocks = tetrisBlock.newBlocks(curBlocks, gameBoard);

          return returnBlocks;
        }
        
        
        // move the blocks down by 1
        this.y1 += 1;
        this.y2 += 1;
        this.y3 += 1;
        this.y4 += 1;

        // remove the prev occupied class after moving out the pixel
        blockArr.forEach(function(el) {
          el.classList.remove("occupied");
        });

        return;
      }

      // check if there is a wall next to it
      mvRight(maxX) {
        if (this.x1 === maxX-1 || this.x2 === maxX-1 || this.x3 === maxX-1 || this.x4 === maxX-1) {
          return;
        }

        // check if there is another block
        let nextBlock1 = document.querySelector(`.x-${this.x1+1}.y-${this.y1}`);
        let nextBlock2 = document.querySelector(`.x-${this.x2+1}.y-${this.y2}`);
        let nextBlock3 = document.querySelector(`.x-${this.x3+1}.y-${this.y3}`);
        let nextBlock4 = document.querySelector(`.x-${this.x4+1}.y-${this.y4}`);
        let nextBlockArr = [nextBlock1,nextBlock2,nextBlock3,nextBlock4]

        if (nextBlockArr.some((el) => el.classList.contains("occupied"))) {
          return;
        }
        
        // move right
        console.log(this);
        this.x1 += 1;
        this.x2 += 1;
        this.x3 += 1;
        this.x4 += 1;
      }

      mvLeft() {
        // check if there is a wall next to it
        if (this.x1 === 0 || this.x2 === 0 || this.x3 === 0 || this.x4 === 0) {
          return;
        }

        // check if there is another block
        let nextBlock1 = document.querySelector(`.x-${this.x1-1}.y-${this.y1}`);
        let nextBlock2 = document.querySelector(`.x-${this.x2-1}.y-${this.y2}`);
        let nextBlock3 = document.querySelector(`.x-${this.x3-1}.y-${this.y3}`);
        let nextBlock4 = document.querySelector(`.x-${this.x3-1}.y-${this.y3}`);
        let nextBlockArr = [nextBlock1,nextBlock2,nextBlock3,nextBlock4]

        if (nextBlockArr.some((el) => el.classList.contains("occupied"))) {
          return;
        }

        // move left
        this.x1 -= 1;
        this.x2 -= 1;
        this.x3 -= 1;
        this.x4 -= 1;
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
        let block1 = document.querySelector(`.x-${this.x1}.y-${this.y1}`);
        let block2 = document.querySelector(`.x-${this.x2}.y-${this.y2}`);
        let block3 = document.querySelector(`.x-${this.x3}.y-${this.y3}`);
        let block4 = document.querySelector(`.x-${this.x4}.y-${this.y4}`);

        block1.style.background = "var(--grey)";
        block2.style.background = "var(--grey)";
        block3.style.background = "var(--grey)";
        block4.style.background = "var(--grey)";
      }

      // colour
      colour() {

        // if (!this.locked) {

        // }
        console.log(this.x1, this.y1);
        console.log(this.x2, this.y2);
        console.log(this.x3, this.y3);
        console.log(this.x4, this.y4);
        console.log(document.querySelector(`.x-${this.x1}.y-${this.y1}`));
        let block1 = document.querySelector(`.x-${this.x1}.y-${this.y1}`);
        let block2 = document.querySelector(`.x-${this.x2}.y-${this.y2}`);
        let block3 = document.querySelector(`.x-${this.x3}.y-${this.y3}`);
        let block4 = document.querySelector(`.x-${this.x4}.y-${this.y4}`);
        // console.log(block1);

        block1.style.background = this.blockColour;
        block2.style.background = this.blockColour;
        block3.style.background = this.blockColour;
        block4.style.background = this.blockColour;
      }

      // generate
      static generateTBlock(gameBoard) {
        nextRound(gameBoard);
        console.log("maxX", gameBoard.getMaxX);
        let x1, y1, x2, y2, x3, y3, x4, y4, blockColour, shape;
        let locked = false;
        let end = false;
        let soon = false;
        const rand = Math.floor(Math.random()*2);
        // const rand = 1;
        // const rand = 0;
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
            x4 = gameBoard.getMaxX
            /2;
            y4 = 1;
            blockColour = "yellow";
            shape = "sq";
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
"use strict";

class tetrisBlock {
    constructor(x1, y1, x2, y2, x3, y3, x4, y4, blockColour, shape, canMove) {
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

      // slowFall
      fall(maxY) {
        console.log(this);

        if (this.y1 >= maxY-1 || this.y2 >= maxY-1 || this.y3 >= maxY-1 || this.y4 >= maxY-1) {
          console.log("bottom reached");
          this.canMove = false;
          return;
        }
        // const bStyles = window.getComputedStyle(this);
        // const bBGColour = bStyles.getPropertyValue("background");
        // if (bBGColour !== "var(--grey)") {
          // console.log("another block reached");
        // }
        // console.log(this.y1);
        this.y1 += 1;
        this.y2 += 1;
        this.y3 += 1;
        this.y4 += 1;
      }

      // move right
      mvRight(maxX) {
        if (this.x1 === maxX-1 || this.x2 === maxX-1 || this.x3 === maxX-1 || this.x4 === maxX-1) {
          return;
        }
        console.log(this);
        this.x1 += 1;
        this.x2 += 1;
        this.x3 += 1;
        this.x4 += 1;
      }
      // move left
      mvLeft() {
        if (this.x1 === 0 || this.x2 === 0 || this.x3 === 0 || this.x4 === 0) {
          return;
        }
        console.log(this);
        this.x1 -= 1;
        this.x2 -= 1;
        this.x3 -= 1;
        this.x4 -= 1;
      }

      // rotate
      rotate() {
        switch(this.shape) {
          case "rect":
            console.log(this.shape);
            // just making it vertical...
            this.x2 = this.x1;
            this.x3 = this.x1;
            this.x4 = this.x1
            this.y2 = this.y1+1;
            this.y3 = this.y1+2;
            this.y4 = this.y1+3;
        }
      }

      erase() {
        let block1 = document.querySelector(`#pixel-${this.x1}-${this.y1}`);
        let block2 = document.querySelector(`#pixel-${this.x2}-${this.y2}`);
        let block3 = document.querySelector(`#pixel-${this.x3}-${this.y3}`);
        let block4 = document.querySelector(`#pixel-${this.x4}-${this.y4}`);

        block1.style.background = "var(--grey)";
        block2.style.background = "var(--grey)";
        block3.style.background = "var(--grey)";
        block4.style.background = "var(--grey)";
      }

      // colour
      colour() {
        let block1 = document.querySelector(`#pixel-${this.x1}-${this.y1}`);
        let block2 = document.querySelector(`#pixel-${this.x2}-${this.y2}`);
        let block3 = document.querySelector(`#pixel-${this.x3}-${this.y3}`);
        let block4 = document.querySelector(`#pixel-${this.x4}-${this.y4}`);
        // console.log(block1);

        block1.style.background = this.blockColour;
        block2.style.background = this.blockColour;
        block3.style.background = this.blockColour;
        block4.style.background = this.blockColour;
      }
      
      // fastDrop

      // generate
      static generate() {
        let x1, y1, x2, y2, x3, y3, x4, y4, blockColour, shape;
        const rand = Math.floor(Math.random()*2);
        // const rand = 0;
        console.log(`generate new ${rand}`);
        switch(rand) {
          case 0: // rectangle
            x1 = maxX/2 - 2;
            y1 = 0;
            x2 = maxX/2 - 1;
            y2 = 0;
            x3 = maxX/2;
            y3 = 0;
            x4 = maxX/2 + 1;
            y4 = 0;
            blockColour = "skyblue";
            shape = "rect";
            break;
          case 1: // sq
            x1 = maxX/2 - 1;
            y1 = 0;
            x2 = maxX/2;
            y2 = 0;
            x3 = maxX/2 - 1;
            y3 = 1;
            x4 = maxX/2;
            y4 = 1;
            blockColour = "yellow";
            shape = "sq";
            break;
        }
        return [x1, y1, x2, y2, x3, y3, x4, y4, blockColour, shape];
      }
};
// tetrisBlock.prototype.slowDrop = function() {

// };
// tetrisBlock.prototype.rotate 
// tetrisBlock.prototype.moveRight
// tetrisBlock.prototype.moveLeft
// tetrisBlock.prototype.fastDrop
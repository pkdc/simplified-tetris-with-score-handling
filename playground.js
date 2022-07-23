let i = 0;
let xpos = 0;
const inp = document.querySelector("input");
const box = document.querySelector("#box");
const paint = function() {
    if (i < 300) {
        requestAnimationFrame(paint);
    }
};
let prevTimestamp = 0;
const move = function(timestamp){
    if (timestamp) { // this is just to protect me if someplace else in my code i ever called move without passing in any parameter
        let timeDiff = timestamp - prevTimestamp;
        console.log("frame", timeDiff);
        prevTimestamp = timestamp; 
    }
    xpos += 5;
    box.style.transform = `translateX(${xpos}px)`;
    let widthLesHundred = document.body.clientWidth - 100;
    if (xpos < widthLesHundred) {
        requestAnimationFrame(move);
    }
};
requestAnimationFrame(move);
requestAnimationFrame(paint);
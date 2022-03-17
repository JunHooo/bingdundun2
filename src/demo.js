const string2 = `/* 送你一只冰墩墩
我要开始画了 */
.big{
    display: flex;
    justify-content: center;
    align-items: center;
    height:100%;
    width:100%;
}
.all{
    width: 60vw;
    height: 100vh;
    display: flex;
    justify-content: center;
}
.out{
    border: 0.5vw solid black;
    height: 38vw;
    width: 35vw;
    display: flex;
    justify-content: center;
    margin-top: 2vw;
    border-radius: 50% 50% 45% 45%;
    background-color: white;
    flex-wrap: wrap;
}
.head{
    border-radius: 50% 50% 35% 35%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.head.one{
    height: 24vw;
    width: 30vw;
    margin-top: 2vw;
    background-color: #48d748;
}
.head.two{
    height: 23vw;
    width: 29vw;
    background-color: yellow;
}
.head.three{
    height: 22vw;
    width: 28vw;
    background-color: rgb(92,118,195);
}
.head.four{
    height: 21vw;
    width: 27vw;
    background-color: #d54a4a;
}
.head.five{
    height: 20vw;
    width: 26vw;
    background-color: #37aaad;
}
.head.six{
    height: 19vw;
    width: 25vw;
    background-color: white;
    position: relative;
}
.lefteye1{
    height: 9vw;
    width: 7vw;
    border-radius: 50%  50%  50%  50%  / 55%   55%   52%  52%;
    transform: rotate(55deg);
    margin-top: -3vw;
    background-color: black;
    position: relative;
    z-index:2;
}
.righteye1{
    height: 9vw;
    width: 7vw;
    border-radius: 50%  50%  50%  50%  / 55%   55%   49%  49%;
    transform: rotate(-55deg);
    margin-left: 7vw;
    margin-top: -3vw;
    background-color: black;
    position: relative;
    z-index:2;
}
.lefteye2{
    height: 4vw;
    width: 4vw;
    border-radius: 50%;
    background-color: white;
    top:18%;
    left: 25%;
    position: absolute;
}
.righteye2{
    height: 4vw;
    width: 4vw;
    border-radius: 50%;
    background-color: white;
    top:18%;
    left: 15%;
    position: absolute;

}
.lefteye3{
    position: relative;
    background-color: black;
    height: 3.5vw;
    width: 3.5vw;
    border-radius: 50%;
    top:50%;
    margin-top:-1.75vw;
    left: 50%;
    margin-left: -1.75vw;
}
.righteye3{
    position: relative;
    background-color: black;
    height: 3.5vw;
    width: 3.5vw;
    border-radius: 50%;
    top:50%;
    margin-top:-1.75vw;
    left: 50%;
    margin-left: -1.75vw;
}
.lefteye4{
    position: absolute;
    background-color: white;
    width: 1vw;
    height: 1vw;
    border-radius: 50%;
    left: 40%;
}
.righteye4{
    position: absolute;
    background-color: white;
    width: 1vw;
    height: 1vw;
    border-radius: 50%;
    left: 40%;
}
#face{
    position: absolute;
    border:none;
    width: 10vw;
    height: 10vw;
    top:18vw;
    z-index:1;
}
.nose{
    position: relative;
    border-radius: 50%;
    background-color: black;
    left: 3.5vw;
    height: 2vw;
    width: 3vw;
    z-index: 10;
}
.monthtop{
    position: absolute;
    border-radius: 50%  50%  50%  50%  / 40%   40%   49%  49%;
    background-color: black;
    height: 5vw;
    width: 6vw;
    left: 2vw;
    top:-1vw;
}
.monthdown{
    position: absolute;
    border-radius: 50%  50%  50%  50%  / 45%   45%   49%  49%;
    background-color: white;
    height: 5vw;
    width: 7vw;
    left: 1.5vw;
    top:-2vw;
}
.tongue{
    position: absolute;
    background-color: #e34b65;
    width: 1vw;
    height: 0.5vw;
    border-radius: 0.5vw 0.5vw 0 0;
    top:3.4vw;
    left: 4.5vw;
}
.leftear{
    position: absolute;
    width: 10vw;
    height: 10vw;
    margin-left: -22vw;
    margin-top: 3vw;
    border: 0.5vw solid #2a2727;
    background-color: black;
    transform: rotate(-30deg);
    border-radius: 50%  50%  50%  50%  / 60%   60%   40%  40%;
    background-color: black;
    z-index: -1;
}
.rightear{
     position: absolute;
     width: 10vw;
     height: 10vw;
     margin-left: 22vw;
     margin-top: 3vw;
     transform: rotate(30deg);
     border: 0.5vw solid #2a2727;
     border-radius: 50%  50%  50%  50%  / 60%   60%   40%  40%;
     background-color: black;
    z-index: -1;
 }
.lefthand{
    position: absolute;
    width: 8vw;
    height: 16vw;
    background-color: black;
    margin-left: -36vw;
    margin-top: 18vw;
    transform: rotate(45deg);
    border: 0.5vw solid #2a2727;
    border-radius: 50%  50%  50%  50%  / 20%   20%   70%  70%;
    z-index: -1;
}
.righthand{
    position: absolute;
    width: 8vw;
    height: 16vw;
    background-color: black;
    margin-left: 36vw;
    margin-top: 10vw;
    transform: rotate(45deg);
    border: 0.5vw solid #2a2727;
    border-radius: 50%  50%  50%  50%  / 70%  70% 20%   20%  ;
    z-index: -1;
}
.heart {
    position: relative;
    margin-top: 1vw;
    margin-left: 2.1vw;
}
.heart:before,
.heart:after {
    position: absolute;
    content: "";
    left: 1.5vw;
    top: 0;
    width: 1.5vw;
    height: 2.5vw;
    background: #d95656;
    -moz-border-radius: 2.5vw 2.5vw 0 0;
    border-radius: 2.5vw 2.5vw 0 0;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: 0 100%;
    -moz-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    -o-transform-origin: 0 100%;
    transform-origin: 0 100%;
}
.heart:after {
    left: 0;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    -o-transform-origin: 100% 100%;
    transform-origin :100% 100%;
}
.leftfoot{
    position: absolute;
    width: 8vw;
    height: 10vw;
    background-color: black;
    margin-left: -17vw;
    margin-top: 35vw;
    border: 0.5vw solid #2a2727;
    border-radius: 0 0 20% 20%;
    z-index: -1;
}
.rightfoot{
    position: absolute;
    width: 8vw;
    height: 10vw;
    background-color: black;
    margin-left: 17vw;
    margin-top: 35vw;
    border: 0.5vw solid #2a2727;
    border-radius: 0 0 20% 20%;
    z-index: -1;
}
/* 好了,我画完了 */
`
const string1 = `Hi,宝贝
这是我为你做的第二只冰墩墩
希望你能够喜欢
虽然还是有很多瑕疵
但是希望你能接受它的不完美
送给你两句我喜欢的诗：
曾经沧海难为水
除却巫山不是云
`
let n = 0
let m = 0
// let time = 0;
// const play = () => {
//     let demo1 =document.querySelector('#demo1');
//     demo1.innerText = string1.substr(0, m);
//     // demo2.scrollTop = 999999
//     demo1.scrollTop = demo1.scrollHeight
//     m = m + 1;
//     if (m > string1.length) {
//         window.clearInterval(id)
//     }
// }
// const play = () => {
//     let demo1 =document.querySelector('#demo1');
//     demo1.innerText = string2.substr(0, m);
//     // demo2.scrollTop = 999999
//     demo1.scrollTop = demo1.scrollHeight
//     m = m + 1;
//     if (m > string2.length) {
//         window.clearInterval(id2)
//     }
// }
const play2 = () => {
  let demo1 = document.querySelector('#demo1')
  let demo2 = document.querySelector('#demo2')
  demo2.innerHTML = string2.substr(0, n)
  demo1.innerText = string2.substr(0, n)
  demo1.scrollTop = 99999
  n = n + 1
  if (n > string2.length) {
    window.clearInterval(id2)
  }
}
let time = 50
let id2 = setInterval(play2, time)
let status = true
function start() {
  if (status === true) {
    window.clearInterval(id2)
    status = !status
  } else {
    id2 = setInterval(play2, time)
    status = !status
  }
}

function slow() {
  window.clearInterval(id2)
  time = 100;
  id2 = setInterval(play2, time)
}
function normal() {
  window.clearInterval(id2)
  time = 50;
  id2 = setInterval(play2, time)
}
function fast() {
  window.clearInterval(id2)
  time = 0;
  id2 = setInterval(play2, time)
}


// let id = setInterval(play, 300)


// function toggleSound() {
//     let music = document.getElementById('bgMusic');//获取ID
//     console.log(music);
//     console.log(music.paused);
//     if (music.paused) { //判读是否播放
//         music.paused=false;
//         music.play(); //没有就播放
//     }
// }
// setInterval("toggleSound()",1);

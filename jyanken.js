'use strict';

const $jyanken = document.getElementsByTagName('img');

const $rock = $jyanken[0];
const $scissors = $jyanken[1];
const $papper = $jyanken[2];

let myShape = 0;

window.alert('ジャンケン大会の始まりです');
let yourShape = Math.floor(1 + Math.random() * 3);



$rock.addEventListener('click', () => {
    let isrerurn = window.confirm('グーでよろしいですか？');
    myShape = 1;
    if(isrerurn == true) {
        judge();
    }
})

$scissors.addEventListener('click', () => {
    let isreturn = window.confirm('チョキでよろしいですか？');
    myShape = 2;
    if(isreturn == true) {
        judge();
    }
})

$papper.addEventListener('click', () => {
    let isreturn = window.confirm('パーでよろしいですか？');
    myShape = 3;
    if(isreturn == true) {
        judge();
    }
})

let judge = () => {
    const rock = 1;
    const scissors = 2;
    const papper = 3;

if(yourShape == rock) {
    window.alert('相手はグーです');
}else if(yourShape == scissors) {
    window.alert('相手はチョキです');
}else if(yourShape == papper ) {
    window.alert('相手はパーです');
}else {
    window.alert('エラー');
}

if(myShape == yourShape ){
    window.alert('引分けです');
}else if (myShape == 1 && yourShape == 2) {
    window.alert('あなたの勝ちです！');
}else if (myShape == 1 && yourShape == 3) {
    window.alert('あなたの負けです');
}else if (myShape == 2, yourShape ==1) {
    window.alert('あなたの負けです');
}else if (myShape == 2, yourShape == 3) {
    window.alert('あなたの勝ちです！');
}else if (myShape == 3, yourShape == 1) {
    window.alert('あなたの勝ちです！');
}else if (myShape == 3, yourShape == 2) {
    window.alert('あなたの負けです');
}else  {
    window.alert('エラー');
}
}


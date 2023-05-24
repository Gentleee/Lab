<!--// 

function click() {
if (event.button==2)  {
// Чтобы отключить левую кнопку мыши, поставьте цифру 1
// Чтобы отключить правую кнопку мыши, поставьте цифру 3

alert('Кнопка мышки отключена'); 
} }
// Отключение клавиатуры
function press(){
alert('Клавиатура отключена');
}

document.onmousedown=click;
//document.onkeydown=press;


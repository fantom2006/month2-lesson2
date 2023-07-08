//dz-1
/*
const main = Array(7).keys()
const arr = Array.from(main)

arr.reduce(acc => {
    const result = acc + '*'
    console.log(result);
    return result
}, '')
*/
//dz-2

/*
for(let i = 1; i < 100; i++){
   if (i % 3 ===0 && i % 5 === 0) {
       console.log('FizzBuzz');
   }  else if(i % 3 === 0) {
       console.log('Fizz');}
      else if(i % 5 === 0 ) {
        console.log('Buzz');
    }else {
        console.log(i);
    }
   }
*/

//dz-3

/*
var slash = '*';
var space = ' ';
var result = '';
var row = true;
for (var i = 0; i < 8; i++) {
  for (var j = 0; j < 8; j++) {
    if ((j+row) % 2 == 0) {
      result += space;
    } else {
      result += slash;
    }
  }
  console.log(result);
  result='';
  row = ! row;
}
*/

//dz-5
/*
let key = prompt('Введите свою подписки')

switch (key) {
    case ('vip'):
        alert  ('доступ получен');
        break;
    case ('pro'):
        alert  ('доступ получен');
        break;
    case ('free'):
        alert  ('доступ не разрешен');
        break;
    default:
        alert  ('повторите попытку');
        break;
}
*/

//dz-4

let none = prompt('who are you?')

switch (none) {
    case ('друг'):
        alert ("Вход разрешен")
         break;
    case ('онлайн'):
        alert ("Вход разрешен")
         break;
    case ('не беспокоить'):
        alert ('"Вход разрешен"')
        break;
    default:
        alert ('повторите попытку')
        break;
}


let i = 0;
let pwd;

do {
  pwd = +prompt('Введите пароль');
  i++;
} while (pwd !== 7777 && i < 3);

if (pwd === 7777) {
  console.log('Вход разрешен');
} else {
  console.log('Превышено максимальное количество попыток');
}
const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.append(wrapper);

const tittle = document.createElement('h1');
tittle.className = 'tittle';
wrapper.append(tittle);
tittle.innerHTML = 'RSS Virtual Keyboard';

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
wrapper.append(textarea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
wrapper.append(keyboard);

const description = document.createElement('div');
description.className = 'description';
wrapper.append(description);
description.innerHTML = '*Клавиатура создана для ОС Windows <br> *Комбинация сля смены языка: left Ctrl + Alt <br> *Для ввода мышью символа доступного только при зажатом Shift: <br> Зажмите мышью Shift затем переместите курсор на нужный символ и отпустите <br> *Используя метод описанный выше, <br> вы можете так же переключить язык используя только мышь';

localStorage.setItem('language', 'en');

function addKey(value, valueRu, className) {
  const key = document.createElement('div');
  key.className = className;
  if (localStorage.getItem('language') === 'en') {
    key.innerHTML = value;
  } else if (valueRu !== undefined) {
    key.innerHTML = valueRu;
  } else {
    key.innerHTML = value;
  }
  return key;
}

const allKeys = [
  {
    value: '`',
    class_name: 'key default_key a_z_key',
    alt_value: '~',
    value_ru: 'ё',
    code: 192,
  },
  {
    value: '1',
    class_name: 'key default_key',
    alt_value: '!',
    value_ru: '1',
    alt_value_ru: '!',
    code: 49,
  },
  {
    value: '2',
    class_name: 'key default_key',
    alt_value: '@',
    value_ru: '2',
    alt_value_ru: '"',
    code: 50,
  },
  {
    value: '3',
    class_name: 'key default_key',
    alt_value: '#',
    value_ru: '3',
    alt_value_ru: '№',
    code: 51,
  },
  {
    value: '4',
    class_name: 'key default_key',
    alt_value: '$',
    value_ru: '4',
    alt_value_ru: ';',
    code: 52,
  },
  {
    value: '5',
    class_name: 'key default_key',
    alt_value: '%',
    value_ru: '5',
    alt_value_ru: '%',
    code: 53,
  },
  {
    value: '6',
    class_name: 'key default_key',
    alt_value: '^',
    value_ru: '6',
    alt_value_ru: ':',
    code: 54,
  },
  {
    value: '7',
    class_name: 'key default_key',
    alt_value: '&',
    value_ru: '7',
    alt_value_ru: '?',
    code: 55,
  },
  {
    value: '8',
    class_name: 'key default_key',
    alt_value: '*',
    value_ru: '8',
    alt_value_ru: '*',
    code: 56,
  },
  {
    value: '9',
    class_name: 'key default_key',
    alt_value: '(',
    value_ru: '9',
    alt_value_ru: '(',
    code: 57,
  },
  {
    value: '0',
    class_name: 'key default_key',
    alt_value: ')',
    value_ru: '0',
    alt_value_ru: ')',
    code: 48,
  },
  {
    value: '-',
    class_name: 'key default_key',
    alt_value: '_',
    value_ru: '-',
    alt_value_ru: '_',
    code: 189,
  },
  {
    value: '=',
    class_name: 'key default_key',
    alt_value: '+',
    value_ru: '=',
    alt_value_ru: '+',
    code: 187,
  },
  {
    value: 'Backspace',
    class_name: 'key long_key',
  },
  {
    value: 'Tab',
    class_name: 'key tab default_key',
  },
  {
    value: 'q',
    class_name: 'key default_key a_z_key',
    value_ru: 'й',
    code: 81,
  },
  {
    value: 'w',
    class_name: 'key default_key a_z_key',
    value_ru: 'ц',
    code: 87,
  },
  {
    value: 'e',
    class_name: 'key default_key a_z_key',
    value_ru: 'у',
    code: 69,
  },
  {
    value: 'r',
    class_name: 'key default_key a_z_key',
    value_ru: 'к',
    code: 82,
  },
  {
    value: 't',
    class_name: 'key default_key a_z_key',
    value_ru: 'е',
    code: 84,
  },
  {
    value: 'y',
    class_name: 'key default_key a_z_key',
    value_ru: 'н',
    code: 89,
  },
  {
    value: 'u',
    class_name: 'key default_key a_z_key',
    value_ru: 'г',
    code: 85,
  },
  {
    value: 'i',
    class_name: 'key default_key a_z_key',
    value_ru: 'ш',
    code: 73,
  },
  {
    value: 'o',
    class_name: 'key default_key a_z_key',
    value_ru: 'щ',
    code: 79,
  },
  {
    value: 'p',
    class_name: 'key default_key a_z_key',
    value_ru: 'з',
    code: 80,
  },
  {
    value: '[',
    class_name: 'key default_key a_z_key',
    alt_value: '{',
    value_ru: 'х',
    code: 219,
  },
  {
    value: ']',
    class_name: 'key default_key a_z_key',
    alt_value: '}',
    value_ru: 'ъ',
    code: 221,
  },
  {
    value: '\\',
    class_name: 'key default_key',
    alt_value: '|',
    value_ru: '\\',
    alt_value_ru: '/',
    code: 220,
  },
  {
    value: 'Del',
    class_name: 'key',
  },
  {
    value: 'CapsLock',
    class_name: 'key long_key caps_lock',
  },
  {
    value: 'a',
    class_name: 'key default_key a_z_key',
    value_ru: 'ф',
    code: 65,
  },
  {
    value: 's',
    class_name: 'key default_key a_z_key',
    value_ru: 'ы',
    code: 83,
  },
  {
    value: 'd',
    class_name: 'key default_key a_z_key',
    value_ru: 'в',
    code: 68,
  },
  {
    value: 'f',
    class_name: 'key default_key a_z_key',
    value_ru: 'а',
    code: 70,
  },
  {
    value: 'g',
    class_name: 'key default_key a_z_key',
    value_ru: 'п',
    code: 71,
  },
  {
    value: 'h',
    class_name: 'key default_key a_z_key',
    value_ru: 'р',
    code: 72,
  },
  {
    value: 'j',
    class_name: 'key default_key a_z_key',
    value_ru: 'о',
    code: 74,
  },
  {
    value: 'k',
    class_name: 'key default_key a_z_key',
    value_ru: 'л',
    code: 75,
  },
  {
    value: 'l',
    class_name: 'key default_key a_z_key',
    value_ru: 'д',
    code: 76,
  },
  {
    value: ';',
    class_name: 'key default_key a_z_key',
    alt_value: ':',
    value_ru: 'ж',
    code: 186,
  },
  {
    value: "'",
    class_name: 'key default_key a_z_key',
    alt_value: '"',
    value_ru: 'э',
    code: 222,
  },
  {
    value: 'Enter',
    class_name: 'key middle_key',
  },
  {
    value: 'Shift',
    class_name: 'key long_key shift_key',
  },
  {
    value: 'z',
    class_name: 'key default_key a_z_key',
    value_ru: 'я',
    code: 90,
  },
  {
    value: 'x',
    class_name: 'key default_key a_z_key',
    value_ru: 'ч',
    code: 88,
  },
  {
    value: 'c',
    class_name: 'key default_key a_z_key',
    value_ru: 'с',
    code: 67,
  },
  {
    value: 'v',
    class_name: 'key default_key a_z_key',
    value_ru: 'м',
    code: 86,
  },
  {
    value: 'b',
    class_name: 'key default_key a_z_key',
    value_ru: 'и',
    code: 66,
  },
  {
    value: 'n',
    class_name: 'key default_key a_z_key',
    value_ru: 'т',
    code: 78,
  },
  {
    value: 'm',
    class_name: 'key default_key a_z_key',
    value_ru: 'ь',
    code: 77,
  },
  {
    value: ',',
    class_name: 'key default_key a_z_key',
    alt_value: '<',
    value_ru: 'б',
    code: 188,
  },
  {
    value: '.',
    class_name: 'key default_key a_z_key',
    alt_value: '>',
    value_ru: 'ю',
    code: 190,
  },
  {
    value: '/',
    class_name: 'key default_key',
    alt_value: '?',
    value_ru: '.',
    alt_value_ru: ',',
    code: 191,
  },
  {
    value: '&#708',
    class_name: 'key default_key',
    value_ru: '&#708',
  },
  {
    value: 'Shift',
    class_name: 'key  middle_key  shift_key',
  },
  {
    value: 'Ctrl',
    class_name: 'key',
  },
  {
    value: 'Win',
    class_name: 'key',
  },
  {
    value: 'Alt',
    class_name: 'key',
  },
  {
    value: ' ',
    class_name: 'key space default_key',
    value_ru: ' ',
  },
  {
    value: 'Alt',
    class_name: 'key',
  },
  {
    value: '&#706',
    class_name: 'key default_key',
    value_ru: '&#706',
  },
  {
    value: '&#709',
    class_name: 'key default_key',
    value_ru: '&#709',
  },
  {
    value: '&#707',
    class_name: 'key default_key',
    value_ru: '&#707',
  },
  {
    value: 'Ctrl',
    class_name: 'key',
  },
];

allKeys.forEach((el) => keyboard.append(addKey(el.value, el.value_ru, el.class_name)));

document.addEventListener('keydown', (e) => e.preventDefault());

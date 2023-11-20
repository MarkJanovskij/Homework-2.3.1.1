//1. Тестовые данные для функций:
//Функция вычисления факториала:

//javascript

// Входные данные: число для вычисления факториала
// Ожидаемый результат: факториал числа
const factorialTestData = [
  { input: 0, expected: 1 },
  { input: 5, expected: 120 },
  { input: 10, expected: 3628800 },
  // Добавьте любые другие тестовые случаи, которые вы хотите проверить
];

let expected = [];
for( let i=0; i<factorialTestData.length; i++){
    expected.push(factorialTestData[i].expected);
}
console.log(expected);
const maxPoints = Math.max(...expected);
console.log(maxPoints)

//
//Функция для проверки на четность числа:

//javascript

// Входные данные: число для проверки на четность
// Ожидаемый результат: true, если число четное, иначе - false
const isEvenTestData = [
  { input: 2, expected: true },
  { input: 7, expected: false },
  { input: 0, expected: true },
  // Добавьте другие тестовые случаи для разных чисел
];
const maxPoints2 = Math.max(...scorePoints);
//2. Тестовые данные для работы с массивами:
//Функция для суммирования элементов массива:

//javascript

// Входные данные: массив чисел для суммирования
// Ожидаемый результат: сумма всех элементов массива
const sumArrayTestData = [
  { input: [1, 2, 3], expected: 6 },
  { input: [5, 5, 5, 5], expected: 20 },
  { input: [], expected: 0 },
  // Добавьте другие массивы для тестирования суммирования
];

//Функция для поиска максимального числа в массиве:

//javascript

// Входные данные: массив чисел для поиска максимального значения
// Ожидаемый результат: максимальное число из массива
const maxNumberTestData = [
  { input: [1, 2, 3], expected: 3 },
  { input: [-5, -2, -10], expected: -2 },
  { input: [], expected: undefined },
  // Добавьте другие массивы для поиска максимального числа
];

//3. Тестовые данные для объектов:
//Функция для проверки наличия ключа в объекте:

//javascript

// Входные данные: объект и ключ для проверки
// Ожидаемый результат: true, если ключ существует в объекте, иначе - false
const hasKeyTestData = [
  { input: { name: 'Alice', age: 25 }, key: 'name', expected: true },
  { input: { model: 'X', manufacturer: 'Tesla' }, key: 'year', expected: false },
  { input: {}, key: 'test', expected: false },
  // Добавьте другие объекты и ключи для проверки
];

//Функция для объединения объектов:

//javascript

// Входные данные: несколько объектов для объединения
// Ожидаемый результат: объект, содержащий все ключи и значения объединенных объектов
const mergeObjectsTestData = [
  {
    input: [{ a: 1, b: 2 }, { c: 3 }],
    expected: { a: 1, b: 2, c: 3 },
  },
  {
    input: [{ key1: 'value1' }, { key2: 'value2' }, { key3: 'value3' }],
    expected: { key1: 'value1', key2: 'value2', key3: 'value3' },
  },
  {
    input: [],
    expected: {},
  },
  // Добавьте другие объекты для объединения
];

//Эти тестовые данные позволят вам проверить различные функции и методы JavaScript на корректность работы с разными входными значениями. Используйте их в тестах для своих функций или методов, чтобы удостовериться в их правильной работе.

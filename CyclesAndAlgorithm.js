//_________новая итерация
//сравниваем пару 2342 и 6
//сравниваем индексы 0 и 1
//работаем с массивом 2342,6,5675,85
//получился промежуточный массив 6,2342,5675,85

let arr =[2342,6]

for( let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length-i-1; j++){
        if(arr[j]>arr[j+1]){
            //obmen
            let temp = arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
}

console.log(arr)

let arr2 =[2342,6,5675,85]

for( let i=0; i<arr2.length; i++){
    for(let j=0; j<arr2.length-i-1; j++){
        if(arr2[j]>arr2[j+1]){
            //obmen
            let temp = arr2[j]
            arr2[j]=arr2[j+1]
            arr2[j+1]=temp
        }
    }
}

console.log(arr2)

//_________новая итерация
//сравниваем пару 2342 и 5675
//сравниваем индексы 1 и 2
//работаем с массивом 6,2342,5675,85
//получился промежуточный массив 6,2342,5675,85

//_________новая итерация
//сравниваем пару 5675 и 85
//сравниваем индексы 2 и 3
//работаем с массивом 6,2342,5675,85
//получился промежуточный массив 6,2342,85,5675

//_________новая итерация
//сравниваем пару 6 и 2342
//сравниваем индексы 0 и 1
//работаем с массивом 6,2342,85,5675
//получился промежуточный массив 6,2342,85,5675

//_________новая итерация
//сравниваем пару 2342 и 85
//сравниваем индексы 1 и 2
//работаем с массивом 6,2342,85,5675
//получился промежуточный массив 6,85,2342,5675

//_________новая итерация
//сравниваем пару 6 и 85
//сравниваем индексы 0 и 1
//работаем с массивом 6,85,2342,5675
//получился промежуточный массив 6,85,2342,5675

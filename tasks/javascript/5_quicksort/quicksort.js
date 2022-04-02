// Funcionalidad para aplicar el algoritmo Hoare para ordenamiento rápido.
let arrayList = [1, 4, 2, 7, 6, 3, 8, 20, 9, 15, 12, 10, 30];

// Posiciones
let initialPosition = 0;
let endPosition = arrayList.length - 1;

// Función para ordenar lista
const quicksort = (listNumber, leftPosition, rightPosition) => {
    if (leftPosition >= rightPosition) return;
    const position = partition(listNumber, leftPosition, rightPosition);
    quicksort(listNumber, leftPosition, position);
    quicksort(listNumber, position + 1, rightPosition);
};

// Función para particionar
const partition = (listNumber, leftPosition, rightPosition) => {
    // Selecciona un pivote
    //let index = Math.floor(Math.random()*(rightPosition - leftPosition) + leftPosition);
    let index = Math.floor((leftPosition + rightPosition) / 2);
    const pivote = listNumber[index];

    while(leftPosition <= rightPosition) {
        while (listNumber[leftPosition] < pivote){
            leftPosition++;
        }
        
        while (listNumber[rightPosition] > pivote) {
            rightPosition--;
        }
    
        if (leftPosition >= rightPosition) {
            return rightPosition;
        }
    
        const tmp = listNumber[leftPosition];
        listNumber[leftPosition] = listNumber[rightPosition];
        listNumber[rightPosition] = tmp;
    }
};

quicksort(arrayList, initialPosition, endPosition)
console.log(arrayList);
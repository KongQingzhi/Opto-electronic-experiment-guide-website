// const array = ["B3", "D2", "F1", "A9", "D12", "A2", "C1", "Z0", "B1"];
function dataSorting(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (Number(array[j].substring(1)) > Number(array[j + 1].substring(1))) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            } else if (Number(array[j].substring(1)) === Number(array[j + 1].substring(1))) {
                if (array[j].substring(0) > array[j + 1].substring(0)) {
                    const temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }

        }
    }
    return array;
}
// console.log(dataSorting(array));
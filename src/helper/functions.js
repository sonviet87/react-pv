/**********
 * Lesson1
 * ******** */

export const compartMaxItem = (a, b) => {
    a = a.toString();
    b = b.toString();
    return a + b < b + a;
}

export const sortArrToMaxNumber = (arr) => {
    if (arr.length < 0) return;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (compartMaxItem(arr[i], arr[j])) {
                [arr[j], arr[i]] = [arr[i], arr[j]];
            }
        }
    }
    return arr.join('');
}
/**********
 * Lesson2
 * ******** */
/*
* Random number
* params
* num : number random
*/
export const randomIndex = (num = 24) => (Math.floor(Math.random() * num))

/*
 * Create List Item
 * params
 * arr: List array
 * num : number item of array
 */
export const createListItem = (arr = [], num = 24) => {
    const arrItems = [];
    if (arr.length === 0) return arr;

    for (let i = 0; arrItems.length < num; i++) {
        let newItem = arr[randomIndex(num)];

        while (arrItems.includes(newItem)) {
            newItem = arr[randomIndex(num)];
        }
        arrItems.push(newItem);
    }

    return arrItems;
}

/*
 * Create Object form Array
 * params
 * arr: Array
 */
export const createArrayToObject = (arr = []) => {

    if (arr.length < 0) return arr;

    return arr.map((item, index) => {
        return {
            name: item,
            index
        }
    });
}

export const createArray6Item = (arr = []) => {

    if (arr.length === 0) return arr;

    let tempArr = [];
    let newArr = [];
    arr.forEach((item, index) => {
        index += 1;
        tempArr.push(item.name);
        if (index % 3 === 0) {
            newArr.push({
                list: tempArr,
                primary: item.index,
                indexSeleted: -1
            });
            tempArr = [];
        }

    });
    return newArr;

}
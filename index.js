const getUnavailableOrderDates = (arr) => {

    const newArr = arr.filter((n, index) => {

        let existsTwice = false;

        const badDatesArr = [];

        console.log('Filter Number Index: ', index);

        if (badDatesArr.includes(n)) {

            return;

        }else{

            for (i = index + 1; i < arr.length; i++) {
    
                console.log('For Loop Number Index: ', i);
    
                if (n === arr[i] && !existsTwice) {
    
                    existsTwice = true;
    
                } else if (n === arr[i] && existsTwice) {
    
    
                    badDatesArr.push(n);
                    return n;
    
                };
    
            };

        }


    });

    return [...new Set(newArr)];

};

const arr = [1, 2, 3, 2, 2, 1, 3, 3, 2, 2, 2, 2, 2, 2];

const newArr = getUnavailableOrderDates(arr);

console.log(newArr);
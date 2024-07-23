function add10(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = null;
            if (typeof num === "number")
                resolve(num + 10);
            else
                reject("num은 숫자가 아닙니다.");
        }, 2000);
    });
    return promise;
}

const p = add10(0);

p
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })

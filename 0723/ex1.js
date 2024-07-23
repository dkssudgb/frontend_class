function ex1(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = null;
            if (typeof num === "number")
                resolve(num + 10);
            else
                reject("num은 숫자가 아닙니다.");
        }, 2000);
    });

    promise
        .then((value) => {
            console.log(value);
        })
        .catch((error) => {
            console.log(error);
        })
}

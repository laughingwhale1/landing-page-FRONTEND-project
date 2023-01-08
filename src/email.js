// module.exports = { //eslint-disable-line
//     validate,
// }


export function validate(data) {
    if(data.toLowerCase().endsWith('@gmail.com') || data.toLowerCase().endsWith('yandex.ru') || data.toLowerCase().endsWith('outlook.com')) {
        return true;
    } else {
        return false;
    }
}

export function validateAsync(data) {
    return new Promise((res, rej) => {
        if(data.toLowerCase().endsWith('@gmail.com') || data.toLowerCase().endsWith('yandex.ru') || data.toLowerCase().endsWith('outlook.com')) {
            res(true);
        } else {
            res(false);
        }
    }, 2000);
}

export function validateWithThrow(data) {
    //try catch не нужен по факту
    try{
        if(data.toLowerCase().endsWith('@gmail.com') || data.toLowerCase().endsWith('yandex.ru') || data.toLowerCase().endsWith('outlook.com')) {
            return true;
        } else {
            throw new Error("Email invalid");
        }
    }
    catch (e) {
        throw new Error('Email invalid');
    }
}

export function validateWithLog(data) {
    if(data.toLowerCase().endsWith('@gmail.com') || data.toLowerCase().endsWith('yandex.ru') || data.toLowerCase().endsWith('outlook.com')) {
        console.log(true); //eslint-disable-line
    } else {
        console.log(false); //eslint-disable-line
    }
}
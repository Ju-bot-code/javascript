let log = console.log;


function isValidPassword(password, username) {
    log(password.length)
    return ((password.length >= 8) && !(password.includes(username)) && !(password.includes(' ')))
}

log(isValidPassword('julf1998', 'Judith Lobo'));

// check avg
function avg(data) {
    let avg = 0
    for (let ele of data) {
        avg = Number(avg) + Number(ele);
    }

    return (avg / data.length);
}

log(avg([5, 3, 2]))

for (let ele in { name: 'jane', age: 35 }) {
    log(ele, '-----', { name: 'jane', age: 35 }[ele])
}

log(typeof [], 'ARRAAAYYY')


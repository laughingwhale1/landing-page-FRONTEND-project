export {SectionCreatorFactory};
import {validate} from './email.js'
export{communitySection}

export const sub2 = document.createElement('input');

export const inp = document.createElement('input');

export const sub = document.createElement('input');

export const frm = document.createElement('form');

function SectionCreatorFactory() {
    this.create = (type) => {
        switch(type) {
            case 1:
                return standart();
            case 2:
                return advanced();
        }
    }

    this.remove = () => {
        return remove();
    }
}

function communitySection(data) {
    console.log(data) //eslint-disable-line
    let user1 = data[0];
    let user2 = data[1];
    let user3 = data[2];

    const anything = document.querySelector(".insertFormHere");
    anything.insertAdjacentHTML('beforebegin', '<section class="testi"></section>');

    const wrapper = document.querySelector(".testi");

    const div1 = document.createElement('div')
    div1.className = 'testi__subsection1'

    const zag = document.createElement('h2');
    zag.className = 'testi__header';
    zag.innerHTML = 'Big Community of <br> People Like You ';

    const text = document.createElement('p');
    text.className = 'testi__text';
    text.innerHTML = 'We\'re proud of our products, and we\'re really excited <br> when we get feedback from our users.';

    const div2 = document.createElement('div')
    div2.className = 'testi__subsection2'

    const p1 = document.createElement('div')
    p1.className = 'testi__p'
    const img1 = document.createElement('img')
    let avatar1 = new URL(user1.avatar);
    img1.setAttribute('src', `${avatar1}`)
    const p1text = document.createElement('p');
    p1text.innerHTML = "Lorem ipsum dolor sit amet, <br> consectetur adipiscing elit, sed do <br> eiusmod tempor incididunt ut <br> labore et dolor.";
    const p1name = document.createElement('p');
    p1name.innerHTML = `${user1.firstName} ${user1.lastName}`;
    p1name.className = 'testi__p-name'
    const p1pos = document.createElement('p');
    p1pos.innerHTML = `${user1.position}`;
    p1pos.className = 'testi__p-pos';

    const p2 = document.createElement('div')
    p2.className = 'testi__p'
    const img2 = document.createElement('img')
    let avatar2 = new URL(user2.avatar);
    img2.setAttribute('src', `${avatar2}`)
    const p2text = document.createElement('p');
    p2text.innerHTML = "Ut enim ad minim veniam, quis <br> nostrud exercitation ullamco <br> laboris nisi ut.";
    const p2name = document.createElement('p');
    p2name.innerHTML = `${user2.firstName} ${user2.lastName}`;
    p2name.className = 'testi__p-name'
    const p2pos = document.createElement('p');
    p2pos.innerHTML = `${user2.position}`;
    p2pos.className = 'testi__p-pos';

    const p3 = document.createElement('div')
    p3.className = 'testi__p'
    const img3 = document.createElement('img')
    let avatar3 = new URL(user3.avatar);
    img3.setAttribute('src', `${avatar3}`)
    const p3text = document.createElement('p');
    p3text.innerHTML = "Aliquip ex ea commodo consequat. <br> Duis aute irure dolor in <br> reprehenderit in voluptate velit esse cillum dolore eu <br> fugiat nulla pariatur.";
    const p3name = document.createElement('p');
    p3name.innerHTML = `${user3.firstName} ${user3.lastName}`;
    p3name.className = 'testi__p-name'
    const p3pos = document.createElement('p');
    p3pos.innerHTML = `${user3.position}`;
    p3pos.className = 'testi__p-pos';

    wrapper.appendChild(div1)
    div1.appendChild(zag);
    div1.appendChild(text);
    wrapper.appendChild(div2)
    div2.appendChild(p1);
    div2.appendChild(p2);
    div2.appendChild(p3);
    p1.appendChild(img1)
    p2.appendChild(img2)
    p3.appendChild(img3)
    p1.appendChild(p1text)
    p2.appendChild(p2text)
    p3.appendChild(p3text)
    p1.appendChild(p1name)
    p1.appendChild(p1pos)
    p2.appendChild(p2name)
    p2.appendChild(p2pos)
    p3.appendChild(p3name)
    p3.appendChild(p3pos)
}

function remove() {
    const anything = document.querySelector('.join');
    anything.remove();
}

function advanced() {
    const anything = document.querySelector(".insertFormHere");

    anything.insertAdjacentHTML('afterend', '<section class="join"></section>');

    const wrapper = document.querySelector(".join");

    const zag = document.createElement('h2');
    zag.className = 'join__header';
    zag.textContent = 'Join Our Advanced Program';

    const text = document.createElement('p');
    text.className = 'join__text';
    text.innerHTML = 'Sed do eiusmod tempor incididunt <br> ut labore et dolore magna aliqua';

    wrapper.appendChild(zag);
    wrapper.appendChild(text);
    wrapper.appendChild(frm);
    frm.appendChild(inp)
    frm.appendChild(sub)
    
    frm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (localStorage.getItem('email') === null) {
            if (validate(inp.value) === true) {
                let p = new Promise((res, rej) => {
                    setTimeout(() => {
                        res();
                    }, 1000);
                    sub.setAttribute('disabled', 'disabled');
                    sub.style.opacity = "0.5";
                })
                    p.then(() =>{
                        sub.removeAttribute('disabled')
                        sub.style.opacity = "1";
                        localStorage.setItem("email", inp.value);
                        inp.remove();
                        sub.remove();
                        frm.appendChild(sub2)
                        let userInput = {
                            'email': localStorage.getItem('email')
                        };
                        sendRequestPost('POST', url1, userInput);
                })
            }
        }
    });

    sub2.addEventListener('click', (e) => {
        e.preventDefault();
        if (localStorage.getItem('email') !== null) {
            let p = new Promise((res, rej) => {
                setTimeout(() => {
                    res();
                }, 1000);
                sub2.setAttribute('disabled', 'disabled');
                sub2.style.opacity = '0.5';
            })
                .then(() => {
                    sub2.removeAttribute('disabled')
                    sub2.style.opacity = "1";
                    sub2.remove();
                    frm.appendChild(inp);
                    frm.appendChild(sub);
                    localStorage.clear();
                    let userInput = {
                        'email': localStorage.getItem('email')
                    };
                    sendRequestPost('POST', url11, userInput);
                })
        }
    })
}

function standart() {
    const anything = document.querySelector(".insertFormHere");

    anything.insertAdjacentHTML('afterend', '<section class="join"></section>');

    const wrapper = document.querySelector(".join");

    const zag = document.createElement('h2');
    zag.className = 'join__header';
    zag.textContent = 'Join Our Program';

    const text = document.createElement('p');
    text.className = 'join__text';
    text.innerHTML = 'Sed do eiusmod tempor incididunt <br> ut labore et dolore magna aliqua';

    sub2.setAttribute('type', 'submit');
    sub2.setAttribute('value', 'unsubscribe');
    sub2.className = 'join__button2';

    inp.setAttribute('type', 'text');
    inp.setAttribute('name', 'email')
    inp.className = 'join__input';
    inp.setAttribute('placeholder', 'Email');

    sub.setAttribute('type', 'submit');
    sub.setAttribute('value', 'subscribe');
    sub.setAttribute('formaction', 'https://httpbin.org/post');
    sub.setAttribute('formmethod', 'post');
    sub.className = 'join__button';

    frm.setAttribute('action', 'https://httpbin.org/get');
    frm.setAttribute('method', 'get');

    wrapper.appendChild(zag);
    wrapper.appendChild(text);
    wrapper.appendChild(frm);
    frm.appendChild(inp)
    frm.appendChild(sub)
    
    frm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (localStorage.getItem('email') === null) {
            if (validate(inp.value) === true) {
                let p = new Promise((res, rej) => {
                    setTimeout(() => {
                        res();
                    }, 1000);
                    sub.setAttribute('disabled', 'disabled');
                    sub.style.opacity = "0.5";
                })
                    p.then(() =>{
                        sub.removeAttribute('disabled')
                        sub.style.opacity = "1";
                        localStorage.setItem("email", inp.value);
                        inp.remove();
                        sub.remove();
                        frm.appendChild(sub2)
                        let userInput = {
                            'email': localStorage.getItem('email')
                        };
                        sendRequestPost('POST', url1, userInput);
                })
            }
        }
    });

    sub2.addEventListener('click', (e) => {
        e.preventDefault();
        if (localStorage.getItem('email') !== null) {
            let p = new Promise((res, rej) => {
                setTimeout(() => {
                    res();
                }, 1000);
                sub2.setAttribute('disabled', 'disabled');
                sub2.style.opacity = '0.5';
            })
                p.then(() => {
                    sub2.removeAttribute('disabled')
                    sub2.style.opacity = "1";
                    sub2.remove();
                    frm.appendChild(inp);
                    frm.appendChild(sub);
                    localStorage.clear();
                    let userInput = {
                        'email': localStorage.getItem('email')
                    };
                    sendRequestPost('POST', url11, userInput);
                })
        }
    });
}
const url1 = new URL('http://localhost:3000/subscribe');
const url11 = new URL('http://localhost:3000/unsubscribe');

function sendRequestPost (method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }
    
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers:headers
    })
    
    .then(response => {
        if(response.ok){
            console.log(`Post server response status is ${response.ok}`) //eslint-disable-line
            return response.json()
        }
        return response.json().then(error => {
            window.alert(error.error) //eslint-disable-line
        })
    })
}
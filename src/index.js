import { SectionCreatorFactory } from './join-us.js';
import { communitySection } from './join-us.js';
import { sub2 } from './join-us.js';
import { sub } from './join-us.js';
import { inp } from './join-us.js';
import { frm } from './join-us.js';
import './styles/style.css';
import Worker from "worker-loader!./Worker.js";
// import logo1 from './assets/images/your-logo-here.png';
// import logo2 from './assets/images/your-logo-footer.png';

window.addEventListener('load', () => {
    // const bigLogo = document.getElementById('big__logo');
    // const smallLogo = document.getElementById('small__logo');
    // bigLogo.src = logo1;
    // smallLogo.src = logo2;
    const style = 1;
    let page = new SectionCreatorFactory();
    
    // localStorage.clear();
    if (localStorage.getItem('email') !== null) {
        page.create(style)
        inp.remove();
        sub.remove();
        frm.appendChild(sub2)
    } else if (localStorage.getItem('email') === null) {
        page.create(style)
    }

    //creating community section
    const url2 = new URL('http://localhost:3000/community');
    function sendRequestGet(method, url) {
        return fetch(url)
        .then(response => {
            return response.json()
        })
    }
    sendRequestGet('GET', url2)
        .then(data => communitySection(data)) //eslint-disable-line
    
    
    //interacting with web worker
    if(window.Worker) {
        const worker = new Worker("/src/worker.js");

        const readMore = document.querySelector('.app-section__button--read-more');
        const weirdBtn = document.querySelector('.app-section__button--our-culture');
        
        // console.log(readMore) //eslint-disable-line
        // console.log(weirdBtn) //eslint-disable-line
        // console.log(sub) //eslint-disable-line
        

        readMore.addEventListener('click', (event) => {
            let obj = JSON.parse(JSON.stringify(event))
            worker.postMessage(obj)
        });

        weirdBtn.addEventListener('click', (event) => {
            // console.log(event) //eslint-disable-line
            let obj = JSON.parse(JSON.stringify(event))
            worker.postMessage(obj)
        });

        sub.addEventListener('click', (event) => {
            worker.postMessage(inp.value)
            // batch.unshift(inp.value)
            
        });

        worker.onmessage = (e) => {
            console.log(e.data) //eslint-disable-line
        };
    }


    //optimization
    const url = new URL('http://localhost:3000/analytics/performance')
    let navEntries = window.performance.getEntriesByType('navigation'); 
    let resEntries = window.performance.getEntriesByType('resource')
    resEntries.forEach( entry => {
        const size = `${Math.round(entry.encodedBodySize/1024)}Kb`
        // console.log(entry.initiatorType, entry.name, size) //eslint-disable-line
        let obj = [entry.initiatorType, entry.name, size]
        console.log(JSON.stringify(obj)) //eslint-disable-line
        navigator.sendBeacon(url, JSON.stringify(obj))
    })
    navEntries.forEach( entry => {
        // console.log(`Page load speed: ${Math.round(entry.fetchStart)}ms`) //eslint-disable-line
        // console.log(`Fetch load speed to ttfb: ${Math.round(entry.responseStart - entry.requestStart)}ms`) //eslint-disable-line
        let obj = {
            'page-load-speed': Math.round(entry.fetchStart),
            'fetch-load-speed': Math.round(entry.responseStart - entry.requestStart)
        }
        console.log(JSON.stringify(obj)) //eslint-disable-line
        navigator.sendBeacon(url, JSON.stringify(obj))
    })
});
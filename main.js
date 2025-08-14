import './style.css';
import { setupCounter } from './counter.js';

import * as pdfjs from 'pdfjs-dist';
console.log(pdfjs);

const el = document.querySelector('#app');
if(el){
  el.innerHTML = `
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <h1>Hello Vite!</h1>
      <div class="card">
        <button id="counter" type="button"></button>
      </div>
      <p class="read-the-docs">
        Click on the Vite logo to learn more
      </p>
    </div>
  `;
}


setupCounter(document.querySelector('#counter'));

import { getdata } from "./data.js";
let Data = getdata ()

// const form =$('#form').parsley();

// $('#inscription').on('submit', async (e) => {
// e.preventDefault();
// if (!form.isValid()) {
// form.validate();
// return;
// }
// });

const ParametreAI = document.getElementById('PaAI');
const close = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const apiForm = modal.querySelector('form');
const apiInput = document.getElementById('input');
const validation = document.getElementById('validation');
const demo = document.getElementById('demo');

// La fonction storagAPI utilise la variable globale `input`.
globalThis.input = apiInput;

import { openmodal } from "./ui.js"; 
import { closemodal } from "./ui.js"; 
import { demos } from "./ui.js"; 

import { storagAPI } from "./parametre.js";
storagAPI(validation);

apiForm.addEventListener('submit', (event) => {
    event.preventDefault();
    modal.close();
});

openmodal(modal, ParametreAI);
closemodal(modal, close);
demos(modal, demo);

import { donneeForm } from "./util.js";
donneeForm();
 

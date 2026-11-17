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
// const forme = document.getElementById('Form');
const demo = document.getElementById('demo');

import { donneeForm } from "./util.js";
donneeForm ();

import { openmodal } from "./ui.js"; 
import { closemodal } from "./ui.js"; 
import { demos } from "./ui.js"; 

openmodal(modal,ParametreAI)
closemodal(modal,close)
demos(demo)

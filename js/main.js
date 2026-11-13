import { getdata } from "./data.js";
let Data = getdata ()

const form =$('#form').parsley();

$('#inscription').on('submit', async (e) => {
e.preventDefault();
if (!form.isValid()) {
form.validate();
return;
}
});


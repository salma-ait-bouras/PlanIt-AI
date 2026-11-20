export function openmodal(modal , button ) { 
    
    button.addEventListener('click', (e)=> {modal.showModal()})

}

export function closemodal (modal , button){
    button.addEventListener('click', (e)=> {modal.close()})

}

export function demos (button){
    button.addEventListener('click', (e)=> {modal.close()})

}



export function afficherProjets(){
    const projets = JSON.parse(localStorage.getItem("projets") || "[]");
    const conteneur = document.getElementById('projetsUtilisateur')

}
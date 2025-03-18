// * Turns the menu hamburguer into a X

// const menuHamburguer = document.querySelector('.menu-hamburguer');
// menuHamburguer.addEventListener('click', () =>{
//     toggleMenu();
// })

// function toggleMenu(){
//     const nav = document.querySelector('.nav-responsive');
//     menuHamburguer.classList.toggle('change');

//     if(menuHamburguer.classList.contains('change')){
//         nav.style.display = 'block';
//     } else{
//         nav.style.display = 'none';
//     }
// }

// function sendMessage(){
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const phone = document.getElementById("phone").value;
//     const subject = document.getElementById("subject").value;
//     const message = document.getElementById("message").value;
//     const phoneNumber = "5511961212420";

//     if (name && email && phone && subject && message){
//         const whatsappMessage = `Nome: ${name}%0AEmail: ${email}%0ATelefone: ${phone}%0AAssunto: ${subject}%0AMensagem: ${message}`;
//         const whatsappUrl = 'https://wa.me${phoneNumber}?text=${whatsappMessage}';
//         window.open(whatsappUrl, '_blank');
//     } else{
//         alert("Por favor, preencha todos os campos.");
//     }
// }


// Transforma o menu hambúrguer em um X
const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

function sendMessage(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const phoneNumber = "5511961212420";

    if (name && email && phone && subject && message){
        const whatsappMessage = `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nAssunto: ${subject}\nMensagem: ${message}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
    } else{
        alert("Por favor, preencha todos os campos.");
    }
}
/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/


const baseurl = "https://platzi-avo.vercel.app";
const appNode=document.querySelector("#app");

const formatPrice=(price)=>{
    const newPrice=new window.Intl.NumberFormat('en-EN',{
        style:"currency",
        currency:"USD",
    }).format(price)
    return newPrice;
};

//web api ,fetch lo usamos para traer recursos desde una web a nuestro codigo



//conectamos al servidor
window.fetch(`${baseurl}/api/avo`)
//procesamos la respuesta y la convertimos en json
.then(respuesta => respuesta.json())
//con el json ya tenemos la informacion y la usaremos para renderizarla en el browser
.then(respuestajson =>{
    const todositems = [];
    respuestajson.data.forEach(element => {
        
        //creamos imagen,titulo,precio para cada elemento
        const imagen =document.createElement('img');
        imagen.src = `${baseurl}${element.image}`;
        imagen.className="fotito";
        const titulo =document.createElement('h2');
        titulo.textContent = element.name;
        titulo.className="muy-grande";
        const precio =document.createElement('div');
        precio.textContent = formatPrice(element.price);
        precio.className="dinerito";

        const container = document.createElement('div');
        container.classList.add('contenedor');
        container.append(imagen,titulo,precio);
        todositems.push(container);
        
    });
    appNode.append(...todositems);
})
//usaremos la api intl que hace referencia a internaciolanizacion
//se usa para dar formato a fechas o monedas
const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();
const btnesBotones = document.querySelectorAll('.card .btn')

const carritoObjetos = {
    
};

const agregarAlcarrito = (e)  =>{
   

   const producto = {
       titulo: e.target.dataset.fruta,
       id: e.target.dataset.fruta,
       cantidad: 1
   }

   if(carritoObjetos.hasOwnProperty(producto.titulo)) {
       producto.cantidad = carritoObjetos[producto.titulo].cantidad + 1
   }


   carritoObjetos[producto.titulo] = producto

   pintarCarrito()
}

const pintarCarrito =  () => {


    carrito.textContent = "";

    Object.values(carritoObjetos).forEach(item =>{
        const clone= template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent = item.titulo;
        clone.querySelector('.badge').textContent = item.cantidad

        fragment.appendChild(clone)
    })


  carrito.appendChild(fragment)
}

btnesBotones.forEach((btn) =>{
    return btn.addEventListener("click",agregarAlcarrito)
});
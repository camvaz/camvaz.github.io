function addEvent(elemento,nomevento,funcion,captura)
{
  if (elemento.attachEvent)
  {
    elemento.attachEvent('on'+nomevento,funcion);
    return true;
  }
  else  
    if (elemento.addEventListener)
    {
      elemento.addEventListener(nomevento,funcion,captura);
      return true;
    }
    else
      return false;
}

addEvent(window,'load',inicializar,false);

function inicializar(){
    document.getElementById("cantidadgalleta").innerHTML =  `Stock: ${productos[0].cantidad}`;
    document.getElementById("cantidadLeche").innerHTML =    `Stock: ${productos[1].cantidad}`;
    document.getElementById("cantidadHuevo").innerHTML =    `Stock: ${productos[2].cantidad}`;
    document.getElementById("cantidadCafe").innerHTML =     `Stock: ${productos[3].cantidad}`;
    document.getElementById("cantidadcerveza").innerHTML =  `Stock: ${productos[4].cantidad}`;
    document.getElementById("cantidadvino").innerHTML =     `Stock: ${productos[5].cantidad}`;

    document.getElementById("numGalleta").addEventListener('input',actualizaStockGalleta,false);
    document.getElementById("numLeche").addEventListener('input',actualizaStockLeche,false);
    document.getElementById("numHuevo").addEventListener('input',actualizaStockHuevo,false);
    document.getElementById("numCafe").addEventListener('input',actualizaStockCafe,false);
    document.getElementById("numCerveza").addEventListener('input',actualizaStockCerveza,false);
    document.getElementById("numVino").addEventListener('input',actualizaStockVino,false);
    document.getElementById("cart").addEventListener('click', llenarCarrito, false);    
    document.getElementById("close").addEventListener('click', cierraTienda, false);    

    document.getElementById("numGalleta").value = 0; 
    document.getElementById("numLeche").value = 0;
    document.getElementById("numHuevo").value = 0;
    document.getElementById("numCafe").value = 0;
    document.getElementById("numCerveza").value = 0; 
    document.getElementById("numVino").value = 0;
}

function cierraTienda(){
    document.getElementById("modalbody").innerHTML = `<p>Ganancia: ${productos[6]}</p>`
}

function llenarCarrito(){
    if(productos[0].cantidad == 0 && productos[1].cantidad == 0 && productos[2].cantidad == 0
        && productos[3].cantidad ==0 && productos[4].cantidad == 0 &&productos[5].cantidad==0){
            alert(`Tienda vacia, ganancia: ${productos[6]}`);
    }else{
        let numg = document.getElementById("numGalleta").value
        productos[0].cantidad-=numg;

        let numl = document.getElementById("numLeche").value
        productos[1].cantidad-=numl;

        let numh = document.getElementById("numHuevo").value
        productos[2].cantidad-=numh;

        let numca = document.getElementById("numCafe").value
        productos[3].cantidad-=numca;

        let numce = document.getElementById("numCerveza").value
        productos[4].cantidad-=numce;

        let numv = document.getElementById("numVino").value
        productos[5].cantidad-=numv;

        let total = 0;
        let ticket = ``;

        ticket +=`<h4 class="card-title text-primary"><strong>Carrito</strong></h4>`;
        if(numg>0){
            ticket+=`<small>Galletas ${numg}x: $${numg*productos[0].precio}</small><br>`;
            total+=numg*productos[0].precio;
        }
        if(numl>0){
            ticket+=`<small>Leche: ${numl}x</small><br>`;
            total+=numl*productos[1].precio;
        }
        if(numh>0){
            ticket+=`<small>Huevos: ${numh}x</small><br>`;
            total+=numh*productos[2].precio;
        }
        if(numca>0){
            ticket+=`<small>Cafe: ${numca}x</small><br>`;
            total+=numca*productos[3].precio;
        }
        if(numce>0){
            ticket+=`<small>Cerveza: ${numce}x</small><br>`;
            total+=numce*productos[4].precio;
        }
        if(numv>0){
            ticket+=`<small>Vino: ${numv}x</small><br>`;
            total+=numv*productos[5].precio;
        }

        productos[6] += total;
        ticket+=`<br><small class="text-black">Importe: $ ${total}</small>`
        ticket+=`<br><small class="text-black">IVA: $ ${total * 0.15}</small>`   
        ticket+=`<br><small class="text-black">Total: $ ${total + total * 0.15}</small>`   
        ticket+=`<form class="md-form form-inline"><input type="number" min="1" id="cobro" placeholder="Escriba cobro..." class=" mx-auto form-control mb-0"></form>`
        ticket+=`<button type="button" id="pay" class="btn btn-info text-white waves-effect mt-0 mb-4"><i class="fa fa-dollar-sign mr-1"></i>Cobrar</button>`

        document.getElementById("tarcarrito").innerHTML= ticket;
        document.getElementById("carrito").hidden = false
        document.getElementById("pay").addEventListener('click', function(){ 
            let cambio = document.getElementById("cobro").value - total;
            document.getElementById("tarcarrito").innerHTML+=`<p> Cambio: $${cambio}</p>`
            
        }, false);

        document.getElementById("numGalleta").value = 0; 
        document.getElementById("numLeche").value = 0;
        document.getElementById("numHuevo").value = 0;
        document.getElementById("numCafe").value = 0;
        document.getElementById("numCerveza").value = 0; 
        document.getElementById("numVino").value = 0;

        document.getElementById("cantidadgalleta").innerHTML =  `Stock: ${productos[0].cantidad}`;
        document.getElementById("cantidadLeche").innerHTML =    `Stock: ${productos[1].cantidad}`;
        document.getElementById("cantidadHuevo").innerHTML =    `Stock: ${productos[2].cantidad}`;
        document.getElementById("cantidadCafe").innerHTML =     `Stock: ${productos[3].cantidad}`;
        document.getElementById("cantidadcerveza").innerHTML =  `Stock: ${productos[4].cantidad}`;
        document.getElementById("cantidadvino").innerHTML =     `Stock: ${productos[5].cantidad}`;

    }


}

function actualizaStockGalleta(){
    let j= productos[0].cantidad-this.value;
    document.getElementById("cantidadgalleta").innerHTML = `Stock: ${j}`;
}   

function actualizaStockLeche(){
    let j= productos[1].cantidad-this.value;
    document.getElementById("cantidadLeche").innerHTML = `Stock: ${j}`;
}   

function actualizaStockHuevo(){
    let j= productos[2].cantidad-this.value;
    document.getElementById("cantidadHuevo").innerHTML = `Stock: ${j}`;
}   

function actualizaStockCafe(){
    let j= productos[3].cantidad-this.value;
    document.getElementById("cantidadCafe").innerHTML = `Stock: ${j}`;
}   

function actualizaStockCerveza(){
    let j= productos[4].cantidad-this.value;
    document.getElementById("cantidadcerveza").innerHTML = `Stock: ${j}`;
}   

function actualizaStockVino(){
    let j= productos[5].cantidad-this.value;
    document.getElementById("cantidadvino").innerHTML = `Stock: ${j}`;
}   

function cambio(tot,total){
    console.log(total);
    let cambio = this.value - total;
    document.getElementById("tarcarrito").innerHTML+=`<p> Cambio: ${cambio}</p>`
}

let productos = [
    {
        nombre:"Galletas",
        precio:12.50,
        cantidad: 12
    },
    {
        nombre:"Leche",
        precio:15.00,
        cantidad: 20
    },
    {
        nombre:"Huevo",
        precio: 4,
        cantidad: 32 
    },
    {
        nombre:"Cafe",
        precio:18,
        cantidad: 20
    },
    {
        nombre:"Cerveza",
        precio:18,
        cantidad:50
    },
    {
        nombre:"Vino",
        precio:100,
        cantidad:22
    },
    0
];


class Administrador{
    constructor(x){
        
    }
}
// variables globales 
let pizzaSeleccionada = document.getElementById('sabor-pizza');
let pizzaCantidad = document.getElementById('cantidad-pizza');
let ctnPizzaSeleccionada = document.querySelector('.pizza-seleccionada');
let cuadroPago = document.querySelector('.cuadro-pago');
let precioCantidad = document.querySelector('.precio-cantidad');
let precioTotal = document.querySelector('.total-cantidad');

/* Ingredientes extra */
let extraQueso = document.getElementById('extra-queso'),
    extraPinneapleMango = document.getElementById('pineapple-mango'),
    costillas = document.getElementById('costillas');

/* Cantidad Ingredientes Extra */
let cantidadQueso = document.getElementById('num-extraqueso'),
    cantidadPineapple = document.getElementById('num-extrapineapple'),
    cantidadCostillas = document.getElementById('num-extracostillas');

/* contenedores ingredientes extra */
let ctnExtraQueso = document.querySelector('.extra-queso'),
    ctnExtraPineapple = document.querySelector('.extrapineapple'),
    ctnExtraCostillas = document.querySelector('.costillas');

/* Contenedores precio ingredientes extra */
let ctnCantidadQueso = document.querySelector('.precio-cantidad.preing.paq-queso'),
     ctnCantidadPineapple = document.querySelector('.precio-cantidad.preing.paq-pineapple'),
     ctnCantidadCostillas = document.querySelector('.precio-cantidad.preing.paq-costillas');

/* paquetes extra */
let refresco = document.getElementById('refresco'),
    donas = document.getElementById('donas'),
    chocolate = document.getElementById('chocolate'),
    payFresa = document.getElementById('payfresa');

/* Cantidad Paquetes Extra */
let cantidadRefresco = document.getElementById('cantidad-refresco'),
     cantidadDonas = document.getElementById('cantidad-donas'),
     cantidadChocolate = document.getElementById('cantidad-chocolate'),
     cantidadPay = document.getElementById('cantidad-pay');

/* contenedores paquetes extra */
let ctnRefresco = document.querySelector('.refresco'),
    ctnDonas = document.querySelector('.donas'),
    ctnChocolate = document.querySelector('.chocolate'),
    ctnPayFresa = document.querySelector('.payfresa');

/* Contenedores precio paquetes extra */
let ctnCantidadRefresco = document.querySelector('.precio-cantidad.paq-extra.paq-refreso');
let ctnCantidadDonas = document.querySelector('.precio-cantidad.paq-extra.paq-donas');
let ctnCantidadChocolate = document.querySelector('.precio-cantidad.paq-extra.paq-chocolate');
let ctnCantidadPay = document.querySelector('.precio-cantidad.paq-extra.paq-pay')

/* Arreglo de ingredientes extra */ 
let arregloIngredientesExtra = [];
/* Arreglo de paquetes extra */
let arregloPaquetesExtra = [];

/* detectar sabor de pizza */
pizzaSeleccionada.addEventListener('change', pizzaCantidadSabor)

function pizzaCantidadSabor() {
     let imagen;
     imagen = document.createElement('img');
     if (ctnPizzaSeleccionada.childNodes.length >= 2) {
          // console.log(ctnPizzaSeleccionada.childNodes)
          ctnPizzaSeleccionada.removeChild(ctnPizzaSeleccionada.childNodes[1])
     }
     if (pizzaSeleccionada.value === 'hawaiana') {
          imagen.setAttribute('src', 'img/pizzahawaiana.png');
          imagen.setAttribute('alt', 'pizza-hawaiana')
     } else if (pizzaSeleccionada.value === 'pepperoni') {
          imagen.setAttribute('src', 'img/pizzapepperoni.png');
          imagen.setAttribute('alt', 'pizza-pepperoni')
     } else if (pizzaSeleccionada.value === 'vegetales') {
          imagen.setAttribute('src', 'img/pizzaveggie.png');
          imagen.setAttribute('alt', 'pizza-veggie')
     } else if (pizzaSeleccionada.value === 'mexicana') {
          imagen.setAttribute('src', 'img/pizzamexicana.png');
          imagen.setAttribute('alt', 'pizza-mexicana')
     } else if (pizzaSeleccionada.value === 'camaron') {
          imagen.setAttribute('src', 'img/pizzacamaron.png');
          imagen.setAttribute('alt', 'pizza-camaron')
     } else if  (pizzaSeleccionada.value === 'serrano') {
          imagen.setAttribute('src', 'img/pizzaserrano.png');
          imagen.setAttribute('alt', 'pizza-serrano')
     }
     ctnPizzaSeleccionada.appendChild(imagen)
     setTimeout(() => {
          cuadroPago.style.opacity = '1';
     }, 500)

     pizzaCantidad.addEventListener('change', conteoPizzas)
     extraQueso.addEventListener('change', ingredienteExtraQueso)
     extraPinneapleMango.addEventListener('change', ingredientePineappleMango)
     costillas.addEventListener('change', ingredienteCostillas)
     refresco.addEventListener('change', paqueteRefresco)
     donas.addEventListener('change', paqueteDonas)
     chocolate.addEventListener('change', paqueteChocolate)
     payFresa.addEventListener('change', paquetePay)
}

/* detectar si se escoge un ingrediente extra */

function ingredienteExtraQueso(e) {
     let precioExtraQueso;
     let imagen;
     imagen = document.createElement('img');
     if (extraQueso.checked) {
          /*  Aquí */
          cantidadQueso.setAttribute('max', pizzaCantidad.value)
          if (parseInt(cantidadQueso.value) === 1) {
               precioExtraQueso = 40;
               arregloIngredientesExtra.push(precioExtraQueso);
               calcularPrecioTotal()
         }
         /* Condicional para validar que se compre dos pizzas y se habilite la cantidad de extra queso */
         /* Obtener atributo de pizzas máximas */
         if (parseInt(pizzaCantidad.value) > 1) {
               cantidadQueso.setAttribute('max', pizzaCantidad.value)
               cantidadQueso.getAttribute('max')

               cantidadQueso.addEventListener('change', () => {
                    cantidadExtraQueso = parseInt(cantidadQueso.value);
                    if (cantidadExtraQueso === 1) {
                    precioExtraQueso = 40;
                    if (arregloIngredientesExtra.length > 1) {
                         const posicion = (index) => index == precioExtraQueso + 40;
                         let foundIndex = arregloIngredientesExtra.findIndex(posicion);
                         arregloIngredientesExtra.splice(foundIndex, 1, precioExtraQueso);
                    } else {
                         arregloIngredientesExtra.splice(0, 1, precioExtraQueso);
                    }    
                    } else {
                    precioExtraQueso = 40 * cantidadExtraQueso;
                    if (arregloIngredientesExtra.length > 1) {
                         // findIndex()
                         const posicion = (index) => index == 40 || index == precioExtraQueso - 40 || index == precioExtraQueso + 40;
                         let foundIndex = arregloIngredientesExtra.findIndex(posicion);
                         arregloIngredientesExtra.splice(foundIndex, 1, precioExtraQueso);
                    } else {
                         arregloIngredientesExtra.splice(0, 1, precioExtraQueso);
                    }
                    }
                    ctnCantidadQueso.innerHTML = '$ ' + precioExtraQueso;
                    calcularPrecioTotal()
               })
         } 
          /* Hasta aquí */
          imagen.setAttribute('src', 'img/extra-queso2.png');
          imagen.setAttribute('alt', 'extra-queso');
          ctnExtraQueso.appendChild(imagen);

     } else {
          // console.log(ctnExtraQueso.childNodes)
          precioExtraQueso = parseInt(ctnCantidadQueso.innerHTML.split(' ')[1]);
          if (arregloIngredientesExtra.length > 1) {
               const precioRemovido = arregloIngredientesExtra.filter( precio => precio !== precioExtraQueso);
               arregloIngredientesExtra = precioRemovido;
          } else {
               arregloIngredientesExtra.splice(0, 1);
          }
          
          cantidadQueso.value = 1;
          ctnCantidadQueso.innerHTML = '$ ' + 40;
          ctnExtraQueso.removeChild(ctnExtraQueso.childNodes[1])
          calcularPrecioTotal();
     }
}

function ingredientePineappleMango(e) {
     let precioExtraPineapple;
     let imagen;
     imagen = document.createElement('img');
     if (extraPinneapleMango.checked) {

          /* Aquí */
          cantidadPineapple.setAttribute('max', pizzaCantidad.value)
          if (parseInt(cantidadPineapple.value) === 1) {
               precioExtraPineapple = 45;
               arregloIngredientesExtra.push(precioExtraPineapple);
               calcularPrecioTotal()
         }
         
         if (parseInt(pizzaCantidad.value) > 1) {
               cantidadPineapple.setAttribute('max', pizzaCantidad.value)
               cantidadPineapple.getAttribute('max')

               cantidadPineapple.addEventListener('change', () => {
                    cantidadExtraPineapple = parseInt(cantidadPineapple.value);
                    if (cantidadExtraPineapple === 1) {
                    precioExtraPineapple = 45;
                         if (arregloIngredientesExtra.length > 1) {
                              const posicion = (index) => index == precioExtraPineapple + 45;
                              let foundIndex = arregloIngredientesExtra.findIndex(posicion);
                              arregloIngredientesExtra.splice(foundIndex, 1, precioExtraPineapple);
                         } else {
                              arregloIngredientesExtra.splice(0, 1, precioExtraPineapple);
                         }    
                    } else {

                    precioExtraPineapple = 45 * cantidadExtraPineapple;
                         if (arregloIngredientesExtra.length > 1) {
                              // findIndex()
                              const posicion = (index) => index == 45 || index == precioExtraPineapple - 45 || index == precioExtraPineapple + 45;
                              let foundIndex = arregloIngredientesExtra.findIndex(posicion);
                              arregloIngredientesExtra.splice(foundIndex, 1, precioExtraPineapple);
                         } else {
                              arregloIngredientesExtra.splice(0, 1, precioExtraPineapple);
                         }
                    }
                    ctnCantidadPineapple.innerHTML = '$ ' + precioExtraPineapple;
                    calcularPrecioTotal()
               })
         } 

          /* Hasta aquí */ 
           imagen.setAttribute('src', 'img/pineappleextra.png');
           imagen.setAttribute('alt', 'pineapple');
           ctnExtraPineapple.appendChild(imagen);
           
     } else {
          
          precioExtraPineapple = parseInt(ctnCantidadPineapple.innerHTML.split(' ')[1]);
          if (arregloIngredientesExtra.length > 1) {
               const precioRemovido = arregloIngredientesExtra.filter( precio => precio !== precioExtraPineapple);
               arregloIngredientesExtra = precioRemovido;
          } else {
               arregloIngredientesExtra.splice(0, 1);
          }

          cantidadPineapple.value = 1;
          ctnCantidadPineapple.innerHTML = '$ ' + 45;
          ctnExtraPineapple.removeChild(ctnExtraPineapple.childNodes[1])
          calcularPrecioTotal();
     }
}

function ingredienteCostillas(e) {
     let precioExtraCostillas;
     let imagen;
     imagen = document.createElement('img');
     if (costillas.checked) {
          /* Aquí */
          cantidadCostillas.setAttribute('max', pizzaCantidad.value)
          if (parseInt(cantidadPineapple.value) === 1) {
               precioExtraCostillas = 50;
               arregloIngredientesExtra.push(precioExtraCostillas);
               calcularPrecioTotal()
         }
         
         if (parseInt(pizzaCantidad.value) > 1) {
               cantidadCostillas.setAttribute('max', pizzaCantidad.value)
               cantidadCostillas.getAttribute('max')

               cantidadCostillas.addEventListener('change', () => {
                    cantidadExtraCostillas = parseInt(cantidadCostillas.value);
                    if (cantidadExtraCostillas === 1) {
                         precioExtraCostillas = 50;
                         if (arregloIngredientesExtra.length > 1) {
                              const posicion = (index) => index == precioExtraCostillas + 50;
                              let foundIndex = arregloIngredientesExtra.findIndex(posicion);
                              arregloIngredientesExtra.splice(foundIndex, 1, precioExtraCostillas);
                         } else {
                              arregloIngredientesExtra.splice(0, 1, precioExtraCostillas);
                         }    
                    } else {

                    precioExtraCostillas = 50 * cantidadExtraCostillas;
                         if (arregloIngredientesExtra.length > 1) {
                              // findIndex()
                              const posicion = (index) => index == 50 || index == precioExtraCostillas - 50 || index == precioExtraCostillas + 50;
                              let foundIndex = arregloIngredientesExtra.findIndex(posicion);
                              arregloIngredientesExtra.splice(foundIndex, 1, precioExtraCostillas);
                         } else {
                              arregloIngredientesExtra.splice(0, 1, precioExtraCostillas);
                         }
                    }
                    ctnCantidadCostillas.innerHTML = '$ ' + precioExtraCostillas;
                    calcularPrecioTotal()
               })
          } 

          /* Hasta aquí */ 
           imagen.setAttribute('src', 'img/costillas.png');
           imagen.setAttribute('alt', 'costillas');
           ctnExtraCostillas.appendChild(imagen);

     } else {

          precioExtraCostillas = parseInt(ctnCantidadCostillas.innerHTML.split(' ')[1]);
          if (arregloIngredientesExtra.length > 1) {
               const precioRemovido = arregloIngredientesExtra.filter( precio => precio !== precioExtraCostillas);
               arregloIngredientesExtra = precioRemovido;
          } else {
               arregloIngredientesExtra.splice(0, 1);
          }

          cantidadCostillas.value = 1;
          ctnCantidadCostillas.innerHTML = '$ ' + 50;
          ctnExtraCostillas.removeChild(ctnExtraCostillas.childNodes[1])
          calcularPrecioTotal();
     }
}

/* detectar si se escoge un paquete extra */

function paqueteRefresco() {
     let imagen;
     imagen = document.createElement('img');
     if (refresco.checked) {
          if ( parseInt(cantidadRefresco.value) === 1) {
                precioExtraRefresco = 40;
                arregloPaquetesExtra.push(precioExtraRefresco);
                calcularPrecioTotal()
          } 
          cantidadRefresco.addEventListener('change', () => {
            /* Aquí */ 
            /* Index of */
            cantidadExtraRefresco = parseInt(cantidadRefresco.value);
            if (cantidadExtraRefresco === 1) {
                precioExtraRefresco = 40;
               if (arregloPaquetesExtra.length > 1) {
                    const posicion = (index) => index == precioExtraRefresco + 40;
                    let refrescoIndex = arregloPaquetesExtra.findIndex(posicion);
                    arregloPaquetesExtra.splice(refrescoIndex, 1, precioExtraRefresco);
                     // arregloPaquetesExtra.splice(0, 1, precioExtraRefresco);
               } else {
                    arregloPaquetesExtra.splice(0, 1, precioExtraRefresco);
               }    
            } else {
                precioExtraRefresco = 40 * cantidadExtraRefresco;
                if (arregloPaquetesExtra.length > 1) {
                     // findIndex()
                    //  console.log(cantidadExtraRefresco);
                    //  console.log(precioExtraRefresco);
                     const posicion = (index) => index == 40 || index == precioExtraRefresco - 40 || index == precioExtraRefresco + 40;
                     let refrescoIndex = arregloPaquetesExtra.findIndex(posicion);
                     arregloPaquetesExtra.splice(refrescoIndex, 1, precioExtraRefresco);
               } else {
                     arregloPaquetesExtra.splice(0, 1, precioExtraRefresco);
               }
            }
               
                ctnCantidadRefresco.innerHTML = '$ ' + precioExtraRefresco;
                calcularPrecioTotal()
          })
          imagen.setAttribute('src', 'img/refresco.png');
          imagen.setAttribute('alt', 'refresco');
          
          ctnRefresco.appendChild(imagen);
     } else {

          precioExtraRefresco = parseInt(ctnCantidadRefresco.innerHTML.split(' ')[1]);
          if (arregloPaquetesExtra.length > 1) {
               const precioRemovido = arregloPaquetesExtra.filter( precio => precio !== precioExtraRefresco);
               arregloPaquetesExtra = precioRemovido;
          } else {
               arregloPaquetesExtra.splice(0, 1);
          }
          ctnRefresco.removeChild(ctnRefresco.childNodes[1]);
          cantidadRefresco.value = 1;
          ctnCantidadRefresco.innerHTML = '$ ' + 40;
          calcularPrecioTotal()
     }
}

function paqueteDonas() {
     let precioExtraDonas;
     let imagen;
     imagen = document.createElement('img');
     if (donas.checked) {
          if ( parseInt(cantidadDonas.value) === 1) {
               precioExtraDonas = 35;
               arregloPaquetesExtra.push(precioExtraDonas);
               calcularPrecioTotal()
         } 
          cantidadDonas.addEventListener('change', () => {
               cantidadExtraDonas = parseInt(cantidadDonas.value);
               if (cantidadExtraDonas === 1) {
                    precioExtraDonas = 35;
                    if (arregloPaquetesExtra.length > 1) {
                         const posicion = (index) => index == precioExtraDonas + 35;
                         let donasIndex = arregloPaquetesExtra.findIndex(posicion);
                         arregloPaquetesExtra.splice(donasIndex, 1, precioExtraDonas);
                          // arregloPaquetesExtra.splice(0, 1, precioExtraRefresco);
                    } else {
                         arregloPaquetesExtra.splice(0, 1, precioExtraDonas);
                    }
               } else {
                    precioExtraDonas = 35 * cantidadExtraDonas;
                    if (arregloPaquetesExtra.length > 1) {
                         const posicion = (index) => index == 35 || index == precioExtraDonas - 35 || index == precioExtraDonas + 35;
                         let donasIndex = arregloPaquetesExtra.findIndex(posicion);
                         arregloPaquetesExtra.splice(donasIndex, 1, precioExtraDonas);
                   } else {
                         arregloPaquetesExtra.splice(0, 1, precioExtraDonas);
                   }
               }
                   
                    ctnCantidadDonas.innerHTML = '$ ' + precioExtraDonas;
                    calcularPrecioTotal()
         })
          imagen.setAttribute('src', 'img/donnut.png');
          imagen.setAttribute('alt', 'donas');
          ctnDonas.appendChild(imagen);
          
     } else {
          precioExtraDonas = parseInt(ctnCantidadDonas.innerHTML.split(' ')[1]);
          if (arregloPaquetesExtra.length > 1) {
               const precioRemovido = arregloPaquetesExtra.filter( precio => precio !== precioExtraDonas);
               arregloPaquetesExtra = precioRemovido;
          } else {
               arregloPaquetesExtra.splice(0, 1);
          }
          ctnDonas.removeChild(ctnDonas.childNodes[1]);
          cantidadDonas.value = 1;
          ctnCantidadDonas.innerHTML = '$ ' + 35;
          calcularPrecioTotal()
     }
}

function paqueteChocolate() {
     let precioExtraChocolate;
     let imagen;
     imagen = document.createElement('img');
     if (chocolate.checked) {
          if (parseInt(cantidadChocolate.value) === 1) {
               precioExtraChocolate = 25;
               arregloPaquetesExtra.push(precioExtraChocolate);
               calcularPrecioTotal()
         } 
          cantidadChocolate.addEventListener('change', () => {
               /* Aquí */ 
               cantidadExtraChocolate = parseInt(cantidadChocolate.value);
               if (cantidadExtraChocolate === 1) {
                    precioExtraChocolate = 25;
                    if (arregloPaquetesExtra.length > 1) {
                         const posicion = (index) => index == precioExtraChocolate + 25;
                         let chocolateIndex = arregloPaquetesExtra.findIndex(posicion);
                         arregloPaquetesExtra.splice(chocolateIndex, 1, precioExtraChocolate);
                    } else {
                         arregloPaquetesExtra.splice(0, 1, precioExtraChocolate);
                    }
               } else {
                    precioExtraChocolate = 25 * cantidadExtraChocolate;
                    if (arregloPaquetesExtra.length > 1) {
                         const posicion = (index) => index == 25 || index == precioExtraChocolate - 25 || index == precioExtraChocolate + 25;
                         let chocolateIndex = arregloPaquetesExtra.findIndex(posicion);
                         arregloPaquetesExtra.splice(chocolateIndex, 1, precioExtraChocolate);
                   } else {
                         arregloPaquetesExtra.splice(0, 1, precioExtraChocolate);
                   }
               }
               ctnCantidadChocolate.innerHTML = '$ ' + precioExtraChocolate;
               calcularPrecioTotal()
               /* Aquí */
         })
          imagen.setAttribute('src', 'img/chocolate.png');
          imagen.setAttribute('alt', 'chocolate');
          ctnChocolate.appendChild(imagen);
          
     } else {
          precioExtraChocolate = parseInt(ctnCantidadChocolate.innerHTML.split(' ')[1]);
          if (arregloPaquetesExtra.length > 1) {
               const precioRemovido = arregloPaquetesExtra.filter( precio => precio !== precioExtraChocolate);
               arregloPaquetesExtra = precioRemovido;
          } else {
               arregloPaquetesExtra.splice(0, 1);
          }
          ctnChocolate.removeChild(ctnChocolate.childNodes[1]);
          cantidadChocolate.value = 1;
          ctnCantidadChocolate.innerHTML = '$ ' + 25;
          calcularPrecioTotal()
     }
}

function paquetePay() {
     let precioExtraPay;
     let imagen;
     imagen = document.createElement('img');
     if (payFresa.checked) {
          if (parseInt(cantidadPay.value) === 1) {
               precioExtraPay = 30;
               arregloPaquetesExtra.push(precioExtraPay);
               calcularPrecioTotal()
         }
          cantidadPay.addEventListener('change', () => {
               cantidadExtraPay = parseInt(cantidadPay.value);
               /* Aquí */
               if (cantidadExtraPay === 1) {
                    precioExtraPay = 30;
                    if (arregloPaquetesExtra.length > 1) {
                         const posicion = (index) => index == precioExtraPay + 30;
                         let payIndex = arregloPaquetesExtra.findIndex(posicion);
                         arregloPaquetesExtra.splice(payIndex, 1, precioExtraPay);
                    } else {
                         arregloPaquetesExtra.splice(0, 1, precioExtraPay);
                    }
               } else {
                    precioExtraPay = 30 * cantidadExtraPay;
                    if (arregloPaquetesExtra.length > 1) {
                         const posicion = (index) => index == 30 || index == precioExtraPay - 30 || index == precioExtraPay + 30;
                         let payIndex = arregloPaquetesExtra.findIndex(posicion);
                         arregloPaquetesExtra.splice(payIndex, 1, precioExtraPay);
                   } else {
                         arregloPaquetesExtra.splice(0, 1, precioExtraPay);
                   }
               }
               /* Aquí */
               ctnCantidadPay.innerHTML = '$ ' + precioExtraPay;
               calcularPrecioTotal()
         })
          imagen.setAttribute('src', 'img/payfresa.png');
          imagen.setAttribute('alt', 'payfresa');
          ctnPayFresa.appendChild(imagen);   
     } else {
          precioExtraPay = parseInt(ctnCantidadPay.innerHTML.split(' ')[1]);
          // console.log(precioExtraPay);
          if (arregloPaquetesExtra.length > 1) {
               const precioRemovido = arregloPaquetesExtra.filter( precio => precio !== precioExtraPay);
               arregloPaquetesExtra = precioRemovido;
          } else {
               arregloPaquetesExtra.splice(0, 1);
          }
          ctnPayFresa.removeChild(ctnPayFresa.childNodes[1]);
          cantidadPay.value = 1;
          ctnCantidadPay.innerHTML = '$ ' + 30;
          calcularPrecioTotal()
     }
}


/* functión para contar pizzas */

function conteoPizzas() {
     let precioUnidad = 220;
     let cantidadTemporal = parseInt(pizzaCantidad.value)
     // console.log(precioUnidad, cantidadTemporal)
     precioCantidad.innerHTML = (precioUnidad * cantidadTemporal);
     calcularPrecioTotal()
}

function calcularPrecioTotal() {
     // console.log(arregloPreciosExtra)
     if (arregloIngredientesExtra.length > 0 ) {
          let sumador = (total, actual) => total + actual;
          let ingredientesExtra = arregloIngredientesExtra.reduce(sumador);
          precioTotal.innerHTML = '$' + (parseInt(precioCantidad.innerHTML) + ingredientesExtra); 

          if (arregloPaquetesExtra.length > 0) {
               // console.log(arregloPaquetesExtra);
               let sumadorPaquetes = (total, actual) => total + actual;
               let paquetesExtra = arregloPaquetesExtra.reduce(sumadorPaquetes);
               // console.log(paquetesExtra);
               precioTotal.innerHTML = '$' + (parseInt(precioCantidad.innerHTML) + ingredientesExtra + paquetesExtra);
          }     

     } else if (arregloPaquetesExtra.length > 0) {
          let sumadorPaquetes = (total, actual) => total + actual;
          let paquetesExtra = arregloPaquetesExtra.reduce(sumadorPaquetes);
          precioTotal.innerHTML = '$' + (parseInt(precioCantidad.innerHTML) + paquetesExtra);
     } else {
          precioTotal.innerHTML = '$' + parseInt(precioCantidad.innerHTML);
     }
}


          
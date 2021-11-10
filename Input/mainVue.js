
const app = new Vue({
    el: '#app',
    data: {
        products: [
           {
               id:1,
               name:'camiseta',
               quantity:2,
           },
           {    
               id:2,
               name:'botas',
               quantity:0,
            },
           {
                id:3,
               name:'americana',
               quantity:1,
           },
           {
                id:4,
               name:'pantalon tejano',
               quantity:4,
           }
        
        ]
        },
//creamos propiedad calculadora que regrese la cantidad de nuestros productos (metodo reduce de js)
        computed: {
            totalProducts(){
                return this.products.reduce((sum, product)=>{
                    return sum + product.quantity
                }, 0)
            }
        }
        
        });


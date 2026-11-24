// Mike
const eur = new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" });
const gastos=[]
class Gasto{
    constructor(concepto,importe,categoria){
        this.concepto=concepto;
        this.importe=importe;
        this.categoria=categoria
        this.esAlto= (importe>=50)
    }
    formatear(){
        return `[${this.categoria}] Concepto- ${eur.format(this.importe,2)}`
    }

}
   
document.addEventListener("DOMContentLoaded", () => {
    const formulario=document.getElementById("gastoForm")
    const listaGastos=document.getElementById("listaGastos")
    const gasto = new Gasto("lineas");
    const totalGastos=document.getElementById("totalGastos")
    const CLAVE_HISTORIAL = "gasticos";
    function renderizarGastos(){
        listaGastos.innerHTML = "";
        const lista = leerGastos();
        lista.forEach(ins => {
            const li = document.createElement("li");
            const gasto=new Gasto(ins.concepto.value,ins.importe.value,ins.categoria.value)
            if (gasto.esAlto){
                li.className="gasto-alto"
            }
            li.textContent = ins.formatear();
            listaGastos.append(li);
        });
    } 
    function leerGastos() {
        try {
            const raw = localStorage.getItem(CLAVE_HISTORIAL);
            if (raw === null) {
                return [];
            }
            return JSON.parse(raw);
        } catch (error) {
            console.error("Error al cargar el historial:", error);
            return []; 
        }
    }
    function guardarEnGastos() {
        const lista = leerGastos();
         const inscripcion = {
            concepto:concepto.value,
            importe:importe.value,
            categoria:categoria.value
        };
        lista.push(inscripcion);
        try {
            localStorage.setItem(CLAVE_HISTORIAL, JSON.stringify(lista));
        } catch (error) {
            console.error("No se ha podido guardar el gasto:", error);
        }
    }    
    function calcularTotal() {
        totalGastos.innerHTML
        let suma=0
        lista=leerGastos()
        lista.forEach(gasto=>{
            suma+=gasto.precio
        })
        totalGastos.innerHTML(eur.format(suma))
        
        
    }
    botonBorrarGastos.addEventListener("click", () => {
        try {
            localStorage.removeItem(CLAVE_HISTORIAL);
        } catch (error) {
            console.error("Error al borrar los gastos:", error);
        }
        pintarGastos(); 
    });
   
    
    
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        const gastitos={
            concepto:concepto.value,
            importe:importe.value,
            categoria:categoria.value
        }
        guardarEnGastos();
        renderizarGastos();
        
        formulario.reset();
        calcularTotal()
    })
    
    renderizarGastos()
})

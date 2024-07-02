//clase reportes, objetos
let clientes = []

class Cliente {
    static id = 0
    constructor (nombre, email, dni, depto, ingresos, montoPrestamo, nroCuotas){
        this.id = ++Cliente.id,
        this.nombre = nombre,
        this.email = email,
        this.dni = dni,
        this.depto = depto,
        this.ingresos = ingresos,
        this.montoPrestamo = montoPrestamo,
        this.nroCuotas = nroCuotas
        this.montoCuotas = this.getMontoCuota()
    }
    getMontoCuota = () => {
        return Number(this.montoPrestamo)/Number(this.nroCuotas)
    }
}


ingresarDatos = (e) => {
    e.preventDefault();
    let ingresarNombre = document.getElementById("nombre").value;
    let ingresarEmail = document.getElementById("email").value;
    let ingresarDni = document.getElementById("dni").value;
    let ingresarDepto = document.getElementById("depto").value;
    let ingresarIngresos = document.getElementById("ingresos").value;
    let ingresarPrestamo = document.getElementById("prestamo").value;
    let ingresarCuotas = document.getElementById("cuotas").value;

    let nuevoCliente = new Cliente(ingresarNombre, ingresarEmail, ingresarDni, ingresarDepto, ingresarIngresos, ingresarPrestamo, ingresarCuotas)
    clientes.push(nuevoCliente)

    mostrarReporte(nuevoCliente)
    // console.log("Funciona")
    // console.log(clientes)
}


function mostrarReporte(Cliente) {
        document.getElementById("reporteCompleto").style.display = "block";

        document.getElementById("reporteNombre").innerHTML = Cliente.nombre;
        document.getElementById("reporteEmail").innerHTML = Cliente.email;
        document.getElementById("reporteDni").innerHTML = Cliente.dni;
        document.getElementById("reporteDepto").innerHTML = Cliente.depto;
        document.getElementById("reporteMonto").innerHTML = Cliente.montoPrestamo;
        document.getElementById("reporteCuotas").innerHTML = Cliente.montoCuotas;
}

let miReporte = document.getElementById("miReporte")
miReporte.addEventListener("submit", ingresarDatos)

document.getElementById("reporteCompleto").style.display = "none"



//Ver todos los reportes


function crearReportes(Cliente) {

    let nuevoDiv = document.createElement("div")
    let valueNombre = document.createElement("p")
    let labelNombre = document.createElement("p")

    let labelParNombre = document.createTextNode("Nombre Cliente")
    let contentParNombre = document.createTextNode(Cliente.nombre)

    labelNombre.appendChild(labelParNombre)
    valueNombre.appendChild(contentParNombre)

    nuevoDiv.appendChild(labelNombre)
    nuevoDiv.appendChild(valueNombre)

    document.getElementById("reporteUsingCreate").appendChild(nuevoDiv)


}

function verTodosLosReportes(){
    document.getElementById("reporteCompleto").style.display = "none";
    clientes.forEach(cliente => {
        
        crearReportes(cliente)
        
    });
}

let verReportes = document.getElementById("todos")
verReportes.addEventListener("click", verTodosLosReportes)


//filtrar 1 reporte




//Guardar reportes

// function guardarReportesLocalStorage(Cliente) {
//    localStorage.
// }



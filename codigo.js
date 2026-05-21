function ingresar() {
    var usuario = document.getElementById("Usuario").value;
    var contraseña = document.getElementById("Contraseña").value;

    if (usuario == "" || contraseña == "") {
        alert("Completá usuario y contraseña");
    } else {
        window.location.href = "rzindex.html";
    }
}

function limpiar() {
    document.getElementById("Usuario").value = "";
    document.getElementById("Contraseña").value = "";
}

function invitado() {
    window.location.href = "rzindex.html";
}

function conocenos() {
    window.location.href = "rzindexinfo.html";
}

function shop() {
    window.location.href = "shop.html";
}

function volver() {
    window.location.href = "index.html";
}

function volvershop() {
    window.location.href = "index.html";
}

function modelo() {
    var marca = document.getElementById("Marca").value;
    var selectModelo = document.getElementById("modelo");
    var opciones = [];

    if (marca == "audi") {
        opciones = ["Q5", "S3", "A3", "RS6"];
    } else if (marca == "volkswagen") {
        opciones = ["Vento", "New Beetle", "Amarok", "Golf GTI"];
    } else if (marca == "renault") {
        opciones = ["Sandero RS", "Megane RS", "Clio", "Fluence GT"];
    } else if (marca == "bmw") {
        opciones = ["M3", "M4", "X6", "Serie 1"];
    } else if (marca == "peugeot") {
        opciones = ["208 GT", "308", "207 CC", "RCZ"];
    }

    selectModelo.innerHTML = "<option value=''>Seleccionar modelo</option>";

    for (var i = 0; i < opciones.length; i++) {
        selectModelo.innerHTML += "<option value='" + opciones[i] + "'>" + opciones[i] + "</option>";
    }
}

function cotizar() {
    var modificacion = document.getElementById("Modificacion").value;
    var resultado = document.getElementById("resultadocoti");
    var precio = 0;

    if (modificacion == "1") {
        precio = 700;
    } else if (modificacion == "2") {
        precio = 1200;
    } else if (modificacion == "3") {
        precio = 1800;
    } else if (modificacion == "4") {
        precio = 600;
    } else if (modificacion == "5") {
        precio = 900;
    }

    resultado.innerHTML = "USD " + precio;
}

function solicitarTurno() {
    var nombre = document.getElementById("Nombre").value;
    var apellido = document.getElementById("Apellido").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("Email").value;
    var dni = document.getElementById("DNI").value;

    if (nombre == "" || apellido == "" || telefono == "" || email == "" || dni == "") {
        alert("Completá todos los datos para solicitar el turno");
    } else {
        alert("Turno solicitado correctamente. Nos vamos a contactar con vos.");
    }
}

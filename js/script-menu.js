function Mostrar() {
    var a = document.getElementById("uno");
    var b = document.getElementById("2");
    var c = document.getElementById("3");
    var d = document.getElementById("4");

    var x = document.getElementsByClassName("contenedor2")[0];
    var y = document.getElementsByClassName("contenedor3")[0];
    var z = document.getElementsByClassName("contenedor4")[0];
    var w = document.getElementsByClassName("contenedor5")[0];
    
    if (x.style.display == "none") {
        a.style.background = "#f57b71";
        b.style.background = "#ffd9b8";
        c.style.background = "#ffd9b8";
        d.style.background = "#ffd9b8";
        x.style.display = "flex";
        y.style.display = "none";
        z.style.display = "none";
        w.style.display = "none";
    }
}

function Mostrar1() {
    var a = document.getElementById("uno");
    var b = document.getElementById("2");
    var c = document.getElementById("3");
    var d = document.getElementById("4");
    var x = document.getElementsByClassName("contenedor2")[0];
    var y = document.getElementsByClassName("contenedor3")[0];
    var z = document.getElementsByClassName("contenedor4")[0];
    var w = document.getElementsByClassName("contenedor5")[0];

    if (y.style.display == "none") {
        a.style.background = "#ffd9b8";
        b.style.background = "#f57b71";
        c.style.background = "#ffd9b8";
        d.style.background = "#ffd9b8";
        x.style.display = "none";
        y.style.display = "flex";
        z.style.display = "none";
        w.style.display = "none";
    }
}

function Mostrar2() {
    var a = document.getElementById("uno");
    var b = document.getElementById("2");
    var c = document.getElementById("3");
    var d = document.getElementById("4");
    var x = document.getElementsByClassName("contenedor2")[0];
    var y = document.getElementsByClassName("contenedor3")[0];
    var z = document.getElementsByClassName("contenedor4")[0];
    var w = document.getElementsByClassName("contenedor5")[0];

    if (z.style.display == "none") {
        a.style.background = "#ffd9b8";
        b.style.background = "#ffd9b8";
        c.style.background = "#f57b71";
        d.style.background = "#ffd9b8";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "flex";
        w.style.display = "none";
    }
}

function Mostrar3() {
    var a = document.getElementById("uno");
    var b = document.getElementById("2");
    var c = document.getElementById("3");
    var d = document.getElementById("4");
    var x = document.getElementsByClassName("contenedor2")[0];
    var y = document.getElementsByClassName("contenedor3")[0];
    var z = document.getElementsByClassName("contenedor4")[0];
    var w = document.getElementsByClassName("contenedor5")[0];

    if (w.style.display == "none") {
        a.style.background = "#ffd9b8";
        b.style.background = "#ffd9b8";
        c.style.background = "#ffd9b8";
        d.style.background = "#f57b71";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        w.style.display = "flex";
    }
}


var numeroCategoria = 0;
var categorias = [null, "9 Gup", "8 Gup", "7 Gup", "6 Gup", "5 Gup", "4 Gup", "3 Gup", "2 Gup", "1 Gup", null, null, "1 Dan", null, null, "2 Dan", null, null, "3 Dan", null, null, "4 Dan", null, "5 Dan", "6 Dan"];
var categoriaSeleccionada = "";
var numeroTul = 0;
var tulSeleccionado = "";
var tules = [null, "Chon-Ji", "Dan-Gun", "Do-San", "Won-Hyo", "Yul-Gok", "Joong-Gun", "Toi-Gye", "Hwa-Rang", "Choong-Moo", "Kwang-Gae", "Po-Eun", "Ge-Baek", "Eui-Am", "Choong-Jang", "Kodan", "Sam-Il", "Yoo-Sin", "Choi-Yong", "Yon-Gae", "Ul-Ji", "Moon-Moo", "So-San", "Se-Jong", "Tong-Il"];

function selCategoria(x){
    numeroCategoria = x;
    categoriaSeleccionada = categorias[x];
    document.getElementById("textoCategoria").innerHTML = "Categoría: " + categoriaSeleccionada;
};

function randomTul(){
    numeroTul = Math.floor(Math.random()*numeroCategoria)+1
    tulSeleccionado = tules[numeroTul]
    document.getElementById("textoTul").innerHTML = "Tul seleccionado: " + tulSeleccionado;
}
function main(){
    alert('Entrando');
    var btn_calcular=document.getElementById("btn_calcular").value;
    var btn_limpiar=document.getElementById("btn_limpiar").value;
    btn_calcular.addEventListener("click", function(){
        let nombre = document.getElementById("nombre").value
        let ap_paterno = document.getElementById("ap_paterno").value;
        let ap_materno = document.getElementById("ap_materno").value;
        // alert("Tu nombre es: "+nombre.valuel);
        const resultado = document.getElementById("resultado");
        //let c = nombre.value[0];
        let n = nombre.value;
        n=n.toUpperCase();
        let c = nombre.value.charAt(0);
        resultado.innerHTML = "<mark>"+c.value+"</mark>";

    });
}

window.addEventListener("load", main);
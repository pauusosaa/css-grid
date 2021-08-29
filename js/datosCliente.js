window.addEventListener("load", function (){
    let botonSiguiente = this.document.querySelector(".siguiente")
    botonSiguiente.addEventListener("click", function(e){
        e.preventDefault();
        let Errores = {

        }
        
        let DNI = document.querySelector(".dni")
        if((DNI.value.split("")).indexOf(".") != -1){
            DNI.classList.add("errorDNI")
            Errores.dni = "Existe un error"
        }
        if((DNI.value.split("")).indexOf(".") == -1){
            DNI.classList.remove("errorDNI")
            delete Errores.dni
        }


        let inputsForm = document.querySelectorAll("input");
        let vacio =[]
        
        inputsForm.forEach(e => {if(e.value == ""){ vacio.push(e.value)
        }})

        if(vacio.length != 0){
            alert("Aún hay campos vacios")
            Errores.camposVacios = "Hay campos vacios"
        }else{
            delete Errores.camposVacios
        }          
       
        if(Object.keys(Errores).length == 0){
            window.location.href = "../tipoCliente.html";
        }
    }) 

})
    window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
    var nom =document.getElementById("nombre").value;
    var edad=parseFloat(document.getElementById("edad").value);
    var sexo = document.getElementById("sexo").value;
    const nombre = new Constructor(nom, edad, sexo );
     console.log (nombre.hablar());
 });
		function Constructor(nombre,edad,sexo,mayorDeEdad) {
           this.nombres = nombre;
           this.edads = edad;
           this.sexos =sexo;
            this.mayorDeEdad = (this.edad >= 18);
           this.hablar = function(){
           	if (this.mayorDeEdad) {
        	 return "hola mi nombre es " + this.nombres + " tengo " + this.edads + "años y soy mayor de edad";
            }else{
              return "hola mi nombre es " + this.nombres +" tengo " + this.edads + "años y soy menor de edad";	
            }
    };       
 };
});
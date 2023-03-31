"use stric";
const calcular = document.getElementById("calcular")
if (calcular) {

    calcular.addEventListener("click", async function () {

        // Peso, altura y genero del usuario.
        let txt_peso = document.getElementById("txt_peso").value
        let txt_altura = document.getElementById("txt_altura").value
        let txt_genero = document.getElementById("txt_genero").value

        // Convertir las entradas del usuario en float.
        peso = parseFloat(txt_peso);
        console.log('Peso: ', peso)
        altura = parseFloat(txt_altura/100);
        console.log('Altura:', altura)

        // Calcular el IMC
        let imc = peso / (altura * altura);
        console.log('El imc: ', imc);

        // Defino dietas
        let imcBajo = 'Se recomienda una dieta rica en proteínas y calorías para ayudar a aumentar de peso. Incluye alimentos ricos en proteínas como carne, pescado, huevos y productos lácteos, y alimentos ricos en calorías como frutos secos, aceites y grasas saludables.'
        let imcNormal = 'Se recomienda una dieta equilibrada que incluya una variedad de alimentos nutritivos como frutas, verduras, granos enteros, proteínas magras y grasas saludables. Es importante asegurarse de mantener un equilibrio adecuado de macronutrientes (proteínas, carbohidratos y grasas) para satisfacer las necesidades nutricionales del cuerpo.'
        let imcSobrepeso = 'Se recomienda una dieta que promueva la pérdida de peso. Esto puede lograrse mediante una reducción moderada en el consumo de calorías y la inclusión de alimentos nutritivos y bajos en calorías como frutas, verduras, granos enteros y proteínas magras. Es importante evitar los alimentos procesados y altos en grasas saturadas y azúcares añadidos.' 
        let imcObesidad = 'Se recomienda una dieta que promueva la pérdida de peso y la reducción de la ingesta de grasas saturadas y azúcares añadidos. Esto puede lograrse mediante una reducción significativa en la ingesta de calorías y la inclusión de alimentos nutritivos y bajos en calorías como frutas, verduras, granos enteros y proteínas magras. También se recomienda limitar la ingesta de alcohol y aumentar la actividad física para mejorar la salud en general.'

        // Validar de campos
        if (txt_genero === '' || peso === '' || altura === '') {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Campos Vacios!",
                html: 'Por favor ingrese o seleccione los datos',
                backdrop: true,
                allowOutsideClick: false
            });
        } else if (peso < 1 || peso > 300 || altura < 0.5 || altura > 3) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Error!",
                html: 'Por favor, introduce valores válidos para peso (entre 1 y 300 kg) y altura (entre 50 y 300 cm).',
                backdrop: true,
                allowOutsideClick: false
            });
        } else if (isNaN(peso) || isNaN(altura)) {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Campos Inválidos!",
                html: 'Por favor, introduce valores numéricos para peso y altura.',
                backdrop: true,
                allowOutsideClick: false
            });
        } else {            
            let estado = '';
            let alerta = '';
            let recomendacion = '';
            // Validacion de genero
            if (txt_genero == 'M') {
                if (imc < 18.5) {
                    estado = "tienes un peso bajo.";
                    alerta = 'warning'
                    recomendacion = imcBajo;
                } else if (imc >= 18.5 && imc < 25) {
                    estado = "tienes un peso normal.";
                    alerta = 'success'
                    recomendacion = imcNormal;
                } else if (imc >= 25 && imc < 30) {
                    estado = "tienes sobrepeso.";
                    alerta = 'warning'
                    recomendacion = imcSobrepeso;
                } else {
                    estado = "tienes obesidad.";
                    alerta = 'error'
                    recomendacion = imcObesidad;
                }
            } else if (txt_genero == 'F') {
                if (imc < 18.5) {
                    estado = "tienes un peso bajo.";
                    alerta = 'warning'
                    recomendacion = imcBajo;
                } else if (imc >= 18.5 && imc < 24) {
                    estado = "tienes un peso normal.";
                    alerta = 'success'
                    recomendacion = imcNormal;
                } else if (imc >= 24 && imc < 29) {
                    estado = "tienes sobrepeso.";
                    alerta = 'warning'
                    recomendacion = imcSobrepeso;
                } else {
                    estado = "tienes obesidad.";
                    alerta = 'error'
                    recomendacion = imcObesidad;
                }
            }
            // Mensaje
            let mensaje = "Tu índice de masa corporal es <strong>" + imc.toFixed(2) + "</strong></br></br> Lo que indica que <strong>" + estado + "</strong></br></br>" + recomendacion;
            // Alert
            Swal.fire({
                position: "center",
                icon: alerta,
                title: "Resultado",
                html: mensaje,
                backdrop: true,
                allowOutsideClick: false
            });
            // Campos en blanco            
            document.getElementById("txt_peso").value = '';
            document.getElementById("txt_altura").value = '';
            document.getElementById("txt_genero").value = '';
        }
    })
}

function soloNumeros(event) {
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  }
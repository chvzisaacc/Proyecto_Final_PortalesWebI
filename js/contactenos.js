const isEmptyRegex = /^\s*$/;
const isValidEmailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

document.addEventListener("DOMContentLoaded", () => {
    const formContacto = document.querySelector(".form_A");
    const txtNombre = document.getElementById("txtNombre");
    const txtEmail = document.getElementById("txtEmail");
    const txtNumero = document.getElementById("txtNumero");
    const txtCiudad = document.getElementById("txtCiudad");
    const txtDireccion = document.getElementById("txtDireccion");
    const cmbEstado = document.getElementById("cmbEstado");
    const txtCodPostal = document.getElementById("txtCodPostal");
    const txtRazon = document.getElementById("txtRazon");

    const fieldErrors = {};

    formContacto.addEventListener("submit", (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (validateFormulario()) {
            formContacto.submit();
        }
    });

    const validateFormulario = () => {
        let focused = false;
        let hasError = false;

        const nombreValue = txtNombre.value;
        const nombreParent = txtNombre.parentElement;
        if (isEmptyRegex.test(nombreValue)) {
            if (!fieldErrors[txtNombre.id]) {
                nombreParent.classList.add("error");
                const span = document.createElement("SPAN");
                span.innerHTML = "¡El nombre completo no puede estar vacío!";
                fieldErrors[txtNombre.id] = span;
                nombreParent.appendChild(span);

                const changeHandler = () => {
                    nombreParent.classList.remove("error");
                    span.remove();
                    txtNombre.removeEventListener("input", changeHandler);
                    delete fieldErrors[txtNombre.id];
                    validateFormulario();
                };
                txtNombre.addEventListener("input", changeHandler);

                if (!focused) {
                    focused = true;
                    txtNombre.focus();
                }
            }
            hasError = true;
        }

        const emailValue = txtEmail.value;
        const emailParent = txtEmail.parentElement;
        if (!isValidEmailRegex.test(emailValue)) {
            if (!fieldErrors[txtEmail.id]) {
                emailParent.classList.add("error");
                const span = document.createElement("SPAN");
                span.innerHTML = isEmptyRegex.test(emailValue)
                    ? "¡El correo electrónico no puede estar vacío!"
                    : "¡Ingrese un correo electrónico válido!";
                fieldErrors[txtEmail.id] = span;
                emailParent.appendChild(span);

                const changeHandler = () => {
                    emailParent.classList.remove("error");
                    span.remove();
                    txtEmail.removeEventListener("input", changeHandler);
                    delete fieldErrors[txtEmail.id];
                    validateFormulario();
                };
                txtEmail.addEventListener("input", changeHandler);

                if (!focused) {
                    focused = true;
                    txtEmail.focus();
                }
            }
            hasError = true;
        }

        const numeroValue = txtNumero.value;
        const numeroParent = txtNumero.parentElement;
        if (isEmptyRegex.test(numeroValue)) {
            if (!fieldErrors[txtNumero.id]) {
                numeroParent.classList.add("error");
                const span = document.createElement("SPAN");
                span.innerHTML = "¡El número telefónico no puede estar vacío!";
                fieldErrors[txtNumero.id] = span;
                numeroParent.appendChild(span);

                const changeHandler = () => {
                    numeroParent.classList.remove("error");
                    span.remove();
                    txtNumero.removeEventListener("input", changeHandler);
                    delete fieldErrors[txtNumero.id];
                    validateFormulario();
                };
                txtNumero.addEventListener("input", changeHandler);

                if (!focused) {
                    focused = true;
                    txtNumero.focus();
                }
            }
            hasError = true;
        }

        const ciudadValue = txtCiudad.value;
        const ciudadParent = txtCiudad.parentElement;
        if (isEmptyRegex.test(ciudadValue)) {
            if (!fieldErrors[txtCiudad.id]) {
                ciudadParent.classList.add("error");
                const span = document.createElement("SPAN");
                span.innerHTML = "¡La ciudad no puede estar vacía!";
                fieldErrors[txtCiudad.id] = span;
                ciudadParent.appendChild(span);

                const changeHandler = () => {
                    ciudadParent.classList.remove("error");
                    span.remove();
                    txtCiudad.removeEventListener("input", changeHandler);
                    delete fieldErrors[txtCiudad.id];
                    validateFormulario();
                };
                txtCiudad.addEventListener("input", changeHandler);

                if (!focused) {
                    focused = true;
                    txtCiudad.focus();
                }
            }
            hasError = true;
        }

        const direccionValue = txtDireccion.value;
        const direccionParent = txtDireccion.parentElement;
        if (isEmptyRegex.test(direccionValue)) {
            if (!fieldErrors[txtDireccion.id]) {
                direccionParent.classList.add("error");
                const span = document.createElement("SPAN");
                span.innerHTML = "¡La dirección actual no puede estar vacía!";
                fieldErrors[txtDireccion.id] = span;
                direccionParent.appendChild(span);

                const changeHandler = () => {
                    direccionParent.classList.remove("error");
                    span.remove();
                    txtDireccion.removeEventListener("input", changeHandler);
                    delete fieldErrors[txtDireccion.id];
                    validateFormulario();
                };
                txtDireccion.addEventListener("input", changeHandler);

                if (!focused) {
                    focused = true;
                    txtDireccion.focus();
                }
            }
            hasError = true;
        }

        const estadoValue = cmbEstado.value;
        const estadoParent = cmbEstado.parentElement;
        if (isEmptyRegex.test(estadoValue)) {
            if (!fieldErrors[cmbEstado.id]) {
                estadoParent.classList.add("error");
                const span = document.createElement("SPAN");
                span.innerHTML = "¡Debe seleccionar un departamento!";
                fieldErrors[cmbEstado.id] = span;
                estadoParent.appendChild(span);

                const changeHandler = () => {
                    estadoParent.classList.remove("error");
                    span.remove();
                    cmbEstado.removeEventListener("change", changeHandler);
                    delete fieldErrors[cmbEstado.id];
                    validateFormulario();
                };
                cmbEstado.addEventListener("change", changeHandler);

                if (!focused) {
                    focused = true;
                    cmbEstado.focus();
                }
            }
            hasError = true;
        }

        const codPostalValue = txtCodPostal.value;
        const codPostalParent = txtCodPostal.parentElement;
        if (isEmptyRegex.test(codPostalValue)) {
            if (!fieldErrors[txtCodPostal.id]) {
                codPostalParent.classList.add("error");
                const span = document.createElement("SPAN");
                span.innerHTML = "¡El código postal no puede estar vacío!";
                fieldErrors[txtCodPostal.id] = span;
                codPostalParent.appendChild(span);

                const changeHandler = () => {
                    codPostalParent.classList.remove("error");
                    span.remove();
                    txtCodPostal.removeEventListener("input", changeHandler);
                    delete fieldErrors[txtCodPostal.id];
                    validateFormulario();
                };
                txtCodPostal.addEventListener("input", changeHandler);

                if (!focused) {
                    focused = true;
                    txtCodPostal.focus();
                }
            }
            hasError = true;
        }

        const razonValue = txtRazon.value;
        const razonParent = txtRazon.parentElement;
        if (isEmptyRegex.test(razonValue)) {
            if (!fieldErrors[txtRazon.id]) {
                razonParent.classList.add("error");
                const span = document.createElement("SPAN");
                span.innerHTML = "¡El mensaje o comentario no puede estar vacío!";
                fieldErrors[txtRazon.id] = span;
                razonParent.appendChild(span);

                const changeHandler = () => {
                    razonParent.classList.remove("error");
                    span.remove();
                    txtRazon.removeEventListener("input", changeHandler);
                    delete fieldErrors[txtRazon.id];
                    validateFormulario();
                };
                txtRazon.addEventListener("input", changeHandler);

                if (!focused) {
                    focused = true;
                    txtRazon.focus();
                }
            }
            hasError = true;
        }

        return !hasError;
    };
});
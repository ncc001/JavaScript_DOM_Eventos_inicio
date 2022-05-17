// // querySelector
// const heading = document.querySelector('.header__texto h2'); //0 o 1 elementos
// heading.textContent = 'nuevo heading';

// console.log(heading);
// //querySelectoAll

// const enlaces = document.querySelectorAll('.navegacion a');
// console.log(enlaces[0]);
// enlaces[0].textContent = 'nuevo texto';
// enlaces[0].href = 'https://google.com';

// //getElementByid

// const heading2 = document.getElementById('heading');

// console.log(heading2);

// //** generar un nuevo enlace */

// const nuevoEnlance = document.createElement('A');
// // Agregar el href

// nuevoEnlance.href = 'nuevo-enlance.html';

// // agregar texto
// nuevoEnlance.textContent = 'nuevo enlance';

// // agregar clase
// nuevoEnlance.classList.add('navegacion_enlace');

// //agregarlo al documento

// const navegacion = document.querySelector('.navegacion');

// navegacion.appendChild(nuevoEnlance);

// console.log(nuevoEnlance);

// // eventos
// console.log(1);
// window.addEventListener('load', function () {
// 	//load espera a que el js y los archivos que dependen del html esten listos
// 	console.log(2);
// });

// window.onload = function () {
// 	console.log(3);
// };

// document.addEventListener('DOMContentLoaded', function () {
// 	//solo espera el Html, No espera css o imagenes
// 	console.log(4);
// });

// console.log(5);

// window.onscroll = function (evento) {
// 	// console.log(evento);
// };

// //** Seleccionar elementos y asociarle eventos */

// const btnEnviar = document.querySelector('.boton--primario');

// btnEnviar.addEventListener('click', function (evento) {
// 	console.log(evento);
// 	evento.preventDefault();

// 	//validar formulario

// 	console.log('enviar formulario');
// });

//** EVENTOS DE INPUTS Y TEXTAREA */

const datos = {
	nombre: '',
	email: '',
	mensaje: '',
};
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
	// console.log(e.target.value);
	datos[e.target.id] = e.target.value;

	// console.log(datos);
}

//** EVENTO DE SUBMIT */

formulario.addEventListener('submit', function (e) {
	e.preventDefault();

	//** validar el formulario */
	const { nombre, email, mensaje } = datos;
	if (nombre === '' || email === '' || mensaje === '') {
		mostrarAlerta('todos los campos son obligatorios', true);

		return;
	}
	//** crear alerta de enviar correcto */

	//** enviar formulñario */
	mostrarAlerta('mensaje enviado correctamente');
});

//muetra el error en pantalla
function mostrarError(mensaje) {
	const error = document.createElement('P');
	error.textContent = mensaje;
	error.classList.add('error');

	formulario.appendChild(error);

	setTimeout(() => {
		error.remove();
	}, 5000);
}
//muetra correcto en pantalla

function mostrarMensaje(mensaje) {
	const correcto = document.createElement('P');
	correcto.textContent = mensaje;
	correcto.classList.add('correcto');
	formulario.appendChild(correcto);
	setTimeout(() => {
		correcto.remove();
	}, 5000);
}

// refactoring code //

function mostrarAlerta(mensaje, error = null) {
	const alerta = document.createElement('P');
	alerta.textContent = mensaje;
	if (error) {
		alerta.classList.add('error');
	} else {
		alerta.classList.add('correcto');
	}
	formulario.appendChild(alerta);
	setTimeout(() => {
		alerta.remove();
	}, 5000);
}

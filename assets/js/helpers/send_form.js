const formDOM = document.querySelector('#form');
const modalDOM = document.querySelector('#modal');
const btnCloseDOM = document.querySelector('#btn_close-modal');

function openModal() {
	modalDOM.showModal();
}

function closeModal() {
	modalDOM.close();
}

function sendEmail() {
	formDOM.addEventListener('submit', (e) => {
		e.preventDefault();

		const params = {
			name: document.querySelector('#name').value,
			email: document.querySelector('#email').value,
			subject: document.querySelector('#subject').value,
			message: document.querySelector('#message').value,
		};

		if (params.name && params.email && params.subject && params.message) {
			emailjs.send('service_cwrvja9', 'template_jn2yscu', params).then(
				(response) => {
					console.log('SUCCESS!', response.status, response.text);
					openModal();
					formDOM.reset();
				},
				(error) => {
					console.log('FAILED...', error);
					alert('Error al enviar el mensaje. Intenta de nuevo.');
				},
			);
		}
	});
}

btnCloseDOM.addEventListener('click', closeModal);

export default sendEmail;

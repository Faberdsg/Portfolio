import parallax from './components/parallax.js';
import activeMenu from './components/selected_menu.js';
import updateCopyrightYear from './helpers/date_updater.js';
import loader from './helpers/loader.js';
import resetToHome from './helpers/reload_page.js';
import sendEmail from './helpers/send_form.js';

loader();
updateCopyrightYear();
resetToHome();
parallax();
activeMenu();
sendEmail();

const languageToggle = document.querySelector('#language-toggle');

if (languageToggle) {
	languageToggle.addEventListener('change', () => {
		const currentPath = window.location.pathname;

		if (languageToggle.checked) {
			if (!currentPath.includes('index_en.html')) {
				window.location.href = 'index_en.html';
			}
		} else {
			if (!currentPath.includes('index.html')) {
				window.location.href = 'index.html';
			}
		}
	});

	if (window.location.pathname.includes('index_en.html')) {
		languageToggle.checked = true;
	}
}

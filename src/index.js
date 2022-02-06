const { applyBindings, observable } = require('knockout');
import './pages/lists';
import './pages/selects';
import './pages/buttons';

document.addEventListener('DOMContentLoaded', () => {
	const app = document.getElementById('app');

	applyBindings(
		{
			activePage: observable(null),
			menu: [
				{ id: 'lists', name: 'Списки' },
				{ id: 'selects', name: 'Селекты' },
				{ id: 'buttons', name: 'Кнопки' },
			],
		},
		app
	);
});

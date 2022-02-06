const { applyBindings, observable } = require('knockout');
import './pages/lists';
import './pages/selects';

document.addEventListener('DOMContentLoaded', () => {
	const app = document.getElementById('app');

	applyBindings(
		{
			activePage: observable(null),
			menu: [
				{ id: 'lists', name: 'Списки' },
				{ id: 'selects', name: 'Селекты' },
			],
		},
		app
	);
});

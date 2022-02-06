const { applyBindings, observable } = require('knockout');
import './pages/lists';
import './pages/selects';
import './pages/buttons';
import './pages/inputs';

document.addEventListener('DOMContentLoaded', () => {
	const app = document.getElementById('app');

  const activePage = observable(location.hash.slice(1));
  activePage.subscribe(v => {
    location.hash = v;
  })


	applyBindings(
		{
			activePage,
			menu: [
				{ id: 'lists', name: 'Списки' },
				{ id: 'selects', name: 'Селекты' },
				{ id: 'buttons', name: 'Кнопки' },
				{ id: 'inputs', name: 'Инпуты' },
			],
		},
		app
	);
});

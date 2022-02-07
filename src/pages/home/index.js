import { applyBindings } from 'knockout';

const ViewModel = {
	menu: [
		{ id: 'lists', name: 'Списки' },
		{ id: 'selects', name: 'Селекты' },
		{ id: 'buttons', name: 'Кнопки' },
		{ id: 'inputs', name: 'Инпуты' },
		{ id: 'calendars', name: 'Календари' },
	],
};

applyBindings(ViewModel, document.getElementById('app'));

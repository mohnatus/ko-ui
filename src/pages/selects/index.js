import { applyBindings, observable, observableArray } from 'knockout';
import * as Select from '@/interface/components/select';
import * as IconListItem from '../lists/folder-list-item';
import { registerComponent } from '@/interface/engine/register-component';
import ListController from '@/interface/models/list-controller';

registerComponent('custom-select', Select);
registerComponent('folder-list-item', IconListItem);

const ViewModel = () => {
	const items = [
		{ id: 1, text: 'Option 1' },
		{ id: 2, text: 'Option 2' },
		{ id: 3, text: 'Option 3', disabled: true },
		{ id: 4, text: 'Option 4' },
	];
	const leveledItems = ListController();
	leveledItems.set([
		{
			id: 1,
			text: 'Option 1',
			items: [
				{
					id: 2,
					text: 'Option 1.1',
					items: [{ id: 3, text: 'Option 1.1.1' }],
				},
				{ id: 4, text: 'Option 1.2' },
			],
		},
	]);

	return {
		items,
		selected: observable(null),
		selected2: observable(null),
		leveledItems: leveledItems.flatList,
		leveledSelected: observable(null),
		categoriesItems: [
			{ inactive: true, text: 'Category 1' },
			{ id: 1, text: 'Option 1' },
			{ id: 2, text: 'Option 2' },
			{ inactive: true, text: 'Category 2' },
			{ id: 3, text: 'Option 3' },
			{ id: 4, text: 'Option 4' },
		],
		categoriesSelected: observable(null),
		multipleSelected: observableArray([]),
		customSelected: observable(null),
	};
};

applyBindings(ViewModel(), document.getElementById('app'));

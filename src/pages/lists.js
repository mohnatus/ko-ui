import { observable, observableArray } from 'knockout';
import * as SelectableList from '@/interface/components/selectable-list';
import * as IconListItem from './folder-list-item'
import { registerComponent } from '@/interface/engine/register-component';
import ListController from '@/interface/models/list-controller';

registerComponent('selectable-list', SelectableList);
registerComponent('folder-list-item', IconListItem);

registerComponent('page-lists', {
	model: () => {
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
      customSelected: observable(null)
		};
	},
	template: `
    <div>
      <h1>Списки</h1>
      <p>
          Принимают и выводят список элементов { id, text, level, disabled, inactive }.
          <br>
          Поддерживают уровни вложенности (level): обозначаются отступом.
          <br>
          Поддерживают вывод "категорий" (inactive): некликабельны.
          <br>
          Поддерживают заблокированные опции (disabled): некликабельны.
      </p>
      <p>
        Поддерживают "выбранные" элементы - selected
        <br>
        Либо одиночное значение, совпадает с id элемента, либо массив id
      </p>
      <p>
        Поддерживают кастомный шаблон элемента - itemComponentName
      </p>
      <h2>Обычный</h2>
      <selectable-list params="items: items, selected: selected, onSelect: (item) => {
        selected(item.id)
      }"></selectable-list>
      <h2>С уровнями вложенности</h2>
      <selectable-list params="items: leveledItems, selected: leveledSelected, onSelect: (item) => {
        leveledSelected(item.id)
      }"></selectable-list>
      <h2>С категориями</h2>
      <selectable-list params="items: categoriesItems, selected: categoriesSelected, onSelect: (item) => {
        categoriesSelected(item.id)
      }"></selectable-list>
      <h2>С множественным выбором</h2>
      <selectable-list params="items: items, selected: multipleSelected, onSelect: (item) => {
        multipleSelected.push(item.id)
      }"></selectable-list>
      <h2>С собственным шаблоном</h2>
      <selectable-list params="items: items, selected: customSelected, onSelect: (item) => {
        customSelected(item.id)
      }, itemComponentName: 'folder-list-item'"></selectable-list>
    </div>
  `,
});

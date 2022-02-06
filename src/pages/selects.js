import { observable, observableArray } from 'knockout';
import * as Select from '@/interface/components/select';
import * as IconListItem from './folder-list-item'
import { registerComponent } from '@/interface/engine/register-component';
import ListController from '@/interface/models/list-controller';

registerComponent('custom-select', Select);
registerComponent('folder-list-item', IconListItem);

registerComponent('page-selects', {
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
      customSelected: observable(null)
		};
	},
	template: `
    <div>
      <h1>Селекты</h1>
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
        Поддерживают "выбранные" элементы - value (изменяется динамически)
        <br>
        Либо одиночное значение, совпадает с id элемента, либо массив id
      </p>
      <p>
        Поддерживают кастомные шаблоны элемента - optionComponentName, resultComponentName
      </p>
      <h2>Обычный</h2>
      <custom-select params="options: items, value: selected"></custom-select>
      <h2>С поиском</h2>
      <custom-select params="options: items, value: selected2, searchable: true"></custom-select>
      <h2>Многоуровневый</h2>
      <custom-select params="options: leveledItems, value: leveledSelected, searchable: true"></custom-select>
      <h2>Со множественным выбором</h2>
      <custom-select params="multiple: true, options: items, value: multipleSelected"></custom-select>

      <h2>С кастомными шаблонами</h2>
      <custom-select params="multiple: true, options: items, value: multipleSelected,
      optionComponentName: 'folder-list-item', resultComponentName: 'folder-list-item'"></custom-select>
    </div>
  `,
});

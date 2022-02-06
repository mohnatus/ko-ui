import { observable, observableArray } from 'knockout';
import { registerComponent } from '@/interface/engine/register-component';
import { registerBinding } from '@/interface/engine/register-binding';

import * as Input from '@/interface/components/input';
import DynamicInput from '@/interface/bindings/dynamic-input';

registerComponent("c-input", Input);
registerBinding('dynamicInput', DynamicInput)

registerComponent('page-inputs', {
	model: () => {


		return {
      value: observable(''),
      value2: observable(''),
      value3: observable(''),

		};
	},
	template: `
    <div>
      <h1>Инпуты</h1>

      <c-input params="value: value, placeholder: 'Placeholder'"></c-input>
      <c-input params="value: value2, placeholder: 'Placeholder', clearable: true,
        maxLength: 100, counter: true"></c-input>

      <input data-bind="dynamicInput" placeholder="Placeholder" />
  `,
});

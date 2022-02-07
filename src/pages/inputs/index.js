import { applyBindings, observable, observableArray } from 'knockout';
import { registerComponent } from '@/interface/engine/register-component';
import { registerBinding } from '@/interface/engine/register-binding';

import * as Input from '@/interface/components/input';
import DynamicInput from '@/interface/bindings/dynamic-input';

registerComponent('c-input', Input);
registerBinding('dynamicInput', DynamicInput);

const ViewModel = {
	value: observable(''),
	value2: observable(''),
	value3: observable(''),
};

applyBindings(ViewModel, document.getElementById('app'));

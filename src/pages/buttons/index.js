import { applyBindings } from 'knockout';
import * as Button from '@/interface/components/button';
import { registerComponent } from '@/interface/engine/register-component';

registerComponent('c-button', Button);

const ViewModel = {};

applyBindings(ViewModel, document.getElementById('app'));

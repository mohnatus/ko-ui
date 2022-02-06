import { computed, toJS } from 'knockout';

import { registerComponent } from '@/interface/engine/register-component';

import * as Button from '@/interface/components/button';
import * as TimesIcon from '@/interface/icons/times';

registerComponent('c-button', Button);
registerComponent('icon-times', TimesIcon);

export default (params) => {
	const {
		value,
		appendIcon,
		prependIcon,
		placeholder,
		clearable,
		counter,
		maxLength,

		$raw,
		...otherAttrs
	} = params;

	console.log(otherAttrs);

	return {
		value,
		appendIcon,
		prependIcon,
		clearable,
		withCounter: !!counter,
		charsLeft: computed(() => {
			return toJS(maxLength) - toJS(value).length;
		}),
		inputAttrs: {
			type: 'text',
			placeholder: placeholder,
			maxlength: maxLength,
			...otherAttrs,
		},
		clear() {
			console.log('clear', value())
			value('');
		},
	};
};

import { computed, toJS } from 'knockout';
import { registerComponent } from '@/interface/engine/register-component';
import { registerBinding } from '@/interface/engine/register-binding';
import * as ButtonContent from './button-content';
import * as SvgIcon from '@/interface/components/icon';
import onPressBinding from '@/interface/bindings/on-press';
import Log from '@/interface/bindings/log';
import { useButtonView } from './use-button-view';

registerComponent('svg-icon', SvgIcon);
registerComponent('button-content', ButtonContent);
registerBinding('onPress', onPressBinding);
registerBinding('log', Log);

export default (params) => {
	const {
		as,
		href,
		linkAttrs,
		buttonAttrs,
		onPress,
		appendIcon,
		prependIcon,
		icon,
		disabled,
	} = params;

	const classes = useButtonView(params);

	return {
		classes,
		icons: {appendIcon, prependIcon, icon},
		onPress() {
			if (typeof onPress === 'function') {
				onPress();
			}
		},
		as,
		buttonAttrs: {
			type: 'button',
			...(buttonAttrs || {}),
		},
		linkAttrs: {
			...(linkAttrs || {}),
			'aria-role': 'button',
			href: href,
		},
	};
};

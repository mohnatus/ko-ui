import { usePress } from '@/interface/interactions/use-press';
import { onBindingDispose } from '@/interface/engine/on-binding-dispose';


function handler(
	element,
	valueAccessor,
	allBindings,
	viewModel,
	bindingContext
) {
	const params = valueAccessor() || {};

	const cb = usePress(element, params.onPress);

	if (cb) {
		onBindingDispose(() => {
			cb();
		});
	}
}

export default {
	init: handler,
};

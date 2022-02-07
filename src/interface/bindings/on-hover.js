import { useHover } from '@/interface/interactions/use-hover';
import { onBindingDispose } from '@/interface/engine/on-binding-dispose';

function handler(
	element,
	valueAccessor,
	allBindings,
	viewModel,
	bindingContext
) {
	const onChange = valueAccessor();

	const cb = useHover(
		element,
		() => onChange(true),
		() => onChange(false)
	);

	if (cb) {
		onBindingDispose(() => {
			cb();
		});
	}
}

export default {
	init: handler,
};

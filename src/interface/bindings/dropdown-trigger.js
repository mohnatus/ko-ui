import { isObservable } from 'knockout';
import { onBindingDispose } from '@/interface/engine/on-binding-dispose';
import { useOutClick } from '@/interface/interactions/use-out-click';
import { usePress } from '@/interface/interactions/use-press';

function handler(
	element,
	valueAccessor,
	allBindings,
	viewModel,
	bindingContext
) {
	const isOpen = valueAccessor();

	const ref = allBindings.get('dropdown');

	if (!isObservable(isOpen)) return;

	const pressCb = usePress(element, () => {
		isOpen(true);
	});

	const outClickCb = useOutClick([element, ref], () => {
		isOpen(false);
	});

	onBindingDispose(() => {
		pressCb && pressCb();
		outClickCb && outClickCb();
	});
}

export default {
	init: handler,
};

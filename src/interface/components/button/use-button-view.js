import { computed, toJS } from 'knockout';

export function useButtonView(params) {
	return computed(() => {
    let props = toJS(params)
		return ['button',
      props.size && 'button--size_' + props.size,
      props.theme && 'button--theme_' + props.theme,
      props.mode && 'button--mode_' + props.mode,
      props.pending && 'button--pending',
    ].filter(Boolean).join(' ');
	});
}

export const template = `
<!-- ko if: prependIcon -->
<span data-bind="log"></span>
<span class="button__prepend">
<!-- ko component: {
  name: 'svg-icon',
  params: prependIcon
} -->
<!-- /ko -->
</span>
<!-- /ko -->

<!-- ko if: icon -->
<span class="button__icon">
<!-- ko component: {
  name: 'svg-icon',
  params: icon
} -->
<!-- /ko -->
</span>
<!-- /ko -->

<!-- ko ifnot: icon -->
<!-- ko using: context -->
<!-- ko template: { nodes: $componentTemplateNodes } -->
<!-- /ko -->
<!-- /ko -->
<!-- /ko -->

<!-- ko if: appendIcon -->
<span class="button__append">
<!-- ko component: {
  name: 'svg-icon',
  params: appendIcon
} -->
<!-- /ko -->
</span>
<!-- /ko -->
`;

export const model = (params) => {
	const { icon, appendIcon, prependIcon, context } = params;
  console.log(params)
	return {
		icon,
		appendIcon,
		prependIcon,
    context
	};
};

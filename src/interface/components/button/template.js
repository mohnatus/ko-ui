export default `
<!-- ko let: { $context: $parent, $nodes: $componentTemplateNodes } -->

<!-- ko if: as === 'link' -->
<a data-bind="attr: linkAttrs, onPress: onPress, class: classes" >
<!-- ko component: {
  name: 'button-content',
  params: icons,
  context: $context,
} -->
<!-- ko template: { nodes: $nodes } -->
<!-- /ko -->
<!-- /ko -->
</a>
<!-- /ko -->

<!-- ko if: as !== 'link' -->
<button data-bind="attr: buttonAttrs, onPress: onPress, class: classes" >
<!-- ko component: {
  name: 'button-content',
  params: icons,
  context: $context
} -->
<!-- ko template: { nodes: $nodes } -->
<!-- /ko -->
<!-- /ko -->
</button>
<!-- /ko -->

<!-- /ko -->
`;

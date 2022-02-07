export default `
<!-- ko if: componentName -->
<!-- ko component: { name: componentName, params: {
  width: width,
  height: height,
  color: color,
} } -->
<!-- /ko -->
<!-- /ko -->

<!-- ko ifnot: componentName -->
<svg class="svg-icon" data-bind="attr: {
  width: width,
  height: height,
}, style: {
  color: color
}">
  <use data-bind="attr: {
    href: href,
    'xlink:href': href
  }"></use>
</svg>
<!-- /ko -->
`;

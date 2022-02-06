export default `
<svg class="svg-icon" data-bind="attr: {
  width: width,
  height: height,
}">
  <use data-bind="attr: {
    href: href,
    'xlink:href': href
  }"></use>
</svg>
`;

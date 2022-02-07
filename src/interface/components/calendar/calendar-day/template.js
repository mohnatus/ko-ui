export default `
<button class="calendar-day" data-bind="onPress: onPress, css: {
    inactive: inactive,
    selected: selected,
    fixed: fixed
  }">
  <div class="calendar-day__text" data-bind="text: date"></div>
</button>
`;

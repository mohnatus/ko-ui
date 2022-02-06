export default `
  <div class="list">
    <!-- ko foreach: items -->
      <div class="list__item" data-bind="onPress: {
        onPress: function() {
          $parent.onPress($data);
        }
      }, attr: {
        'data-id': $data.id,
        'data-level': $data.level,
      }, css: {
        'selected': $parent.isSelected($data),
        'disabled': $parent.isDisabled($data),
        'inactive': $data.inactive
      }, style: {
        'padding-left': $parent.getLevelOffset($data)
      }">
        <!-- ko component: { name: $parent.itemComponentName, params: $data } -->
        <!-- /ko -->
      </div>
    <!-- /ko -->
  </div>
`;

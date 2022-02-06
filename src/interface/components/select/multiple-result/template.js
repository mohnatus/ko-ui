export default `<div class="select-multiple-result">
  <div class="select-multiple-result__items">
    <!-- ko foreach: selected -->

      <div class="select-multiple-result-item">
        <!-- ko if: $parent.itemComponentName -->
        <!-- ko component: { name: $parent.itemComponentName, params: $data } -->
        <!-- /ko -->
        <!-- /ko -->

        <!-- ko ifnot: $parent.itemComponentName -->
        <!-- ko text: $data.text -->
        <!-- /ko -->
        <!-- /ko -->

        <button data-bind="click: function($ctx) {
          $parent.removeItem($ctx)
        }">&times;</button>
      </div>

    <!-- /ko -->

    <input data-bind="textInput: filter">
  </div>
</div>`;

export default `<div class="select-single-result">
  <div class="select-single-result__items">
    <!-- ko foreach: selected -->

      <div class="select-single-result__item">
        <!-- ko if: $parent.itemComponentName --> 
        <!-- ko component: { name: $parent.itemComponentName, params: $data } -->
        <!-- /ko -->
        <!-- /ko -->

        <!-- ko ifnot: $parent.itemComponentName --> 
        <!-- ko text: $data.text --> 
        <!-- /ko -->
        <!-- /ko -->
      </div>

    <!-- /ko -->
  </div>

  <!-- ko if: clearable -->
  <!-- ko if: selected().length -->
    <button data-bind="click: onReset">&times;</button>
  <!-- /ko -->
  <!-- /ko -->
</div>`;

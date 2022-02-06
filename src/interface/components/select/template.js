export default `<div class="select">

  <div class="select__result" data-bind="dropdownTrigger: isOpen, dropdown: boxRef">
    <!-- ko ifnot: multiple -->
    <single-select-result params="clearable: clearable,
      selected: selectedItems,
      itemComponentName: resultComponentName,
      onReset: onReset"></single-select-result>
    <!-- /ko -->

    <!-- ko if: multiple -->
    <multiple-select-result params="
      selected: selectedItems,
      filter: filter,
      itemComponentName: resultComponentName,
      onRemove: onRemoveItem"></multiple-select-result>
    <!-- /ko -->
  </div>


  <!-- ko if: isOpen -->
  <div class="select__box" data-bind="ref: boxRef">

    <!-- ko if: withSearch -->
    <input data-bind="textInput: filter">
    <button data-bind="click: resetFilter">&times;</button>
    <!-- /ko -->

    <div class="select__list">
      <select-list params="items: filteredList, selected: selected, onSelect: function(item) {
        onSelect(item)
      }, itemComponentName: optionComponentName,"></select-list>
    </div>

  </div>
  <!-- /ko -->

</div>`;

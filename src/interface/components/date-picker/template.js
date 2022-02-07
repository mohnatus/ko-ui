export default `<div class="date-picker">

  <div class="date-picker__field"  data-bind="dropdownTrigger: isOpen, dropdown: boxRef">
    <c-input params="appendIcon: { componentName: 'calendar-icon', width: 24, height: 24 }, value: inputValue"></c-input>
  </div>


  <!-- ko if: isOpen -->
  <div class="date-picker__box" data-bind="ref: boxRef">

    <date-calendar params="month: month, selected: value, onSelect: function(date) { onSelect(date)}"></date-calendar>

  </div>
  <!-- /ko -->

</div>`;

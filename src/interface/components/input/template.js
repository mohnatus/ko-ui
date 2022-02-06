export default `
<div class="input">
  <div class="input__container">
    <!-- ko if: prependIcon -->
      <!-- ko component: { name: 'svg-icon', params: prependIcon } -->
      <!-- /ko -->
    <!-- /ko -->

    <input class="input__field" data-bind="textInput: value, attr: inputAttrs">

    <!-- ko if: clearable -->
    <!-- ko if: value -->
      <c-button data-bind="onPress: clear">
        <icon-times params="width: 20, height: 20"></icon-times>
      </c-button>
    <!-- /ko -->
    <!-- /ko -->

    <!-- ko if: appendIcon -->
      <!-- ko component: { name: 'svg-icon', params: appendIcon } -->
      <!-- /ko -->
    <!-- /ko -->

    <!-- ko if: withCounter -->
    <span class="input__counter" data-bind="text: charsLeft"></span>
    <!-- /ko -->
  </div>
</div>
`;

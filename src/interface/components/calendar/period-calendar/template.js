export default `
<div class="calendar period-calendar">
  <div class="calendar__days">
    <!-- ko foreach: days -->
      <div class="calendar__day" data-bind="onHover: (state) => $parent.onHoverDay($data, state)">

        <calendar-day params="date: $data.date,
          onSelect: $parent.onSelectDay,

          inactive: $data.inactive,
          selected: $parent.isSelected($data),
          fixed: $parent.isFixed($data)" ></calendar-day>

      </div>
    <!-- /ko -->
  </div>
</div>

`;

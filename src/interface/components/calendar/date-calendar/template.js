export default `
<div class="calendar date-calendar">
  <div class="calendar__days">
    <!-- ko foreach: days -->
      <div class="calendar__day">

        <calendar-day params="date: $data.date,
          onSelect: $parent.onSelectDay,
          inactive: $data.inactive,
          selected: $data.moment === +$parent.selected(),
          fixed: $data.moment === +$parent.selected()"></calendar-day>

      </div>
    <!-- /ko -->
  </div>
</div>
`;

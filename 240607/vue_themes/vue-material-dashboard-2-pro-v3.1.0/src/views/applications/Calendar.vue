<template>
  <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-xl-12">
          <div class="card card-calendar">
            <Calendar :events="events" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Calendar from "../../examples/Calendar.vue";

export default {
  name: "CalendarPage",
  components: { Calendar },
  data() {
    return {
      events: [
        { date: '2024-06-01', income: 23000, expense: 30000 },
        { date: '2024-06-02', income: 200, expense: 12000 },
        // Add more events as needed
      ],
      sidebarEvents: [
        // Your sidebar events
      ],
    };
  },
};
</script>
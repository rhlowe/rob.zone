<template>
  <ol>
    <li v-for="job in jobsReverseSorted" :key="job.start_date" class="p-experience h-event">
      <h4 class="p-name">{{ job.role }}</h4>

      <span class="h-card p-location">
        <a v-if="job.url" :href="job.url">{{ job.company }}</a>
        <span v-else>{{ job.company }}</span>
      </span>

      <span class="duration row1">
        (
        <time :datetime="job.start_date" class="dt-start">{{ formatDate(job.start_date) }}</time>
        to
        <time :datetime="job.end_date" class="dt-end">{{ formatDate(job.end_date) }}</time
        >,
        <em>
          <time :datetime="PnYnMnDTnHnMnS" class="dt-duration">{{ daysBetweenDates(job.start_date, job.end_date) }}</time>
        </em>
        )
      </span>

      <ul class="p-summary">
        <li v-for="a in job.accomplishments" :key="a">{{ a }}</li>
      </ul>
    </li>
  </ol>
</template>

<script>
import { format, formatDistance, parseISO } from 'date-fns';
import jobs from 'static/json/jobs';

export default {
  data() {
    return {
      jobs,
    };
  },
  computed: {
    jobsReverseSorted() {
      const jobsReverseSorted = [...this.jobs];
      return jobsReverseSorted.sort((a, b) => a.start_date < b.start_date);
    },
  },
  methods: {
    formatDate(date) {
      if (date === 'Present') {
        return date;
      }
      return format(parseISO(date), 'MMM yyyy');
    },
    daysBetweenDates(start, end) {
      if (end === 'Present') {
        const endDate = new Date();
        return formatDistance(parseISO(start), endDate);
      }
      return formatDistance(parseISO(start), parseISO(end));
    },
  },
};
</script>

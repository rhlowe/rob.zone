<template>
  <ol>
    <li v-for="job in jobsReverseSorted" :key="job.start_date" class="p-experience h-event">
      <h4 class="p-name">{{ job.role }}</h4>

      <span class="h-card p-location">
        <a v-if="job.url" :href="job.url">{{ job.company }}</a>
        <span v-else>{{ job.company }}</span>
      </span>

      <span class="duration">
        (<time class="dt-start" datetime="YYYY-MM">{{ job.start_date }}</time> to <time class="dt-end" datetime="YYYY-MM">{{ job.end_date }}</time
        >)
      </span>

      <ul class="p-summary">
        <li v-for="a in job.accomplishments" :key="a">{{ a }}</li>
      </ul>
    </li>
  </ol>
</template>

<script>
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
};
</script>

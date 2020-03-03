<template>
  <img :src="imgSrc" :alt="alt" />
</template>

<script>
export default {
  props: {
    alt: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '',
    },
  },
  data: () => ({ observer: null, intersected: false }),
  computed: {
    imgSrc() {
      return this.intersected ? this.src : '';
    },
  },
  mounted() {
    this.observer = new IntersectionObserver(
      (entries) => {
        const img = entries[0];
        if (img.isIntersecting) {
          this.intersected = true;
          this.observer.disconnect();
        }
      },
      {
        rootMargin: '0px',
      },
    );
    this.observer.observe(this.$el);
  },
  destroyed() {
    this.observer.disconnect();
  },
};
</script>

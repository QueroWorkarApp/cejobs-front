<template>
</template>

<script>
export default {
  props: ["title", "job"],

  methods: {
    link(job) {
      return `/vaga/${job.id}`;
    }
  }
};
</script>

<style>
</style>
<template>
  <div class="my-3 p-3 bg-white rounded box-shadow">
    <h6 class="border-bottom border-gray pb-2 mb-0">{{ title }} </h6>
    <nuxt-link v-for="job in jobs" v-bind:key="job.id" :to="link( job )" class="media text-muted pt-3">
      <img
        data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1"
        alt
        class="mr-2 rounded"
      />
      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong class="d-block text-gray-dark">{{job.title}}</strong>
        {{ job.description }}
      </p>
    </nuxt-link>
    <small class="d-block text-right mt-3">
      <a href="#">Ver mais vagas</a>
    </small>
  </div>
</template>

<script>
export default {
    props: ['title', 'jobs'],

    methods: {
        link( job ) {
            return `/vaga/${job.id}`
        }
    }
};
</script>

<style>
</style>
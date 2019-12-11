<template>
  <div class="single-widget category-widget">
    <h4 class="title">Tipo de Job</h4>
    <ul>
      <li v-for="typeCount in jobTypesCount" v-bind:key="typeCount.key">
        <nuxt-link :to="'/busca/?tipo=' + typeCount.key" class="justify-content-between align-items-center d-flex">
          <h6>{{typeCount.key}}</h6>
          <span>{{typeCount.count}}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>

import jobTypesCountQuery from '../../queries/countTypes';

export default {
  data() {
    return {
      // 3
      jobTypesCount: []
    };
  },

  apollo: {
    jobTypesCount: {
      query: jobTypesCountQuery,
      update: data => { 
          return data.jobsConnection.groupBy.JobType.map(( line ) => {
              const e = {
                  'key': line.key,
                  'count': line.connection.aggregate.count
              }

              console.log( e );
              return e;
          })
      }
    }
  }
};
</script>

<style>
</style>
<template>
  <div class="col-lg-12 single-post d-flex flex-row">
    <div class="thumb">
      <img :src="job.company.Logo.url" alt style="width: 100px" class="mr-2 rounded" />
      <ul class="tags">
        <li v-for="area in job.jobareas">
          <nuxt-link :to="link( job )">{{area.AreaName}}</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="details">
      <div class="title d-flex flex-row justify-content-between">
        <div class="titles">
          <nuxt-link :to="link( job )">
            <h4>{{job.title}}</h4>
          </nuxt-link>
          <h6>{{ job.company.Title }}</h6>
        </div>
        <ul class="btns">
          <li>
            <nuxt-link :to="link( job )">
              <span class="lnr lnr-heart"></span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="link( job )">Aplicar</nuxt-link>
          </li>
        </ul>
      </div>
      <p>{{ job.description.slice( 0, 200 ) }}</p>
      <h5>Tipo: {{job.JobType}}</h5>
      <p class="address">
        <span class="lnr lnr-map"></span>
        {{ job.company.Address }}
      </p>
      <p class="address">
        <span class="lnr lnr-database"></span>
        Faixa de salário: R$ {{ job.Salary }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["job"],

  methods: {
    link(job) {
      return `/vaga/${job.id}`;
    }
  }
};
</script>

<style>
</style>
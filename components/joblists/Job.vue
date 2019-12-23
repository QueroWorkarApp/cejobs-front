<template>
  <div class="col-lg-12 single-post job-card">
    <div class="thumb">
      <img :src="job.company.Logo.url" alt style="width: 100px" class="mr-2 rounded" />
    </div>
    <div class="details">
      <div class="title">
        <div class="titles">
          <nuxt-link :to="link( job )">
            <h4>{{job.title}}</h4>
          </nuxt-link>
          <h6>{{ job.company.Title }}</h6>
        </div>
      </div>
      <p>{{ job.description.slice( 0, 200 ) }}</p>
      <p>Tipo: {{job.JobType}}</p>
      <p class="address">
        <span class="lnr lnr-map" title="Endereço"></span>
        {{ job.company.Address }}
      </p>
      <p class="address">
        <span class="lnr lnr-database"></span>
        Faixa de salário: R$ {{ job.Salary }}
      </p>
    </div>
    <ul class="btns">
      <li class="mr-2">
        <nuxt-link :to="link( job )">
          <span class="lnr lnr-heart"></span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="link( job )">Aplicar</nuxt-link>
      </li>
    </ul>
    <div class="labels">
      <ul class="tags">
        <li class="mr-2 label-tag" v-for="(area, i) in job.jobareas" :key="i">
          <nuxt-link :to="link( job )">{{area.AreaName}}</nuxt-link>
        </li>
      </ul>
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

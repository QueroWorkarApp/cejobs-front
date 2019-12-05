<template>
  <div class="container">
    <div class="row justify-content-center d-flex">
      <site-sidebar />

      <div class="col-lg-8 post-list">
        <job v-for="job in jobs" v-bind:key="job.id" :job="job" />
      </div>
    </div>
  </div>
</template>

<script>
import WelcomeMessage from "../components/messages/WelcomeMessage";
import JobSingle from "../components/joblists/Job";
import CompanyList from "../components/joblists/CompanyList";

import jobsQuery from "../queries/jobs.gql";

import SiteSidebar from "../layouts/sidebar";

export default {
  data() {
    return {
      // 3
      jobs: []
    };
  },

  apollo: {
    jobs: {
      query: jobsQuery,
      update: data => data.jobs
    }
  },

  components: {
    "cejobs-welcome-message": WelcomeMessage,
    "job": JobSingle,
    "company-list": CompanyList,
    "site-sidebar": SiteSidebar

  }
};
</script>

<style>
.container {
}
</style>

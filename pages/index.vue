<template>
  <div>
    
    <cejobs-welcome-message />

    <job-list :title="'Vagas mais recentes'" :jobs="jobs" />

    <company-list />
    
  </div>
</template>

<script>
import WelcomeMessage from  "../components/messages/WelcomeMessage";
import CompactList    from  "../components/joblists/CompactList";
import CompanyList    from  "../components/joblists/CompanyList";

import jobsQuery      from "../queries/jobs.gql";


export default {
    data () {
      return {
        // 3
        jobs: [],
      }
    },

  apollo: {
    jobs: {
      query: jobsQuery,
      update: data => data.jobs
    }
  },

  components: {
    'cejobs-welcome-message': WelcomeMessage,
    'job-list': CompactList,
    'company-list': CompanyList
  },

};
</script>

<style>
.container {
}
</style>

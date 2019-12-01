<template>
  <div id="job">
    <nav aria-label="breadcrumb" class="pt-4">
      <ul class="breadcrumb d-flex justify-content-center">
        <li class="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li aria-current="page" class="breadcrumb-item active">Detalhe da vaga</li>
      </ul>
    </nav>

    <section class="mt-4 p-4 bg-light text-dark">
      <h1 class="heading">
        {{job.title}}
        <br />
        <small>
          at
          <a href="#">{{job.company.Title}}</a>
        </small>
      </h1>
      <div class="job-detail-description">
        Postado {{ dateMoment }} |
        <span class="badge featured-badge badge-success">{{ job.JobType }}</span>
      </div>
    </section>
  </div>
</template>

<script>
import jobQuery from "../../queries/job";
import moment from "moment";

export default {
  data: () => ({
    id: null,
    job: {
      title: "",
      company: {}
    }
  }),

  validate({ params }) {
    // Must be a number
    return params.slug.length > 3;
  },

  apollo: {
    job: {
      query: jobQuery,
      variables() {
        // Use vue reactive properties here
        return {
          jobId: this.id
        };
      },

      update: data => data.job
    }
  },

  mounted() {
    this.id = this.$route.params.slug;
  },

  computed: {
    dateMoment() {
      return moment(this.job.createdAt).fromNow();
    }
  }
};
</script>

<style>
.heading {
  text-align: center;
  margin-bottom: 40px;
}

.heading:after {
  content: " ";
  display: block;
  width: 100px;
  height: 2px;
  margin: 20px auto 20px;
  background: #ff7473;
}
.heading small {
  font-size: 1.4rem;
}

.job-detail-description {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  color: #868e96;
  font-size: 0.9rem;
}
</style>
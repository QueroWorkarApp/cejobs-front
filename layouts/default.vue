<template>
<body style="display: block;">
  <button type="button" id="mobile-nav-toggle">
    <i class="lnr lnr-menu"></i>
  </button>

  <site-header />

  <section class="blog-posts-area section-gap">
    <nuxt />
  </section>
</body>
</template>

<style>
</style>

<script>
require("../assets/js/main");
import SiteHeader from "../layouts/header";

export default {
    components: {
        'site-header': SiteHeader
    }
};
</script>
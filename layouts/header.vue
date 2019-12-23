<template>
  <header id="header" class>
    <div class="container">
      <div class="row align-items-center justify-content-between d-flex">
        <div id="logo">
          <nuxt-link :to="'/'">
            <h3>QueroWorkar.App</h3>
          </nuxt-link>
        </div>
        <nav id="nav-menu-container">
          <ul class="nav-menu sf-js-enabled sf-arrows" style="touch-action: pan-y;">
            <li class="menu-active">
              <nuxt-link :to="'/'">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="'about-us'">Vagas</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="'category.html'">Contato</nuxt-link>
            </li>
            <li>
              <nuxt-link class="ticker-b:tn" to="'#'">Criar vaga</nuxt-link>
            </li>
          </ul>
        </nav>
        <!-- #nav-menu-container -->
      </div>
    </div>


    <nav id="mobile-nav">
        <ul class="" style="touch-action: pan-y;" id="">
            <li class="menu-active"><nuxt-link :to="'/'">Home</nuxt-link></li>
            <li><nuxt-link :to="'about-us'">About Us</nuxt-link></li>
            <li><nuxt-link :to="'category.html'">Category</nuxt-link></li>
            <li><nuxt-link :to="'price.html'">Price</nuxt-link></li>
            <li><nuxt-link :to="'blog-home'">Blog</nuxt-link></li>
            <li><nuxt-link :to="'contact.html'">Contact</nuxt-link></li>
            <li class="menu-has-children"><i class="lnr lnr-chevron-down"></i><nuxt-link to="''" class="sf-with-ul">Pages</nuxt-link>
                <ul style="display: none;">
                    <li><nuxt-link :to="'elements.html'">elements</nuxt-link></li>
                    <li><nuxt-link :to="'search.html'">search</nuxt-link></li>
                    <li><nuxt-link :to="'single.html'">single</nuxt-link></li>
                </ul>
            </li>
            <li><nuxt-link class="ticker-b:tn" :to="'#'">Signup</nuxt-link></li>
            <li><nuxt-link class="ticker-b:tn" :to="'#'">Login</nuxt-link></li>
        </ul>
    </nav>
    <div id="mobile-body-overly"></div>
  </header>
  <!-- #header -->
</template>

<script>
export default {};
</script>

<style lang="scss">
#header {
    background:#db3439;
}
</style>

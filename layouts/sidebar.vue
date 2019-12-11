<template>
  <div class="col-lg-4 sidebar">

    <div class="single-widget protfolio-widget">
      <img src="img/blog/user2.jpg" alt />
      <a href="#">
        <h4>Somos um portal OpenSource</h4>
      </a>
      <p>
        Ajude-nos a crescer! Confira o Github do projeto e participe de alguma
        iniciativa. <br />
        <a href="http://github.com/ceJobs" target="_blank">Confira no Github</a>
      </p>
      <ul>
        <li>
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-dribbble"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-behance"></i>
          </a>
        </li>
      </ul>
    </div>

    <widget-job-types />

    <div class="single-widget recent-posts-widget">
      <h4 class="title">Vagas recentes</h4>
      <div class="blog-list">
        <div class="single-recent-post d-flex flex-row">
          <div class="recent-thumb">
            <img class="img-fluid" src="img/blog/r1.jpg" alt />
          </div>
          <div class="recent-details">
            <a href="blog-single.html">
              <h4>
                Home Audio Recording
                For Everyone
              </h4>
            </a>
            <p>02 hours ago</p>
          </div>
        </div>
        <div class="single-recent-post d-flex flex-row">
          <div class="recent-thumb">
            <img class="img-fluid" src="img/blog/r2.jpg" alt />
          </div>
          <div class="recent-details">
            <a href="blog-single.html">
              <h4>
                Home Audio Recording
                For Everyone
              </h4>
            </a>
            <p>02 hours ago</p>
          </div>
        </div>
        <div class="single-recent-post d-flex flex-row">
          <div class="recent-thumb">
            <img class="img-fluid" src="img/blog/r3.jpg" alt />
          </div>
          <div class="recent-details">
            <a href="blog-single.html">
              <h4>
                Home Audio Recording
                For Everyone
              </h4>
            </a>
            <p>02 hours ago</p>
          </div>
        </div>
        <div class="single-recent-post d-flex flex-row">
          <div class="recent-thumb">
            <img class="img-fluid" src="img/blog/r4.jpg" alt />
          </div>
          <div class="recent-details">
            <a href="blog-single.html">
              <h4>
                Home Audio Recording
                For Everyone
              </h4>
            </a>
            <p>02 hours ago</p>
          </div>
        </div>
      </div>
    </div>

    <div class="single-widget tags-widget">
      <h4 class="title">Linguagens</h4>
      <ul>
        <li>
          <a href="#">Lifestyle</a>
        </li>
        <li>
          <a href="#">Art</a>
        </li>
        <li>
          <a href="#">Adventure</a>
        </li>
        <li>
          <a href="#">Food</a>
        </li>
        <li>
          <a href="#">Techlology</a>
        </li>
        <li>
          <a href="#">Fashion</a>
        </li>
        <li>
          <a href="#">Architecture</a>
        </li>
        <li>
          <a href="#">Food</a>
        </li>
        <li>
          <a href="#">Technology</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import JobTypes from '../components/widgets/JobTypes';

export default {
  components: {
    'widget-job-types': JobTypes
  }
};
</script>

<style>
</style>
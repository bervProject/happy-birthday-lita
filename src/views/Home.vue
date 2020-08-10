<template>
  <b-carousel
    icon-pack="mdi"
    icon-prev="arrow-left"
    icon-next="arrow-right"
    indicator-position="is-top"
    animate="slide"
    :arrowBoth="false"
    :autoplay="false"
    :repeat="false"
    :indicator="true"
    :indicator-background="true"
    :indicator-style="indicatorStyles"
  >
    <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <section :class="`hero is-fullheight is-${carousel.color}`">
        <div class="hero-body">
          <div class="container">
            <figure class="image">
              <img :src="`img/${carousel.url}`" />
            </figure>
          </div>
        </div>
        <div class="hero-foot has-text-centered">
          <div class="content">
            <h2 class="title">{{ carousel.text }}</h2>
            <h4 class="subtitle">{{ carousel.message }}</h4>
          </div>
        </div>
      </section>
    </b-carousel-item>
  </b-carousel>
</template>

<script lang="ts" src="./home.ts">
</script>

<template>
  <b-carousel
    icon-pack="mdi"
    icon-prev="arrow-left"
    icon-next="arrow-right"
    animate="slide"
    :arrowBoth="false"
    :autoplay="false"
    :repeat="false"
    :indicator="true"
    :indicator-background="true"
    :indicator-style="indicatorStyles"
  >
    <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <section :class="`hero is-medium is-${carousel.color}`">
        <div class="hero-body has-text-centered">
          <h1 class="title">{{ carousel.text }}</h1>
        </div>
      </section>
    </b-carousel-item>
  </b-carousel>
</template>

<script>
export default {
  data() {
    return {
      indicatorStyles: "is-lines",
      carousels: [
        { text: "Slide 1", color: "primary" },
        { text: "Slide 2", color: "info" },
        { text: "Slide 3", color: "success" },
        { text: "Slide 4", color: "warning" },
        { text: "Slide 5", color: "danger" }
      ]
    };
  }
};
</script>

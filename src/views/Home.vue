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

<script>
export default {
  data() {
    return {
      indicatorStyles: "is-lines",
      carousels: [
        {
          text: "Happy Birthday, Lita!",
          message: "This is your day! Have a great day and smile!",
          color: "info",
          url: "lita0.jpg"
        },
        {
          text: "You're great!",
          color: "info",
          message:
            "Starting from this way into more than this. You're doing great thing!",
          url: "lita4.jpg"
        },
        {
          text: "Congrats!",
          color: "success",
          message:
            "Mostly this late message, congrats! You can do until this moment, I proud of you.",
          url: "lita1.jpg"
        },
        {
          text: "Today is more challenging than yesterday",
          color: "success",
          message:
            "Congrats with your first job! Hope still enjoying Christ in all of your time.",
          url: "lita2.jpg"
        },
        {
          text: "Let Start Your Day Today!",
          color: "white",
          message:
            "I can't say much. I just want to say, happy birthday to you! Hope your day always enjoying Christ!",
          url: "lita3.jpg"
        }
      ]
    };
  }
};
</script>

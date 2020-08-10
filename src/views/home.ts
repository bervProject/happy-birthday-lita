import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      indicatorStyles: "is-lines",
      carousels: [
        {
          text: "Happy Birthday, Lita!",
          message: "This is your day! Have a great day and smile!",
          color: "info",
          url: "lita0.jpg",
        },
        {
          text: "You're great!",
          color: "info",
          message:
            "Starting from this way into more than this. You're doing great thing!",
          url: "lita4.jpg",
        },
        {
          text: "Congrats!",
          color: "success",
          message:
            "Mostly this late message, congrats! You can do until this moment, I proud of you.",
          url: "lita1.jpg",
        },
        {
          text: "Today is more challenging than yesterday",
          color: "success",
          message:
            "Congrats with your first job! Hope still enjoying Christ in all of your time.",
          url: "lita2.jpg",
        },
        {
          text: "Let Start Your Day Today!",
          color: "white",
          message:
            "I can't say much. I just want to say, happy birthday to you! Hope your day always enjoying Christ!",
          url: "lita3.jpg",
        },
      ],
    };
  },
});
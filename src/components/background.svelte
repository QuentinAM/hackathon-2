<script>
    let number_of_stars = 2;
</script>

<div class="space">
    {#each Array(number_of_stars) as i}
        <div class="stars"></div>
    {/each}
  </div>

<style>
    .space {
  background: #1A0000;
  width: 100%;
  height: 100%;
  -webkit-animation-name: starField;
  -webkit-animation-duration: 40s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-delay: 0s;
  -webkit-animation-timing-function: linear;
  animation-name: starField;
  animation-duration: 50s;
  animation-iteration-count: infinite;
  animation-delay: 0s;
  animation-timing-function: linear;
  -moz-animation-name: starField;
  -moz-animation-duration: 50s;
  -moz-animation-iteration-count: infinite;
  -moz-animation-delay: 0s;
  -moz-animation-timing-function: linear;
  -o-animation-name: starField;
  -o-animation-duration: 50s;
  -o-animation-iteration-count: infinite;
  -o-animation-delay: 0s;
  -o-animation-timing-function: linear;
  z-index:-10
}

@keyframes starField {
  from {
    -webkit-filter: hue-rotate(0deg);
    filter: hue-rotate(0deg);
    -moz-filter: hue-rotate(0deg);
    -o-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(360deg);
    filter: hue-rotate(360deg);
    -moz-filter: hue-rotate(360deg);
    -o-filter: hue-rotate(360deg);
  }
}

.space,
.stars {
  overflow: hidden;
  position: fixed;
  top: 0px;
  left: 0px;
  background:cover;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  z-index: -2;
}

.stars {
  background-image: radial-gradient(2px 2px at 20px 30px, #eee, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 90px 40px, #fff, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 130px 80px, #fff, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0, 0, 0, 0));
  background-repeat: repeat;
  background-size: 200px 200px;
  animation: zoom 10s infinite;
  opacity: 0;
}

.stars:nth-child(1) {
  background-position: 50% 50%;
  animation-delay: 0s;
}

.stars:nth-child(2) {
  background-position: 20% 60%;
  animation-delay: 1s;
}

.stars:nth-child(3) {
  background-position: -20% -30%;
  animation-delay: 2s;
}

.stars:nth-child(4) {
  background-position: 40% -80%;
  animation-delay: 3s;
}

.stars:nth-child(5) {
  background-position: -20% 30%;
  animation-delay: 4s;
}

@keyframes zoom {
  0% {
    opacity: 0;
    transform: scale(0.5);
    animation-timing-function: ease-in;
  }
  85% {
    opacity: 1;
    transform: scale(2.8);
    animation-timing-function: linear;
  }
  100% {
    opacity: 0;
    transform: scale(3.5);
  }
}
</style>
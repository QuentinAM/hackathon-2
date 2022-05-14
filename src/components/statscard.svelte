<script>
    export let money_earned;
    export let goal;
    export let total_contributor;
    export let day_left;
    export let crypto_used;
    export let crypto_link;
</script>

<section class="stats-card">
    <div class="stats">
      <div class="each-stat">
        <h1 class="top text-slate-200">{money_earned}</h1>
        <p class="bot text-gray-500 dark:text-gray-400">/{goal} usdc</p>
      </div>
      <div class="vert-line1"></div>
      <div class="each-stat">
        <h1 class="top text-slate-200">{total_contributor}</h1>
        <p class="bot text-gray-500 dark:text-gray-400">total backers</p>
      </div>
      <div class="vert-line2"></div>
      <div class="each-stat">
        <h1 class="top text-slate-200">{day_left}</h1>
        <p class="bot text-gray-500 dark:text-gray-400">days left</p>
      </div>
      <div class="vert-line3"></div>
      <div class="each-stat">
        <h1 class="top text-slate-200">{crypto_used}</h1>
        <p class="bot">
            <img class="w-6 h-6" src={crypto_link} alt="">
        </p>
      </div>
    </div>
  </section>

<style>
    .stats-card {
  position: relative;
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  grid-column: content-start/content-end;
  grid-row: info-end/stat-end;
}

.stats-card .stats {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.stats-card .stats .each-stat {
  flex-basis: 30%;
}

.stats-card .stats .each-stat h1 {
  font-size: 2rem;
}

.stats-card .stats .each-stat p {
  padding-top: 0.4rem;
}

.stats-card .stats .vert-line1 {
  border-left: 2px solid darkgrey;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 17%;
  opacity: 0.2;
}

.stats-card .stats .vert-line2 {
  border-left: 2px solid darkgrey;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 44%;
  opacity: 0.2;
}

.stats-card .stats .vert-line3 {
  border-left: 2px solid darkgrey;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 67%;
  opacity: 0.2;
}

.stats-card .bar {
  display: flex;
  padding-top: 2rem;
  width: 100%;
}

.stats-card .bar .hr1 {
  width: 80%;
  background-color: var(--Moderate-cyan);
  height: 10px;
  border: none;
  border-radius: 10px;
}

.stats-card .bar .hr2 {
  width: 20%;
  background-color: #f5f5f5;
  height: 10px;
  border: none;
  border-radius: 0 10px 10px 0;
}

@media (max-width: 700px) {
  .stats-card .stats {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .stats-card .stats .each-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .stats-card .stats .vert-line1 {
    margin: 1rem 0;
    border-left: none;
    border-bottom: 2px solid darkgrey;
    position: static;
    width: 30%;
    opacity: 0.2;
  }

  .stats-card .stats .vert-line2 {
    margin: 1rem 0;
    border-left: none;
    border-bottom: 2px solid darkgrey;
    position: static;
    width: 30%;
    opacity: 0.2;
  }

  .stats-card .stats .vert-line3 {
    margin: 1rem 0;
    border-left: none;
    border-bottom: 2px solid darkgrey;
    position: static;
    width: 30%;
    opacity: 0.2;
  }
}
</style>
<template>
  <div class="pagespeed">
    <div class="pagespeed__header">
      <div>
        <h1 class="pagespeed__heading">Loom</h1>
        <span class="pagespeed__subheading">Page Speed Insights Results</span>
        <SearchBar @webPageEntered="findPagespeed"></SearchBar>
      </div>
      <div class="pagespeed__buttons">
        <Btn class="pagespeed__viewdetails" text="view details" v-on:keyup.13="findPagespeed" modifier="inverse" href />
        <Btn class="pagespeed__visitwebsite" text="visit website" href />
      </div>
    </div>

    <div class="pagespeed__metrics">
      <div class="pagespeed__content">
        <div>{{ pageStats.score }}</div>
        <div>SCORE</div>
        <div>Lorem ipsum</div>
      </div>
      <div class="pagespeed__content">
        <div>{{ pageStats.contentful }}</div>
        <div>First Contentful Paint</div>
        <div>{{ pageStats.index }}</div>
        <div>Speed Index</div>
        <div>{{ pageStats.interactive }}</div>
        <div>Time To Interactive</div>
      </div>
      <div class="pagespeed__content">
        <div>{{ pageStats.meaningful }}</div>
        <div>First Meaningful Paint</div>
        <div>{{ pageStats.cpuidle }}</div>
        <div>First CPU Idle</div>
        <div>{{ pageStats.latency }}</div>
        <div>Estimated Input Latency</div>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "./button/Btn";
import SearchBar from "./SearchBar";

export default {
  name: "Pagespeed",
  components: {
    Btn,
    SearchBar
  },
  data() {
    return {
      pageStats: []
    };
  },
  methods: {
    findPagespeed(searchTerm) {
      let query = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${searchTerm}`;

      fetch(query)
        .then(response => response.json())
        .then(json => {
          let rawScore = json.lighthouseResult.categories["performance"].score;
          let mainScore = rawScore * 100;
          this.pageStats = {
            score: mainScore,
            contentful:
              json.lighthouseResult.audits["first-contentful-paint"]
                .displayValue,
            index:
              json.lighthouseResult.audits["speed-index"].displayValue,
            interactive:
              json.lighthouseResult.audits["interactive"].displayValue,
            meaningful:
              json.lighthouseResult.audits["first-meaningful-paint"]
                .displayValue,
            cpuidle:
              json.lighthouseResult.audits["first-cpu-idle"].displayValue,
            latency:
              json.lighthouseResult.audits["estimated-input-latency"]
                .displayValue
          };
        });
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/_variables";

.pagespeed {
  background: $global-background;
  padding: 2rem 6rem 4rem;
  height: 100vh;
  width: 80vw;
  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 2rem 0rem 2rem 0rem;
  }
  &__buttons {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 2.5rem 0rem 0rem 5rem;
  }
  &__viewdetails{
    margin: 0rem 1rem 0rem 0rem;
  }
  &__visitwebsite{
    margin: 0rem 0rem 0rem 1rem;
  }
  &__heading {
    text-transform: uppercase;
    font-size: 4vw;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
  }
  &__subheading {
    text-transform: capitalize;
    font-size: 1.5vw;
    font-weight: 500;
    font-family: "Raleway", sans-serif;
  }
  &__metrics {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: space-between;
    background: white;
    padding: 1rem 0rem 0rem 0rem;
    box-shadow: $global-box-shadow;
    transition: ease-in-out 0.3s;
    &:hover {
      transform: scale(1.02);
      transition: ease-in-out 0.3s;
    }
  }
  &__content{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: space-between;
    background: white;
  }
}
</style>
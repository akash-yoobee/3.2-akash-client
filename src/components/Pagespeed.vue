<template>
  <div class="pagespeed">
    <ProjectHeader />
      <div>
        <h1 class="pagespeed__heading">Loom</h1>
        <span class="pagespeed__subheading">Page Speed Insights Results</span>
      <!-- <div class="pagespeed__buttons">
        <Btn
          class="pagespeed__viewdetails"
          text="view details"
          v-on:keyup.13="findPagespeed"
          modifier="inverse"
          href
        />
        <Btn class="pagespeed__visitwebsite" text="visit website" href /> -->
      </div>

    <div class="pagespeed__metrics">
      <div class="pagespeed__content">
        <div class="pagespeed__maindata">{{ pageStats.score }}</div>
        <div class="pagespeed__mainscore">score</div>
        <div class="pagespeed__maindescription">
          Derived from the
          <strong>Chrome User Experience Report</strong> (CrUX).
          <br />
          <br />The CrUX is
          <strong>powered by real user measurement</strong> of key user experience metrics across the public web, aggregated from users who have opted-in to syncing their browsing history, and have usage statistic reporting enabled.
        </div>
      </div>
      <div class="pagespeed__content">
        <div class="pagespeed__fielddata">{{ pageStats.contentful }}</div>
        <div class="pagespeed__metricsdescription">First Contentful Paint</div>
        <div class="pagespeed__fielddata">{{ pageStats.index }}</div>
        <div class="pagespeed__metricsdescription">Speed Index</div>
        <div class="pagespeed__fielddata">{{ pageStats.interactive }}</div>
        <div class="pagespeed__metricsdescription">Time To Interactive</div>
      </div>
      <div class="pagespeed__content">
        <div class="pagespeed__fielddata">{{ pageStats.meaningful }}</div>
        <div class="pagespeed__metricsdescription">First Meaningful Paint</div>
        <div class="pagespeed__fielddata">{{ pageStats.cpuidle }}</div>
        <div class="pagespeed__metricsdescription">First CPU Idle</div>
        <div class="pagespeed__fielddata">{{ pageStats.latency }}</div>
        <div class="pagespeed__metricsdescription">Estimated Input Latency</div>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "./button/Btn";
import { EventBus } from "../main";

export default {
  name: "Pagespeed",
  components: {
    Btn
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
          let mainScore = (rawScore * 100).toFixed(0);
          this.pageStats = {
            score: mainScore,
            contentful:
              json.lighthouseResult.audits["first-contentful-paint"]
                .displayValue,
            index: json.lighthouseResult.audits["speed-index"].displayValue,
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
  },
  created: function() {
    this.findPagespeed("https://www.google.com/");
    EventBus.$emit("changePage", "list");
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/_variables";

.pagespeed {
  background: $global-background;
  padding: 2rem 6rem 4rem;
  height: 100vh;
  width: 78vw;
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
  &__viewdetails {
    margin: 0rem 1rem 0rem 0rem;
  }
  &__visitwebsite {
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
    font-size: 1.6vw;
    font-weight: 500;
    font-family: "Raleway", sans-serif;
  }
  &__metrics {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: space-between;
    background: white;
    padding: 2.5rem 1rem 2rem 1rem;
    box-shadow: $global-box-shadow;
    transition: ease-in-out 0.3s;
    &:hover {
      transform: scale(1.02);
      transition: ease-in-out 0.3s;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: space-between;
    background: white;
    width: 33%;
  }
  &__maindata {
    font-size: 1.6vw;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    padding: 2.2em 0 0 2.3em;
    margin: 0 0 0 2em;
    color: #2dbe60;

    background-image: url("../assets/images/scoreoutline.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 6em 6em;
    border-radius: 50%;
    height: 6em;
    width: 6em;
  }
  &__mainscore {
    text-transform: uppercase;
    font-size: 1.5vw;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
    padding: 0 0 0 3vw;
    margin: 0 0 0 1.6em;
  }
  &__maindescription {
    font-size: 0.9vw;
    font-weight: 300;
    font-family: "Raleway", sans-serif;
    padding: 0 4vw 0 3vw;
  }
  &__fielddata {
    font-size: 0.9vw;
    font-weight: 600;
    font-family: "Raleway", sans-serif;
    white-space: nowrap;
    text-align: center;
    padding: 2em 0 0 0;
    margin: 0 0 0 9em;

    background: white;
    border: 0.25em solid #2dbe60;
    border-radius: 50%;
    height: 6em;
    width: 6em;
  }
  &__metricsdescription {
    font-size: 0.9vw;
    font-weight: 600;
    font-family: "Raleway", sans-serif;
    text-transform: capitalize;
    white-space: nowrap;
    text-align: center;
    margin: 1em 0 2em 0;
  }
}
</style>
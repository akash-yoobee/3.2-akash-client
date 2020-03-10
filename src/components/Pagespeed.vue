<template>
  <div class="pagespeed">
    <div class="pagespeed__header">
      <div>
        <h1 class="pagespeed__heading">Loom</h1>
        <span class="pagespeed__subheading">Page Speed Insights Results</span>
        <SearchBar @webPageEntered="findPagespeed"></SearchBar>
      </div>
      <div class="pagespeed__buttons">
        <Btn text="view details" v-on:keyup.13="findPagespeed" href />
        <Btn text="visit website" href />
      </div>
    </div>

    <div class="pagespeed__metrics">
        <div v-for="data in metrics" :key="data.name">
          <img :src="data.image" />
        </div>
    </div>
  </div>
</template>

<script>
import Btn from "./button/Btn";
import SearchBar from './SearchBar';
import axios from 'axios';
// Pagespeed akash.yoobee
// const API_KEY = 'AIzaSyBNzFKwrGRyG0AUOtWkaWKDhRnPqKMbHI0';

export default {
  name: "Pagespeed",
  components: {
    Btn,
    SearchBar
  },
  data() {
    return {
      metrics: [
        {
          name: "metric 1",
          image: "https://i.ibb.co/WvmLyJY/image.png"
        },
        {
          name: "metric 2",
          image: "https://i.ibb.co/x3fNkhm/image.png"
        }
      ],
      pageStats: []
    };
  },
  methods: {
    findPagespeed(searchTerm) {
      axios.get('https://www.googleapis.com/pagespeedonline/v5/runPagespeed', {
        params: {
        url: encodeURIComponent(searchTerm)
        }
      }).then(response => {
        this.pageStats = response.data;
        console.log(this.pageStats);
      });
    }
  //   findPagespeedold(searchTerm) {
  //   const url = setUpQuery(searchTerm);
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(json => {
  //       const lighthouse = json.lighthouseResult;
  //       const lighthouseMetrics = {
  //         'Page tested': json.id,
  //         'Main Score': lighthouse.categories['performance'].score,
  //         'First Contentful Paint': lighthouse.audits['first-contentful-paint'].displayValue,
  //         'Speed Index': lighthouse.audits['speed-index'].displayValue,
  //         'Time To Interactive': lighthouse.audits['interactive'].displayValue,
  //         'First Meaningful Paint': lighthouse.audits['first-meaningful-paint'].displayValue,
  //         'First CPU Idle': lighthouse.audits['first-cpu-idle'].displayValue,
  //         'Estimated Input Latency': lighthouse.audits['estimated-input-latency'].displayValue
  //       };
  //       showLighthouseContent(lighthouseMetrics);
  //       console.log(this.json);
  //     });
  //   },
  //   setUpQuery(searchTerm) {
  //   const api = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
  //   const parameters = {
  //     url: encodeURIComponent(searchTerm)
  //   };
  //   let query = `${api}?`;
  //   for (key in parameters) {
  //     query += `${key}=${parameters[key]}`;
  //   }
  //   return query;
  // },
  // showLighthouseContent(lighthouseMetrics) {
  //   const lighthouseHeader = document.createElement('h2');
  //   lighthouseHeader.textContent = "Pagespeed Results";
  //   document.body.appendChild(lighthouseHeader);
  //   for (key in lighthouseMetrics) {
  //     const p = document.createElement('p');
  //     p.textContent = `${key}: ${lighthouseMetrics[key]}`;
  //     document.body.appendChild(p);
  //   }
  // }
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5rem;
    padding: 2rem 0rem 0rem 35rem;
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
    font-weight: 400;
    font-family: "Raleway", sans-serif;
  }
  &__metrics {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: white;
    padding: 1rem 0rem 0rem 0rem;
    box-shadow: $global-box-shadow;
    transition: ease-in-out 0.3s;
    &:hover {
      transform: scale(1.02);
      transition: ease-in-out 0.3s;
    }
  }
}
</style>
<template>
  <div id="app" class="container-fluid">
    <!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "e382ce12a7bf4999a0dcd57213be9661"}'></script><!-- End Cloudflare Web Analytics -->
    <b-jumbotron header="Franciscan.live BETA"
                 lead="BETA1 FRANCISCAN.LIVE SITE, LAUNCH TO FRANCISCAN.LIVE THURS MAR 25">
    </b-jumbotron>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  mounted () {

  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #21412a;
  margin-top: 15px;
}

.ellipse, .jumbotron h1 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fixed-16-9 {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  background: black;
}
.fixed-16-9 > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.list-group-item.active {
  background-color: #21412a;
  border-color: #000;
}

@media (max-width: 767px) {
  .col-sm-0 {
    display: none;
  }
}

#boxcast-container .boxcast-well {
  /* reset */
  border: none;
  box-shadow: none;
  text-align: left;
  padding: 0;
  margin: 0;

  /* clean */
  margin-top: 15px;
  padding: 15px;
}
</style>

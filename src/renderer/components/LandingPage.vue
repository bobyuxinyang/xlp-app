<template>
  <div id="wrapper">
    <img id="logo" src="~@/assets/toyhouse.png" alt="electron-vue">
    <main>
      <div class="left-side">
        <span class="title">
          Welcome to Toyhouse APP
        </span>
        <div class="doc">
          <div class="title running" v-if="isDockerRunning">Docker is running</div>
          <div class="title not-running" v-if="!isDockerRunning">Docker is NOT running</div>
        </div>
      </div>

      <div class="right-side">
      </div>
    </main>
  </div>
</template>

<script>
  import docker from '../../js/docker'

  export default {
    name: 'landing-page',
    components: { },
    mounted: function () {
      this.$nextTick(function () {
        setInterval(this.refresh, 1000)
      })
    },
    data () {
      return {
        isDockerRunning: false
      }
    },
    methods: {
      async refresh () {
        await docker.setup()
        this.isDockerRunning = docker.getClient() !== null
      }
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  img#logo {
    height: 80px;
    width: 80px;
  }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }
  .title.running {
    color: green;
  }
  .title.not-running {
    color: red;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }
</style>

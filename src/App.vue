<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
    ul,li{
        list-style-type: none;
        padding-inline-start: 0;
    }
    #app {
        width: 100%;
        height: auto;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>

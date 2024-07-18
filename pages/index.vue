<template>
  <v-row>
    <v-col cols="8" class="frame-content px-6 py-6">
      <products/>
    </v-col>
    <v-col cols="4" class="frame-content px-6 py-6 white">
      <order/>
    </v-col>
  </v-row>
</template>


<script>
</script>

<style scoped>
html, body{
  padding: 0;
  overflow: hidden !important;
}
.frame-content{
  height: 95vh;;
  overflow-y: auto;
}

.frame-content::-webkit-scrollbar {
  width: 5px;
}

.frame-content::-webkit-scrollbar-track {
  background: #fff6f6;
  border-radius: 100px;
}

.frame-content::-webkit-scrollbar-thumb {
  background: #f5b7b7;
  border-radius: 100px;
}
</style>

<template>
    <div>
      <v-app-bar
      app
      color="teal"
      dark
      rounded="lg"
    >
      <v-tabs center-active centered color="purple">
        <v-tab @click="gotoHome">今日涨幅</v-tab>
        <v-tab @click="gotoST"> ST板块 </v-tab>
        <v-tab @click="gotoLong"> 龙虎版 </v-tab>
      </v-tabs>
    </v-app-bar>
    </div>

</template>

<script>
  export default {
    data() {
      return {
      }
    },
    created(){
      this.getTopBarType()
    },
    methods: {

        gotoST() {
          this.$router.push(`/STStock`).catch((err) => err)
        },
        gotoLong(){
          this.$router.push(`/LongHu`).catch((err) => err)
        },
        gotoHome(){
          this.$router.push(`/`).catch((err) => err)
        }
    }
  }
</script>

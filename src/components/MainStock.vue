<template>
    <v-app app>
        <v-main>
            <v-container >
                <v-col
                    v-for="(ate, akey) in stockList"
                    :key="akey"
                >
                    <template>
                        <v-alert
                            color="green"
                            class="text-center elevation-12"
                        >
                        {{ ate.title }} 
                        </v-alert>
                        <v-data-table
                            :headers="ate.tableheader"
                            :items="ate.tabledesert"
                            :items-per-page = 200
                            hide-default-footer
                            class="elevation-12"
                        >
                            <template v-slot:[`item.percent`]="{ item }">
                                <div style="color:red">
                                    {{ item.percent }}
                                </div>
                            </template>
                            <template v-slot:[`item.name`]="{ item }">
                                <a
                                    :href="['https://xueqiu.com/S/'+item.symbol]"
                                    target="_blank"
                                >
                                    {{ item.name }}
                                </a>
                            </template>
                        </v-data-table>
                    </template>
                </v-col>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
  export default {
    data () {
      return {
        stockList:[]
      }
    },
    methods: {
      getColor (calories) {
        if (calories > 400) return 'red'
        else if (calories > 200) return 'orange'
        else return 'green'
      },
      async getStockList(){
        var resp = await this.$http.get(`/stockserver/getpage`)
        this.stockList = resp.data
        console.log(this.stockList)
      }
    },
    mounted() {
        this.getStockList()
    },
  }
</script>

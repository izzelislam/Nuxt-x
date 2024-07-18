<template>
  <v-row>
    <v-col cols="12">
      <h2>Order</h2>
      <v-list>
        <v-list-item v-for="(item, index) in cartItems" :key="index">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ currency(item.price) }}
              <v-btn x-small color="success" @click="addQty(item.id)">
                <v-icon>mdi-chevron-up</v-icon>
              </v-btn>
              {{ item.quantity }}
              <v-btn x-small color="error" @click="reduceQty(item.id)">
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn x-small icon color="error" @click="removeItem(item.id)">
              <v-icon small>mdi-close-thick</v-icon>
            </v-btn>
            <v-list-item-title>{{ currency(calculateTotal(item.price, item.quantity)) }}</v-list-item-title>
          </v-list-item-action>
        </v-list-item>
        
        <v-list-item class="text-h6 black--text grey lighten-2" v-if="cartItems.length > 0">
          <v-list-item-content>
            <v-list-item-title>Sub Total</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-title>{{ currency(calculateSubTotal) }}</v-list-item-title>
          </v-list-item-action>
        </v-list-item>

        <v-list-group v-if="cartItems.length > 0" :value="false" class="black--text grey lighten-3">
          <template v-slot:activator>
            <v-list-item-content class="text-h6">
              <v-list-item-title>Additional</v-list-item-title>
            </v-list-item-content>
          </template>
          <template  v-for="(item, index) in additionals">
            <v-list-item :key="index" disabled class="black--text">
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
                <v-list-item-subtitle v-if="item.mode == 'percentage'">
                  {{ item.value }} %
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-title v-if="item.mode == 'fix'">{{ currency(item.value) }}</v-list-item-title>
                <v-list-item-title v-else-if="item.mode == 'percentage'">{{ currency(calculatePercentage(item.value)) }}</v-list-item-title>
              </v-list-item-action>
            </v-list-item>
          </template>
        </v-list-group>

        <v-list-item class="text-h6 black--text grey lighten-2" v-if="cartItems.length > 0">
          <v-list-item-content>
            <v-list-item-title>Total</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-title>{{ currency(calculateAll) }}</v-list-item-title>
          </v-list-item-action>
        </v-list-item>
        
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
  import { mapState, mapGetters, mapActions } from "vuex"

  export default {
    methods: {
      currency(val){
        let currency = new Intl.NumberFormat('id', { style: 'currency', currency: 'IDR' })
        return currency.format(val)
      },
      ...mapActions({
        addQty : 'carts/addQty',
        reduceQty : 'carts/reduceQty',
        removeItem : 'carts/removeItem'
      })
    },
    computed: {
      ...mapState({
        items : state => state.carts.items,
        additionals : state => state.carts.additionals
      }),
      ...mapGetters({
        cartItems : 'carts/cartItems',
        calculateTotal : 'carts/calculateTotal',
        calculateSubTotal : 'carts/calculateSubTotal',
        calculatePercentage : 'carts/calculatePercentage',
        calculateAll : 'carts/calculateAll',
      }),
    }
  }
</script>
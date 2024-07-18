<template>
  <section>
    <v-row align="center">
      <v-col cols="10">
        <v-autocomplete
          label="Product"
          placeholder="start typing to search"
          :search-input.sync="search"
          :loading="isLoading"
          :items="itemSearch"
          :item-text="'title'"
          :item-value="'id'"
          v-model="selectedSearch"
          return-object
          hide-no-data
        >

        </v-autocomplete>
      </v-col>

      <v-col cols="2">
        <v-menu>
          <template v-slot:activator="{on:category}">
            <v-btn v-on="category" color="primary">
              Category
            </v-btn>
          </template>
          <v-list>
            <v-list-item-group >
              <v-list-item  
                v-for="(category, index) in categories" 
                :key="index" 
                :value="category.id" 
                :disabled="categoryId === category.id"
                @change="updateCategoryId(category.id)"
              >
                <v-list-item-title>{{ category.title }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </v-col>

    </v-row>
    
    <v-row>
      <v-col cols="2" v-for="(product, index) in filteredProducts" :key="index">
        <v-card :title="product.title" :ripple="true" class="m-2" @click="addToCart(product.id)">
          <v-card-actions>
            <v-img :src="require(`@/assets/images/products/${product.thumbnile}`)"></v-img>
          </v-card-actions>
          <v-card-text align="center" class="product-title">
            {{ product.title }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default ({
data(){
  return {
    search: null,
    isLoading: false,
    itemSearch:[],
    selectedSearch: ''
  }
},
computed: {
  filteredProducts(){
    if (this.categoryId){
      return this.products.filter(product => product.categoryId === this.categoryId)
    }else if (this.selectedSearch){
      return this.products.filter(product => product.title.toLowerCase() == this.selectedSearch.title.toLowerCase())
    }
    return this.products
  },
  ...mapState({
    products: state => state.products.products,
    categories: state => state.products.categories,
    categoryId: state => state.products.categoryId
  })
},
watch: {
  search(val){
    this.isLoading = true
    setTimeout(() => {
      this.categoryId = null
      this.itemSearch = this.products.filter(product => product.title.toLowerCase().includes(val.toLowerCase()))
      this.isLoading = false
    }, 1000)
  }
},
methods: {
  ...mapActions({
    updateCategoryId: 'products/updateCategoryId',
    addToCart: 'carts/addToCart'
  })
}
});
</script>

<style scoped>
  .product-title{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
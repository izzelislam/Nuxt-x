export const state = () => ({
  items: [],
  additionals : [
    {
      title : 'Tax',
      mode  : 'percentage',
      value : 10
    },
    {
      title : 'Service Charge',
      mode  : 'fix',
      value : 50000
    },
  ]
})

export const getters = {
  cartItems: (state, getters, rootState) => {
    return state.items.map(({id, quantity}) => {
      let product = rootState.products.products.find(product => product.id === id)
      return {
        ...product,
        quantity
      }
    })
  },
  calculateTotal: () => (price, quantity) => {
    return price * quantity
  },

  calculateSubTotal: (state, getters) => {
    return getters.cartItems.reduce((acc, item) => {
      return acc + getters.calculateTotal(item.price, item.quantity)
    }, 0)
  },

  calculatePercentage: (state, getters) => (value) => {
    return (getters.calculateSubTotal * value) / 100
  },

  sumAddtional: (state, getters) => {
    if (state.additionals.length){
      return state.additionals.reduce((total, item) => {
        if (item.mode == 'percentage'){
          return total + getters.calculatePercentage(item.value)
        }
        return total + item.value
      }, 0)
    }
  },

  calculateAll: (state, getters) => {
    return getters.calculateSubTotal + getters.sumAddtional
  }
}

export const mutations = {
  addItem(state, id) {
    state.items.push({
      id: id,
      quantity: 1
    })
  },
  addQty(state, id) {
    state.items.find(item => item.id === id).quantity++
  },

  reduceQty(state, id) {
    if (state.items.find(item => item.id === id).quantity > 1) {
      state.items.find(item => item.id === id).quantity--
    }
  },

  removeItem(state, id) {
    let index = state.items.find(item => item.id === id)
    state.items.splice(index, 1)
  }
}

export const actions = {
  addToCart({ commit, state }, id) {
    const isExist = state.items.find(item => item.id === id)

    if (isExist) {
      commit('addQty', id)
    }else{
      commit('addItem', id)
    }
  },

  addQty({ commit }, id) {
    commit('addQty', id)
  },

  reduceQty({ commit }, id) {
    commit('reduceQty', id)
  },

  removeItem({ commit }, id) {
    commit('removeItem', id)
  }
}
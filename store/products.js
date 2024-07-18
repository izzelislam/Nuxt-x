export const state = () => ({
  products : [
    { id : 1, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 2, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 3, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 4, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 5, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 6, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 7, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 8, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 9, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 2 },
    { id : 10, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 2 },
    { id : 11, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 2 },
    { id : 12, title: 'Samsung', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 2 },
    { id : 13, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 2 },
    { id : 14, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 2 },
    { id : 15, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 2 },
    { id : 16, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 2 },
    { id : 17, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 18, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 19, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 20, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 21, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 22, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 23, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 24, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 25, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 26, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 27, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 28, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 29, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 30, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 31, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 32, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 33, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 34, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 34, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 36, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 37, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 38, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
    { id : 39, title: 'Asus Zenfone', thumbnile: 'asus-zenfone.png', price: 2000000, categoryId: 1 },
  ],
  categories: [
    {id: false, title: 'all'},
    {id: 1, title: 'Smartphone'},
    {id: 2, title: 'Camera'},
    {id: 3, title: 'Tv'},
  ],
  categoryId: 0
})

export const mutations = {
  updateCategoryId(state, categoryId){
    state.categoryId = categoryId
  }
}

export const actions = {
  updateCategoryId({commit}, categoryId){
    commit('updateCategoryId', categoryId)
  }
}
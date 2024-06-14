export default {
    state: {
        count: 0,
        cartItems: [],

    },
    actions: {
        fetchData({ commit }) {
            setTimeout(() => {
                commit('SET_CART', [

                    {
                        id: 1,
                        name: "product1",
                        price: 100
                    },
                    {
                        id: 2,
                        name: "product2",
                        price: 200
                    },
                    {
                        id: 3,
                        name: "product3",
                        price: 300
                    },
                    {
                        id: 4,
                        name: "product4",
                        price: 400
                    },

                ])
            }, 2000);
        }
    },
    getters: {
        cartItems(state) {
            return state.cartItems
        },
        countProduct(state) {
            return state.cartItems.length
        },
        totalPrice(state) {
            return state.cartItems.reduce((acc, current) => acc + current.price, 0)
        }
    },
    mutations: {
        INCREMENT(state) {
            state.count++
        },
        DECREMENT(state) {
            state.count--
        },
        ADD_TO_CART(state, product) {
            state.cartItems.push(product)
        },
        SET_CART(state, productList) {
            state.cartItems = productList
        }
    }
}
const app = new Vue({
    el: "#app",
    data: {
        showCart: false,
        products: [],
        cartItems: [],
        filtered: [],
        imgCatalog: 'https://placehold.it/200x150',
        imgCart: 'https://placehold.it/50x100'
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                })
        },
        addProduct(product) {
            this.getJson(`addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        let find = this.cartItems.find(el => el.id_product === product.id_product);
                        if (find) {
                            find.quantity++;
                        } else {
                            let prod = Object.assign({ quantity: 1 }, product);
                            this.cartItems.push(prod)
                        }
                    } else {
                        alert('Error');
                    }
                })
        }
    },
    mounted() {
        this.getJson(`/getProducts.json`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el)
                }
            })
    }
})
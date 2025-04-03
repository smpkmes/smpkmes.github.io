var app = new Vue({  
    el: "#app", 
    data:{ 
        products: [
            {
                id: 1,
                title: "Dasher II",
                short_text: 'High-yielding variety with excellent flavor.',
                image: 'images/cucumber1.png',
                desc: "Known for its dark green skin and crisp texture.",
                plant: [
                    "Strong growth with good vine coverage.",
                    "High productivity with abundant fruiting.",
                    "Early maturing variety."
                ],
                fruit: [
                    "Long shelf life both on the vine and after harvest.",
                    "Dark green, smooth skin.",
                    "Average fruit size: 6-8 inches."
                ]
            },
            {
                id: 2,
                title: "Marketmore 76",
                short_text: 'Classic slicing cucumber with reliable performance.',
                image: 'images/cucumber2.png',
                desc: "Resistant to common cucumber diseases and adaptable to various growing conditions.",
                plant: [
                    "Vigorous growth habit with strong disease resistance.",
                    "Medium-sized vines and moderate water requirements.",
                    "Produces well in cooler climates."
                ],
                fruit: [
                    "Bright green skin with small spines.",
                    "Uniform cylindrical shape ideal for slicing.",
                    "Good for fresh consumption and pickling."
                ]
            },
            {
                id: 3,
                title: "Straight Eight",
                short_text: 'Traditional American favorite for its straight shape.',
                image: 'images/cucumber3.png',
                desc: "Versatile variety suitable for slicing, salads, and pickling.",
                plant: [
                    "Sturdy plants with vigorous growth.",
                    "Good resistance to diseases and pests.",
                    "Mid-season maturity."
                ],
                fruit: [
                    "Smooth, dark green skin with minimal ridges.",
                    "Straight, uniform shape with crisp flesh.",
                    "Excellent flavor for fresh eating."
                ]
            },
            {
                id: 4,
                title: "Armenian",
                short_text: 'Long, slender cucumbers with a mild taste.',
                image: 'images/cucumber4.png',
                desc: "Known for its unique appearance and delicate flavor.",
                plant: [
                    "Vine-type growth with sprawling habit.",
                    "Requires warm conditions and regular watering.",
                    "Late season variety."
                ],
                fruit: [
                    "Thin, light green skin with longitudinal ridges.",
                    "Can grow up to 12 inches in length.",
                    "Tender flesh suitable for salads."
                ]
            },
            {
                id: 5,
                title: "Lemon Cucumber",
                short_text: 'Round, yellow cucumbers with a mild, sweet flavor.',
                image: 'images/cucumber5.png',
                desc: "Distinctive for its lemon-like appearance and refreshing taste.",
                plant: [
                    "Compact vines with good disease resistance.",
                    "Moderate water needs and fertile soil.",
                    "Early to mid-season harvest."
                ],
                fruit: [
                    "Pale yellow, round fruits resembling small lemons.",
                    "Thin skin with juicy, mild-flavored flesh.",
                    "Ideal for fresh salads and garnishes."
                ]
            }
        ],
        product: {},
        btnVisible: 0 
    },
    mounted() {
        this.loadProductFromHash();
        window.addEventListener("hashchange", this.loadProductFromHash);
    },
    methods: {
        loadProductFromHash() {
            const hash = window.location.hash.replace("#", ""); // Получаем id из хеша
            const productId = parseInt(hash); 

            if (!isNaN(productId)) {
                this.product = this.products.find(p => p.id === productId) || {}; 
            }
        }
    }, 
    mounted: function() { 
        this.getProduct();
        this.checkInCart();
    }, 
    methods: { 
        addToCart: function(id) { 
            var cart = [];
            if (window.localStorage.getItem('cart')) {
                cart = window.localStorage.getItem('cart').split(',');
            }

            if (cart.indexOf(String(id)) === -1) {
                cart.push(id);
                window.localStorage.setItem('cart', cart.join(','));
                this.btnVisible = 1; 
            }
        },
        getProduct: function() {
            if (window.location.hash) {
                var id = window.location.hash.replace('#', '');
                if (this.products.length > 0) {
                    for (let i in this.products) {
                        if (this.products[i].id == id) {
                            this.product = this.products[i];
                        }
                    }
                }
            }
        },
        checkInCart: function() {
            let cart = window.localStorage.getItem('cart') ? window.localStorage.getItem('cart').split(',') : [];
            this.btnVisible = cart.includes(String(this.product.id)) ? 1 : 0;
        }
    }
});
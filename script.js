class ProductList {
    constructor(container = '.gallery__items') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
        this.calculateAmountOfGoods();
    }

    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 1000},
            {id: 3, title: 'Keyboard', price: 800},
            {id: 4, title: 'Gamepad', price: 500},
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

    calculateAmountOfGoods() {
        let sum = 0;
        for (let product of this.goods) {
            sum += product.price;
        }
        console.log(sum)
    }
}

class ProductItem{
    constructor(product, img='https://via.placeholder.com/261x280') {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }

    render() {
        return `<div class="item">
                    <div class="item__elements">
                        <div class="item__elements__button">
                            <button class="item__elements__button_cart" id="buttonItem">
                                <i class="fas fa-shopping-cart"></i>
                                Купить
                            </button>
                        </div>
                        <img class="item__elements__img" src="${this.img}" alt="">
                    </div>
                    <div class="item__description">
                        <p class="item__description__name">${this.title}</p>
                        <div class="item__description__own">
                            <span class="item__description__own_price">${this.price} у.е.</span>
                        </div>
                    </div>
                </div>`
    }
}
new ProductList();

class Basket {
    constructor(container = '') {
        this.container = container;
    }

    render() {

    }
}

class BasketItem extends ProductItem{
    constructor(product, img='https://via.placeholder.com/261x280', countOfGood) {
        super(product, img='https://via.placeholder.com/261x280')
        this.countOfGood = countOfGood;
    }

    render() {

    }

    increaseCountOfItem() {

    }

    reduceCountOfItem() {

    }
}

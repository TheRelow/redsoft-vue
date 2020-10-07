<template>
  <div :class="{'product-list__item product': true, 'product_sold': isSold}">
    <div class="product__image">
      <img :src="img" alt="">
    </div>
    <div class="product__content">
      <div class="product__title">
        {{title}}
      </div>
      <div class="product__bottom">
        <div class="product__price">
          <span class="price price_old" v-if="oldPrice">{{oldPrice}} $</span>
          <span class="price">{{currentPrice}} $</span>
        </div>
        <a href="javascript:;" @click="toggleCart" :class="{'btn': true, 'active btn_in-cart': inCart}">{{(inCart) ? 'В корзине' : 'Купить'}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productsListItem',
  props: ['value'],
  data: () => ({
    storageState: null,
    index: null,
    title: null,
    status: null,
    inCart: false,
    oldPrice: false,
    currentPrice: null,
    img: null,
    isSold: false
  }),
  created () {
    this.storageState = localStorage.getItem(this.index)
    this.index = this.value.index
    this.title = this.value.item.name
    this.status = this.value.item.status
    this.oldPrice = this.value.item.price.old
    this.currentPrice = this.value.item.price.current
    this.img = this.value.item.img
    if (this.status === 'sold') {
      this.isSold = true
    }
    if (localStorage.getItem(this.index) === 'null') {
      localStorage.setItem(this.index, this.inCart)
      this.inCart = this.value.item.inCart
    } else if (localStorage.getItem(this.index) === 'false') {
      this.inCart = false
    } else {
      this.inCart = true
    }
  },
  methods: {
    toggleCart () {
      if (this.inCart === false) {
        this.inCart = true
      } else {
        this.inCart = false
      }
      localStorage.setItem(this.index, this.inCart)
    }
  }
}
</script>

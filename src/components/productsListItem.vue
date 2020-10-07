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
        <a href="javascript:;" @click="toggleCart" :class="{'btn': true, 'active btn_in-cart': inCart}">{{ (inCart) ? 'Купить' : 'В корзине'}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productsListItem',
  props: ['value'],
  data: () => ({
    index: null,
    title: null,
    status: null,
    inCart: null,
    oldPrice: false,
    currentPrice: null,
    img: null,
    isSold: false
  }),
  mounted () {
    this.index = this.value.index
    this.title = this.value.item.name
    this.status = this.value.item.status
    this.inCart = this.value.item.inCart
    this.oldPrice = this.value.item.price.old
    this.currentPrice = this.value.item.price.current
    this.img = this.value.item.img
    if (this.status === 'sold') {
      this.isSold = true
    }
  },
  methods: {
    toggleCart () {
      if (this.inCart === false) {
        this.inCart = true
      } else {
        this.inCart = false
      }
      console.log(this.inCart)
    }
  }
}
</script>

<style scoped>

</style>

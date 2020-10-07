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
        <a href="javascript:;" @click="toggleCart()" class="btn" v-if="loading"><loader/></a>
        <a href="javascript:;" @click="toggleCart()" :class="{'btn': true, 'active btn_in-cart': inCart}" v-else>{{(inCart) ? 'В корзине' : 'Купить'}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios/dist/axios.min.js'
import Loader from '@/components/loader'

export default {
  name: 'productsListItem',
  components: { Loader },
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
    isSold: false,
    loading: false
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
      this.loading = true
      axios.get('https://jsonplaceholder.typicode.com/posts/1').then((p) => {
        console.log(p)

        this.loading = false

        if (this.inCart === false) {
          this.inCart = true
        } else {
          this.inCart = false
        }
        localStorage.setItem(this.index, this.inCart)
      })
    }
  }
}
</script>

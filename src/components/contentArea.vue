<template>
  <div class="content">
    <div class="wrapper">
      <div class="h1 content__title">Картины эпохи Возрождения</div>
      <div class="product-list">
        <products-list-item v-for="(item, index) in products" :key="item.name" :value="{item, index}"></products-list-item>
        <div class="product-list__item product-list__item_empty"></div>
        <div class="product-list__item product-list__item_empty"></div>
        <div class="product-list__item product-list__item_empty"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsListItem from '@/components/productsListItem'

import image1 from '../assets/img/p1.jpg'
import image2 from '../assets/img/p2.jpg'
import image3 from '../assets/img/p3.jpg'
import image4 from '../assets/img/p4.jpg'

export default {
  name: 'contentArea',
  components: { ProductsListItem },
  data: () => ({
    products: [
      {
        name: '«Рождение Венеры» Сандро Боттичелли',
        status: 'sale',
        inCart: false,
        img: image1,
        price: {
          current: '1 000 000',
          old: '2 000 000'
        }
      },
      {
        name: '«Тайная вечеря» Леонардо да Винчи',
        status: 'sale',
        inCart: false,
        img: image2,
        price: {
          current: '3 000 000'
        }
      },
      {
        name: '«Сотворение Адама» Микеланджело',
        status: 'sale',
        inCart: true,
        img: image3,
        price: {
          current: '5 000 000',
          old: '6 000 000'
        }
      },
      {
        name: '«Урок анатомии» Рембрандт',
        status: 'sold',
        inCart: false,
        img: image4,
        price: {
          current: '3 000 000'
        }
      }
    ]
  })
}
</script>

<style>

</style>

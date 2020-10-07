<template>
  <div class="content">
    <div class="wrapper">
      <div class="h1 content__title">Картины эпохи Возрождения</div>
      <div class="product-list">
        <div class="product-list__item product">
          <div class="product__image">
            <img src="../assets/img/p1.jpg" alt="">
          </div>
          <div class="product__content">
            <div class="product__title">
              «Рождение Венеры» Сандро Боттичелли
            </div>
            <div class="product__bottom">
              <div class="product__price">
                <span class="price price_old">2 000 000 $</span>
                <span class="price">1 000 000 $</span>
              </div>
              <a href="javascript:;" class="btn">Купить</a>
            </div>
          </div>
        </div>
        <div class="product-list__item product">
          <div class="product__image">
            <img src="../assets/img/p2.jpg" alt="">
          </div>
          <div class="product__content">
            <div class="product__title">
              «Тайная вечеря»  Леонардо да Винчи
            </div>
            <div class="product__bottom">
              <div class="product__price">
                <span class="price">3 000 000 $</span>
              </div>
              <a href="javascript:;" class="btn">Купить</a>
            </div>
          </div>
        </div>
        <div class="product-list__item product">
          <div class="product__image">
            <img src="../assets/img/p3.jpg" alt="">
          </div>
          <div class="product__content">
            <div class="product__title">
              «Сотворение Адама»
              Микеланджело
            </div>
            <div class="product__bottom">
              <div class="product__price">
                <span class="price price_old">6 000 000 $</span>
                <span class="price">5 000 000 $</span>
              </div>
              <a href="javascript:;" class="btn active btn_in-cart">В корзине</a>
            </div>
          </div>
        </div>
        <div class="product-list__item product product_sold">
          <div class="product__image">
            <img src="../assets/img/p4.jpg" alt="">
          </div>
          <div class="product__content">
            <div class="product__title">
              «Урок анатомии»  Рембрандт
            </div>
            <div class="product__bottom">
            </div>
          </div>
        </div>
        <div class="product-list__item product-list__item_empty"></div>
        <div class="product-list__item product-list__item_empty"></div>
        <div class="product-list__item product-list__item_empty"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contentArea'
}
</script>

<style>

</style>

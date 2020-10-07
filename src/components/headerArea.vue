<template>
  <header class="header">
    <div class="wrapper wrapper_header">
      <div class="header__side">
        <img class="logo logo_header" src="../assets/img/logo.svg" alt="">
        <div class="menu">
          <a href="javascript:;" class="link">Каталог</a>
          <a href="javascript:;" class="link">Доставка</a>
          <a href="javascript:;" class="link">Оплата</a>
          <a href="javascript:;" class="link">Контакты</a>
          <a href="javascript:;" class="link">О галерее</a>
        </div>
      </div>
      <div class="header__side">
        <div class="header__search">
          <form class="search-group">
            <input type="text" placeholder="Поиск по названию картины"><a href="javascript:;" class="btn">Найти</a>
          </form>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'headerArea'
}
</script>

<style>

</style>

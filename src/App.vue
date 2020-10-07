<template>
  <div class="page">

    <div class="page__header-and-content">
      <header-area></header-area>
      <content-area></content-area>
    </div>
    <footer-area></footer-area>
  </div>
</template>

<script>
import HeaderArea from '@/components/headerArea'
import ContentArea from '@/components/contentArea'
import FooterArea from '@/components/footerArea'

export default {
  name: 'App',
  components: {
    FooterArea,
    ContentArea,
    HeaderArea
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/reset.scss";
@import "@/assets/styles/default.scss";
@import "@/assets/styles/main.scss";
</style>

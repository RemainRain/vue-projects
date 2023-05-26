<script>
import { defineComponent } from 'vue';
import HeaderBar from '@/components/HeaderBar.vue';

export default defineComponent({
  name: 'index',
  components: { HeaderBar }
});
</script>
<template>
  <HeaderBar/>
  <div class="padding"></div>
  <router-view/>
</template>

<style>
body {
  font-family: "Microsoft YaHei",serif;
  background: #f4f4f4;
  margin: 0;
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}

.page {
  max-width: 1360px;
  margin: 0 auto;
  //border: 1px;
  //padding: 0 15px;
}

.padding {
  height: 76px;
  width: 100vw;
}

.layout_3-10 {
  display: flex;
  margin-top: 20px;
  .left {
    flex: 3;
  }

  .right {
    flex: 10;
    margin-left: 35px;
  }
}
</style>

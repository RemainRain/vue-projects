<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyTitle'
});
</script>

<template>
<div class="title"><slot>Title</slot></div>
</template>

<style scoped lang="scss">
.title {
  color: #2B2A21;
  font-size: 24px;
  border-left: solid 6px #FD6623;
  padding-left: 10px;
  height: 26px;
  display: flex;
  align-items: center;
  line-height: 26px;
  margin-bottom: 22px;
}
</style>

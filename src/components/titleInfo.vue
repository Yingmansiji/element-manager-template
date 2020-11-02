<template>
  <div class="title_info">
    <div class="title">{{ titleMsg }}</div>
  </div>
</template>

<script>
export default {
  name: 'TitleInfo',
  props: ['titleMsg'],
  data() {
    return {}
  },
  computed: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.title_info {
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #B6B6B6;
  height: 20px;
  line-height: 20px;
}

.title_info .title {
  font-size: 16px;
  font-weight: bolder;
}

</style>

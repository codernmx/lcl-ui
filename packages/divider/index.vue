<template>
  <div class="lcl-divider" :class="{ 'lcl-vertical': direction === 'vertical' }" :style="{ 'justify-content': position, 'border-bottom': `1px ${lineStyle} #dcdfe6` }">
    <div class="lcl-divider-text">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'lclDivider',
});
</script>

<script setup>
const props = defineProps({
  position: {
    type: String,
    default: 'center'
  },
  //竖直还是水平
  direction: {
    type: String,
    default: 'horizontal'
  },
  // 实线虚线。。。
  lineStyle: {
    type: String,
    default: 'solid'
  }
})
</script>


<style lang="scss" scoped>
.lcl-divider {
  width: 100%;
  height: 1px;
  box-sizing: border-box;
  margin: 24px 0;
  display: flex;
  align-items: center;
  padding: 0 20px;

  .lcl-divider-text {
    font-size: 14px;
    color: gray;
    border-left: 20px solid white;
    border-right: 20px solid white;
    background-color: white;
  }
}

.lcl-vertical {
  display: inline-block;
  width: 1px;
  height: 14px;
  margin: 0 8px;
  border-top: none;
  border-left: 1px solid #dcdfe6;
  padding: 0;
}


</style>
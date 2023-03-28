<template>
  <div class="experiment-card border-radius-lg my-1 mx-1 hidden">
    <div class="name">{{ item.e_name }}</div>
    <div class="content">{{ item.e_content }}</div>
    <div class="teacher text-grey">任课教师：{{ item.t_name }}</div>
    <div class="room text-grey">实验教室：{{ item.r_name }}</div>
  </div>
</template>

<script lang="ts" setup>
interface Item {
  e_name: string,
  e_content: string,
  r_name: string,
  t_name: string
}
const props = defineProps<{
  item: Item
}>();
</script>
<style lang="scss" scoped>
@import '../../../assets/style/common.scss';

.experiment-card {
  width: 15rem;
  padding: 0.5rem;
  @include border(0.1rem, $primaryBlue);

  .name {
    width: 14rem;
    height: 3rem;
    line-height: 3rem;
    overflow: hidden;
    @include fontSW(1.2rem, 700);
    color: $primaryBlue;
  }

  .content {
    width: 14rem;
    height: 15rem;
    margin-bottom: 1rem;
    overflow: hidden;
    white-space: normal; //设置文字换行
    word-wrap: break-word; //设置数字强制换行
    @include fontSW(1rem, 400);
  }

  .teacher {
    width: 14rem;
    height: 2rem;
    @include fontSW(1rem, 400);
  }

  .room {
    width: 14rem;
    height: 2rem;
    @include fontSW(1rem, 400);
  }
}
</style>
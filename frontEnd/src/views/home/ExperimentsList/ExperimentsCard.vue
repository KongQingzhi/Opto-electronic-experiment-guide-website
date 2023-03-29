<template>
  <div class="experiment-card border-radius-lg my-1 mx-1 hidden">
    <div class="name">{{ item.e_name }}</div>
    <div class="content">{{ item.e_content }}</div>
    <div class="teacher text-grey">任课教师：{{ item.t_name }}</div>
    <div class="room text-grey">实验教室：{{ item.r_name }}</div>
    <ElButton v-if="role" type="primary">删除</ElButton>
    <ElButton type="primary" @click="toExperimentsDetails">进入</ElButton>
  </div>
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus';
import { useRouter } from 'vue-router';
interface Item {
  e_name: string,
  e_content: string,
  r_name: string,
  t_name: string
}
const props = defineProps<{ item: Item }>();
const router = useRouter();
const toExperimentsDetails = () => {
  router.push({
    name: 'experimentsContent',
    query: { ...props.item },
  })
}
const role = JSON.parse(sessionStorage.getItem('user') as string);
</script>
<style lang="scss" scoped>
// @import '../../../assets/style/common.scss';

.experiment-card {
  width: 15rem;
  padding: 1rem;
  border: 0.1rem solid #f8f5f4;

  .name {
    width: 13rem;
    height: 3rem;
    line-height: 3rem;
    overflow: hidden;
    font-size: 1.2rem;
    color: skyblue;
  }

  .content {
    height: 2.5rem;
    margin-bottom: 1rem;
    overflow: hidden;
    white-space: normal; //设置文字换行
    word-wrap: break-word; //设置数字强制换行
    font-size: 1rem;
  }

  .teacher {
    width: 14rem;
    height: 2rem;
    font-size: 0.8rem;
  }

  .room {
    width: 14rem;
    height: 2rem;
    font-size: 0.8rem;
  }
}
</style>
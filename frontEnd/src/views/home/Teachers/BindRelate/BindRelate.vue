<template>
  <PageHeader title="绑定相关" />
  <!-- <SectionHeader title="绑定班级与课程" aside-title="" />
    <SectionHeader title="绑定课程与实验" aside-title="" />
    <SectionHeader title="绑定课程与教师" aside-title="" />
    <select class="border py-1 px-6 rounded-md outline-none" v-model="c_id">
      <option value="" disabled selected></option>
      <option v-for="item in classesList" :value="item.c_id" :label="item.c_name" />
    </select>
    <select class="border py-1 px-6 rounded-md outline-none" v-model="l_id">
      <option value="" disabled selected></option>
      <option v-for="item in lessonsList" :value="item.l_id" :label="item.l_name" />
    </select>
    <select class="border py-1 px-6 rounded-md outline-none" v-model="e_id">
      <option value="" disabled selected></option>
      <option v-for="item in experimentsList" :value="item.e_id" :label="item.e_name" />
    </select>
    <select class="border py-1 px-6 rounded-md outline-none" v-model="t_no">
      <option value="" disabled selected></option>
      <option v-for="item in teachersList" :value="item.t_no" :label="item.t_name" />
    </select>
    <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
      <button type="button" @click=""
        class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">创建课程</button>
    </div> -->
  <div class="grid grid-cols-3 gap-10">
    <div v-for="item in cardList" :key="item.name" @click="router.push({ path: item.path })"
      class="cursor-pointer p-5 col-span-1 rounded-md shadow-sm">
      <div class="rounded-md mx-auto h-96 w-full relative overflow-hidden">
        <img class="absolute z-10 w-full object-cover h-full" src="../../../../assets/image/png/bg.png" alt="">
        <h2 class="w-full absolute bottom-10 text-xl font-bold text-center z-20">
          {{ item.name }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PageHeader from '../../../../components/PageHeader.vue';
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { selectAllClass, selectAllLesson, selectAllExperiments, selectAllTeachers } from '../../../../api/public';
import { bindClassAndLesson, bindExperimentLesson, bindTeacherAndLesson } from '../../../../api/teachers';
import SectionHeader from '../../../../components/SectionHeader.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const cardList = [{
  name: '班级与课程',
  path: 'BindClassAndLesson',
}, {
  name: '课程与教师',
  path: 'BindTeacherAndLesson',
}, {
  name: '课程与实验',
  path: 'BindExperimentLesson',
}]
const user = JSON.parse(sessionStorage.getItem('user') as string);
const classesList = ref();
const lessonsList = ref();
const experimentsList = ref();
const teachersList = ref();
const c_id = ref('');
const l_id = ref('');
const e_id = ref('');
const t_no = ref('');
selectAllClass().then(res => {
  const { msg, data, status } = res.data;
  if (status) {
    classesList.value = data;
  } else {
    ElMessage({
      message: msg,
      type: 'error',
    })
  }
})
selectAllLesson().then(res => {
  const { msg, data, status } = res.data;
  if (status) {
    lessonsList.value = data;
  } else {
    ElMessage({
      message: msg,
      type: 'error',
    })
  }
})
selectAllExperiments().then(res => {
  const { msg, data, status } = res.data;
  if (status) {
    experimentsList.value = data;
  } else {
    ElMessage({
      message: msg,
      type: 'error',
    })
  }
})
selectAllTeachers().then(res => {
  const { msg, data, status } = res.data;
  if (status) {
    teachersList.value = data;
  } else {
    ElMessage({
      message: msg,
      type: 'error',
    })
  }
})
const init = () => {
  c_id.value = '';
  l_id.value = '';
  e_id.value = '';
  t_no.value = '';
}

const handleBindClassAndLesson = async () => {
  bindClassAndLesson({}).then(res => {
    const { msg, status } = res.data;
    if (status) {
      ElMessage({
        message: msg,
        type: 'success',
      })
      init();
    } else {
      ElMessage({
        message: msg,
        type: 'error',
      })
    }
  })
}

const handleBindExperimentLesson = async () => {
  bindExperimentLesson({}).then(res => {
    const { msg, status } = res.data;
    if (status) {
      ElMessage({
        message: msg,
        type: 'success',
      })
      init();
    } else {
      ElMessage({
        message: msg,
        type: 'error',
      })
    }
  })
}

const handleBindTeacherAndLesson = async () => {
  bindTeacherAndLesson({}).then(res => {
    const { msg, status } = res.data;
    if (status) {
      ElMessage({
        message: msg,
        type: 'success',
      })
      init();
    } else {
      ElMessage({
        message: msg,
        type: 'error',
      })
    }
  })
}


</script>
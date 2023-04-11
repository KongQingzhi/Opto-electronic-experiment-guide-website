<template>
    <PageHeader title="我的实验" />
        <div v-for="item in data" class="py-10">
            <SectionHeader :title="item.lessons" :aside-title="item.lessons" />
            <ExperimentsCard v-for="item in 4" :item="item" />
        </div>
</template>

<script lang="ts" setup>
import ExperimentsCard from './ExperimentsCard.vue';
import PageHeader from '../../../../components/PageHeader.vue';
import SectionHeader from '../../../../components/SectionHeader.vue';
const data = [
    {
        lessons: 'udzorhgbishiotgbhos',
        experiments: {
            e_name: '5555555555555555555555',
            e_content: 'iudfbsiugnbohsguhbpsioufhblkasbjsatbklarsotbiosiosbdfsbjobdfgsbjoubdfgzoviadbiuviudfbsiugnbohsguhbpsioufhblkasbjsatbklarsotbiosiosbdfsbjobdfgsbjoubdfgzoviadbiuviudfbsiugnbohsguhbpsioufhblkasbjsatbklarsotbiosiosbdfsbjobdfgsbjoubdfgzoviadbiuviudfbsiugnbohsguhbpsioufhblkasbjsatbklarsotbiosiosbdfsbjobdfgsbjoubdfgzoviadbiuv',
            r_name: 'ajbfvijadbfiuv',
            t_name: 'aubfviujabeiuv',
        }
    },
    {
        lessons: 'udzorhgbishiotgbhos',
        experiments: {
            e_name: '5555555555555555555555',
            e_content: 'iudfbsiugnbohsguhbpsioufhblkasbjsatbklarsotbiosiosbdfsbjobdfgsbjoubdfgzoviadbiuviudfbsiugnbohsguhbpsioufhblkasbjsatbklarsotbiosiosbdfsbjobdfgsbjoubdfgzoviadbiuviudfbsiugnbohsguhbpsioufhblkasbjsatbklarsotbiosiosbdfsbjobdfgsbjoubdfgzoviadbiuviudfbsiugnbohsguhbpsioufhblkasbjsatbklarsotbiosiosbdfsbjobdfgsbjoubdfgzoviadbiuv',
            r_name: 'ajbfvijadbfiuv',
            t_name: 'aubfviujabeiuv',
        }
    },
    {
        lessons: 'udzorhgbishiotgbhos',
        experiments: {
            e_name: '5555555555555555555555',
            e_content: 'iudfbsiugnbohsguhbpsioufhblkasbjsatbklarsotbiosiosbdfsbjobdfgsbjoubdfgzoviadbiuviudfbsiugnbohsguhbpsioufhblkasbjsatbklarsotbiosiosbdfsbjobdfgsbjoubdfgzoviadbiuviudfbsiugnbohsguhbpsioufhblkasbjsatbklarsotbiosiosbdfsbjobdfgsbjoubdfgzoviadbiuviudfbsiugnbohsguhbpsioufhblkasbjsatbklarsotbiosiosbdfsbjobdfgsbjoubdfgzoviadbiuv',
            r_name: 'ajbfvijadbfiuv',
            t_name: 'aubfviujabeiuv',
        }
    }
]
</script>
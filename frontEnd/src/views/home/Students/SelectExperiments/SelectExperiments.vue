<template>
    <div id="experimentsList">
        <div v-for="item in data">
            <div class="border-radius-sm border-grey text-grey title-4" style="padding: 0.5rem 1rem;">{{
                item.lessons }}</div>
            <div class="flex flex-wrap">
                <ExperimentsCard v-for="index in 5" :item="item.experiments" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import ExperimentsCard from './ExperimentsCard.vue';
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
<style lang="scss" scoped>

</style>
<template>
    <div id="Head">
        <div class="logo-title">
            <img src="../../../assets/image/faviorate.ico" alt="">
            <div class="mx-1 title-4 font-weight">基于Vue.js的光电实验指导网</div>
        </div>
        <div class="menu">
            <div v-for="item in menuList" class="menu-item font-weight text-grey border-radius-sm mx-1">
                {{ item }}
            </div>
            <el-dropdown class="my-menu circle mx-2" size="large">
                <img src="../../../assets/image/faviorate.ico" alt="">
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item v-for="item in myMenu">
                            <i class="iconfont" :class="item.icon"></i>
                            <span>{{ item.option }}</span></el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElButton, ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus';
const menuList = ['11111', '22222', '32222', '42222'];
const myMenu = [
    {
        option: '1',
        icon: 'icon-arrow_right_circle_line'
    },
    {
        option: '2',
        icon: 'icon-navigation_line'
    }, {
        option: '3',
        icon: 'icon-lightning_line'
    }
]
</script>

<style lang="scss" scoped>
.active {
    background-color: blue;
    color: #fff;
    position: relative;

    &::before {
        content: '111';
        position: absolute;
        top: 2rem;
        left: -1.6rem;
        display: inline-block;
        width: 8.7rem;
        height: 4rem;
        // background-color: rgb(255, 255, 255);
        background: linear-gradient(0deg, #FFFFFF 25%, #53B3FF 75%);
        clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
    }
}


#Head {
    width: 100%;
    background-color: #fff;


    .logo-title {

        img {
            width: 3rem;
            margin: 1rem;
        }

    }

    .menu {

        .menu-item {
            font-size: 1.2rem;
            padding: 0.5rem 1rem;
            // background-color: $primaryBlue;

        }

        .my-menu {
            width: 3rem;
            height: 3rem;
            color: blue;
        }
    }
}

// @media only screen and (min-width: 1200px) {
//     #Head {
//         @include disFlex(space-between, center);

//         .logo-title {
//             @include disFlex(center, center);
//         }

//         .menu {
//             @include disFlex(center, center);
//         }
//     }
// }

// @media only screen and (max-width: 1200px) {
//     #Head {
//         @include disFlex(space-between, center);

//         .logo-title {
//             @include disFlex(center, center);
//         }

//         .menu {
//             @include disFlex(center, center);
//         }
//     }
// }

// @media only screen and (max-width: 992px) {
//     #Head {
//         @include disFlex(center, center);

//         .logo-title {
//             width: 100%;
//             @include disFlex(space-between, center);
//         }

//         .menu {
//             width: 100%;
//             @include disFlex(center, center);
//         }
//     }
// }

// @media only screen and (max-width: 768px) {
//     .App {
//         width: 37rem;
//     }
// }

// @media only screen and (max-width: 520px) {
//     .App {
//         width: 32rem;
//     }
// }

// @media only screen and (max-width: 420px) {
//     .App {
//         width: 100%;
//     }
// }
</style>
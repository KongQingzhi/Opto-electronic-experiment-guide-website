<template>
    <div class="App">
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">

</script>



<style lang="scss" scoped>

// .App {
//     height: 20rem;
//     background-color: blueviolet;
//     margin: 0 auto;
// }
@media only screen and (min-width: 1200px) {
    .App {
        width: 75rem;
    }
}

@media only screen and (max-width: 1200px) {
    .App {
        width: 62rem;
    }
}

@media only screen and (max-width: 992px) {
    .App {
        width: 50rem;
    }
}

@media only screen and (max-width: 768px) {
    .App {
        width: 37rem;
    }
}

@media only screen and (max-width: 520px) {
    .App {
        width: 30rem;
    }
}

@media only screen and (max-width: 420px) {
    .App {
        width: 100%;
    }
}
</style>

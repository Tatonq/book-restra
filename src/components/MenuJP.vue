<template>
    <HeaderVue></HeaderVue>
    <h1>เมนูอาหารญี่ปุ่น</h1>
    <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">ชื่อ</th>
            <th scope="col">รายละเอียด</th>
            <th scope="col">ประเภท</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(data, index) in Mock.JPMenu" :key="index">
            <th scope="row">{{ index+1 }}</th>
            <td>{{ data.name }}</td>
            <td>{{ data.detail }}</td>
            <td>{{ data.type }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import HeaderVue from './Header.vue';
import Mock from '../mock/mockJP.json'
export default {
    name:'MenuJP',
    components: {
        HeaderVue
    },
    data() {
        return {
            Mock
        }
    },
    created(){
        this.checkIsLogged()
    },
    methods:{
        checkIsLogged() {
            if (localStorage.getItem('token') === null) {
                this.$router.push({path: '/login-page'})     
            }
        },
    }
}
</script>

<style>

</style>
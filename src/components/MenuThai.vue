<template>
    <Header></Header>
    <h1>เมนูอาหารไทย</h1>
    <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">ชื่อ</th>
            <th scope="col">รายละเอียด</th>
            <th scope="col">ประเภท</th>
            <th scope="col">จัดการ</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(data, index) in MenuList" :key="index">
            <th scope="row">{{ index+1 }}</th>
            <td>{{ data.name }}</td>
            <td>{{ data.detail }}</td>
            <td>{{ data.type }}</td>
            <td>
                <router-link :to="{name: 'EditMenu', params: { id: data._id }}" class="btn btn-success ">แก้ไข</router-link>
                <!-- <button @click="this.$router.push({ name: 'EditMenu', params: { id: data._id } })" class="btn btn-success ">แก้ไข</button> -->
                <button @click="deleteMenu(data._id)" class="btn btn-danger">ลบ</button>
            </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
export default {
    name:'MenuThai',
    components:{
        Header
    },
    data(){
        return {
            MenuList:[]
        }
    },
    created(){
        axios.get('https://talented-khakis-boa.cyclic.app/api/menus')
        .then((res) => {
            console.log(res);
            this.MenuList = res.data
        }).catch(err => {
            console.log(err );
        })
    },
    methods:{
        async deleteMenu(id) {
            let apiURL = 'https://talented-khakis-boa.cyclic.app/api/delete-menu/'
            let indexOfArray = this.MenuList.findIndex(i => i._id === id)
            if(window.confirm('ต้องการลบไหม?')) {
                await axios.delete(apiURL+id)
                .then((res)=>{
                    console.log(res);
                    this.MenuList.splice(indexOfArray, 1)
                })
                .catch(err => console.log(err))
            }
        }
    }

}
</script>

<style>

</style>
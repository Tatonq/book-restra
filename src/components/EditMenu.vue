<template>
  <HeaderVue></HeaderVue>
    <div class="row justify-content-center">
            <div class="col-md-6">
                <h3 class="text-center">แก้ไขรายการอาหาร</h3>
                <form @submit.prevent="UpdateMenu" enctype="multipart/form-data">
                    <div class="form-group mt-3">
                        <label>ชื่อเมนู</label>
                        <input type="text" class="form-control" v-model="menus.name" placeholder="ชื่อเมนู" required>
                    </div>
                    <div class="form-group mt-3">
                        <label>รายละเอียด</label>
                        <input type="text" class="form-control" v-model="menus.detail" placeholder="รายละเอียด" required>
                    </div>
                    <div class="form-group mt-3">
                        <label>ประเภท</label>
                        <input type="text" class="form-control" v-model="menus.type" placeholder="ประเภท" required>
                    </div>
                    <div class="field">
                        <button class="btn btn-success">แก้ไขเมนู</button>
                    </div>
                </form>
            </div>
    </div>
</template>

<script>
import api from '../service/env'
import HeaderVue from './Header.vue'
import axios from 'axios'
export default {
    name:'EditMenu',
    data(){
        return {
            menus:{}
        }
    },
    components: {
        HeaderVue
    },
    created() {
        this.checkIsLogged()
        let apiURL = api.webserver+'/api/get-menu/'+this.$route.params.id
        axios.get(apiURL)
        .then((res) => {
            this.menus = res.data
        })
        .catch(err => console.log(err))
    },
    methods: {
        async UpdateMenu() {
            // let apiURL = `${api.webserver}/api/update-menu/${this.$route.params.id}`
            let apiURL = api.webserver+'/api/update-menu/'+this.$route.params.id
            await axios.put(apiURL, this.menus)
            .then((res) => {
                if(res.status === 200) this.$router.push({path: '/menu-thai'})
            })
            .catch(err => {
                console.log(err);
            })
        },
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
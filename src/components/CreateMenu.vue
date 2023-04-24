<template>
    <HeaderVue></HeaderVue>
    <div class="row justify-content-center">
            <div class="col-md-6">
                <h3 class="text-center">เพิ่มรายการอาหาร</h3>
                <form @submit.prevent="SubmitForm" enctype="multipart/form-data">
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
                        <button class="btn btn-primary">เพิ่มเมนู</button>
                    </div>
                </form>
            </div>
    </div>
</template>

<script>
import HeaderVue from './Header.vue'
import api from '../service/env'
import axios from 'axios'
export default {
    name:'CreateMenu',
    data(){
        return {
            menus: {
                name:'',
                detail:'',
                type:'',
            }
        }
    },
    methods:{
        SubmitForm() {
            let apiURL = `${api.webserver}/api/create-menu`
            // let apiURL = api.webserver+'/api/create-menu'
            axios.post(apiURL, this.menus).then(() => {
                this.menus = {
                    name:'',
                    detail:'',
                    type:'',
                }
            }).catch(error => {
                console.log(error);
            })
            this.$router.push({path: '/menu-thai'})
        }
    },
    components: {
        HeaderVue
    }

}
</script>

<style>

</style>
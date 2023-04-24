<template>
    <Header></Header>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h1 class="text-center">สมัครสมาชิก</h1>
            <form @submit.prevent="SubmitForm" enctype="multipart/form-data">
                <div class="form-group mt-3">
                    <label>ชื่อผู้ใช้</label>
                    <input type="text" class="form-control" v-model="userInfo.username" placeholder="ชื่อผู้ใช้" required>
                </div>
                <div class="form-group mt-3">
                    <label>อีเมล</label>
                    <input type="email" class="form-control" v-model="userInfo.email" placeholder="อีเมล" required>
                </div>
                <div class="form-group mt-3">
                    <label>รหัสผ่าน</label>
                    <input type="password" class="form-control" v-model="userInfo.password" placeholder="รหัสผ่าน" required>
                </div>
                <div class="field">
                    <button class="btn btn-success">สมัครสมาชิก</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue'
import api from '../service/env'
import axios from 'axios'
export default {
    name:'SingUp',
    components: {
        Header
    },
    data(){
        return {
            userInfo: {
                username:'',
                email:'',
                password:'',
            }
        }
    },
    methods:{
        SubmitForm() {
            let apiURL = `${api.webserver}/api/sing-up`
            // let apiURL = api.webserver+'/api/create-menu'
            axios.post(apiURL, this.userInfo).then(() => {
                this.userInfo = {
                    username:'',
                    email:'',
                    password:'',
                }
            }).catch(error => {
                console.log(error);
            })
            this.$router.push({path: '/login-page'})
        }
    },
}
</script>

<style>

</style>
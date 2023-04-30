<template>
  <Header></Header>
    <div class="row justify-content-center">
      <div class="col-md-6">
          <h1 class="text-center">เข้าสู่ระบบ</h1>
          <form @submit.prevent="SubmitForm" enctype="multipart/form-data">
              <div class="form-group mt-3">
                  <label>ชื่อผู้ใช้</label>
                  <input type="text" class="form-control" v-model="userInfo.username" placeholder="ชื่อผู้ใช้" required>
              </div>
              <div class="form-group mt-3">
                  <label>รหัสผ่าน</label>
                  <input type="password" class="form-control" id="inputPassword5" v-model="userInfo.password" placeholder="รหัสผ่าน" required>
              </div>
              <div class="field">
                  <button class="btn btn-primary">เข้าสู่ระบบ</button>
              </div>
          </form>
      </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import api from '../service/env'
import axios from 'axios';
export default {
  name: "LoginPage",
  components: {
    Header
  },
  data() {
    return {
      userInfo: {
          username:'',
          password:'',
      }
    }
  },
  created(){
    this.checkIsLogged()
  },
  methods:{
    SubmitForm() {
        let apiURL = `${api.webserver}/api/sing-in`
        // let apiURL = api.webserver+'/api/create-menu'
        axios.post(apiURL, this.userInfo).then(res => {
          if(res.status == 200 ) {
            localStorage.setItem('token', res.data.token);
          }
          this.userInfo = {
              username:'',
              password:'',
          }
          this.$router.push({path: '/menu-thai'})
        }).catch(error => {
            console.log(error);
        })
    },
    checkIsLogged() {
        if (localStorage.getItem('token') !== null) {
            this.$router.push({path: '/'})     
        }
    },
  },
}
</script>

<style>

</style>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand" href="#">อร่อยถูกใจ</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="d-flex" v-if="isLogged === false">
      <router-link to="/login-page" class="nav-link">Login</router-link>
      <p style="padding-right: 30px;"></p>
      <router-link to="/sing-up" class="nav-link">Sing Up</router-link>
      <p style="padding-right: 30px;"></p>
    </div>
    <div class="d-flex" v-else> 
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/menu-thai" class="nav-link" href="#">เมนูอาหารไทย</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/menu-jp" class="nav-link" href="#">เมนูอาหารญี่ปุ่น</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            น้ำดื่ม
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">เมนูเครื่องดื่มเย็น</a></li>
            <li><a class="dropdown-item" href="#">เมนูเครื่องดื่มร้อน</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <div class="btn btn-danger">
            <button v-on:click="logout" class="dropdown-item">Logout</button>
          </div>
        </li>
      </ul>
    </div>
    </div>
  </div>
</nav>
</template>


<script>
export default {
  name:'HeaderPage',
  data(){
    return {
      isLogged: this.checkIsLogged()
    }
  },
  created(){
    if(localStorage.getItem('token') === null){
      console.log('Logout');
      return true
    } else if (localStorage.getItem('token') === !null) {
      console.log('Login');
      return false
    }
  },
  methods:{
    checkIsLogged() {
      if (localStorage.getItem('token') === null) {
        console.log('Login');
        return false
      } else if (localStorage.getItem('token') === !null) {
        return true
      }
    },
    logout() {
      localStorage.removeItem('token')
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style>

</style>
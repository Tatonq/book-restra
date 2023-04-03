<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand" href="#">กินแล้วตาย คายแล้วรอด</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
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
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name:'HeaderPage',
}
</script>

<style>

</style>
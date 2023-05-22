<template>
    <Header></Header>
    <div class="container pt-2">
        <h1 class="text-center">หน้าหลัก</h1>
        <div class="row m-0">
            <div class="col-12 col-md-12 order-1 order-sm-1">
                <div class="row m-0">
                    <div v-for="(data, index) in MenuList" :key="index" class="col-12 col-sm-6 col-md-4 my-3">
                        <a href="#" class="text-decoration-none" style="color: black;">
                            <div class="card">
                                <div class="card-details"> 
                                    <img class="card-img-top img-fluid" alt="" src="https://inwfile.com/s-e/oir3cb.jpg">
                                    <p class="text-title px-3 pt-2">{{ data.name }}</p>
                                    <p class="text-body px-3">{{ data.detail }}</p>
                                    <p class="text-body px-3">{{ data.type}}</p>
                                </div>
                                <button class="card-button">แสดงรายละเอียด</button>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div> 
    </div>

</template>

<script>
import axios from 'axios';
import Header from './Header.vue';
import api from '../service/env'
export default {
    name:'HomePage',
    components:{
        Header,
    },
    data() {
        return {
            MenuList:[]
        }
    },
    created() {
        this.checkIsLogged()
        axios.get(api.webserver+`/api/menus`)
        .then((res) => {
            console.log(res);
            this.MenuList = res.data
        }).catch(err => {
            console.log(err );
        })
    },
    methods: {
        checkIsLogged() {
            if (localStorage.getItem('token') === null) {
                this.$router.push({path: '/login-page'})     
            }
        },
    }
}
</script>

<style scoped>
.card {
        /* width: 190px; */
        /* height: 254px; */
        border-radius: 20px;
        /* background: #f5f5f5; */
        position: relative;
        /* padding: 5px; */
        border: 2px solid #c3c6ce;
        transition: 0.5s ease-out;
        overflow: hidden;
    }

    .card-details {
        color: black;
        height: 100%;
        /* gap: .5em; */
        display: grid;
        place-content: center;
    }

    .card-button {
        transform: translate(-50%, 125%);
        width: 60%;
        border-radius: 1rem;
        border: none;
        background-color: #008bf8;
        color: #fff;
        font-size: 1rem;
        padding: .5rem 1rem;
        position: absolute;
        left: 50%;
        bottom: 0;
        opacity: 0;
        transition: 0.3s ease-out;
    }

    .text-body {
        color: rgb(134, 134, 134);
    }

    /*Text*/
    .text-title {
        font-size: 1.5em;
        font-weight: bold;
    }

    /*Hover*/
    .card:hover {
        border-color: #c05f47;
        box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
    }

    .card:hover .card-button {
        transform: translate(-50%, -350%);
        opacity: 1;
    }
</style>
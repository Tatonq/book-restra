import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home'
import MenuThai from '../components/MenuThai'
import MenuJP from '../components/MenuJP'
import CreateMenu from '../components/CreateMenu'
import EditMenu from '../components/EditMenu'
import Login from '../components/LoginPage'
import SingUp from '../components/SingUp'
const routes = [
    {
        name: 'HomePage',
        component: Home,
        path: '/'
    },
    {
        name: 'MenuThai',
        component: MenuThai,
        path: '/menu-thai'
    },
    {
        name: 'MenuJP',
        component: MenuJP,
        path: '/menu-jp'
    },
    {
        name: 'CreateMenu',
        component: CreateMenu,
        path: '/create-menu'
    },
    {
        name: 'EditMenu',
        component: EditMenu,
        path: '/edit-menu/:id'
    },
    {
        name: 'LoginPage',
        component: Login,
        path: '/login-page'
    },
    {
        name: 'SingUp',
        component: SingUp,
        path: '/sing-up'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
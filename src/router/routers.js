import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home'
import MenuThai from '../components/MenuThai'
import MenuJP from '../components/MenuJP'
import CreateMenu from '../components/CreateMenu'
import EditMenu from '../components/EditMenu'
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
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
import { createApp } from 'vue'
import Index from './Index.vue'
import '../assets/styles.css'
import { createRouter, createWebHistory } from 'vue-router'
import Somos from './components/somos/Somos'
import Sustentabilidad from './components/sustentabilidad/Sustentabilidad'
import Procesos from './components/procesos/Procesos'
import Contacto from './components/contacto/Contacto'
import ProductoIndex from './productos/ProductoIndex'
import Portada from './components/portada/Portada'





const routes = [
    { path: '/', name:'portada', component: Portada },
    { path: '/prod/:ind', name: 'producto', component: ProductoIndex, props: true },
    { path: '/somos', name:'somos', component: Somos },
    { path: '/sustentabilidad', name:'sustentabilidad', component: Sustentabilidad },
    { path: '/procesos', name:'procesos', component: Procesos },
    { path: '/contacto', name:'contacto', component: Contacto },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes // short for `routes: routes`
  })





createApp(Index).use(router).mount('#index')
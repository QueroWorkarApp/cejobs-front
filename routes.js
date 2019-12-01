export default {
    routes: [
        {
          name: 'index',
          path: '/',
          component: 'pages/index.vue'
        },
        {
          name: 'vagas',
          path: '/vagas?',
          component: 'pages/vagas/index.vue'
        },
        {
          name: 'vagas-id',
          path: '/vaga/:id',
          component: 'pages/vagas/_id.vue'
        },
      ]
       
}
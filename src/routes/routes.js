import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [{
        path: '/',
        redirect: 'dashboard',
        component: DashboardLayout,
        children: [{
                path: '/dashboard',
                name: 'dashboard',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/Dashboard.vue')
            },
            {
                path: '/icons',
                name: 'icons',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/Icons.vue')
            },
            {
                path: '/profile',
                name: 'profile',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue')
            },
            {
                path: '/maps',
                name: 'maps',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/GoogleMaps.vue')
            },
            {
                path: '/Admins',
                name: 'Admins',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/page/Admin.vue')
            },
            {
                path: '/consultants',
                name: 'consultant',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/page/Consultant.vue')
            },
            {
                path: '/clients',
                name: 'Prospect',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/page/Client.vue')
            },
            {
                path: '/clientIn',
                name: 'Prospect-Opt-In',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/page/Clientin.vue')
            },
            {
                path: '/clientOut',
                name: 'Prospect-Opt-Out',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/page/Clientout.vue')
            },
            {
                path: '/addconsult',
                name: 'addconsult',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/page/Ajoutconsult.vue')
            },
            {
                path: '/addclient',
                name: 'addclient',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/page/Ajoutprospect.vue')
            },
            {
                path: '/Updateconsult',
                name: 'Editconsult',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/page/Editconsult.vue')
            },
            {
                path: '/Updateclient',
                name: 'Editclient',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/page/Editprospect.vue')
            },
            {
                path: '/tables',
                name: 'tables',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/RegularTables.vue')
            }
        ]
    },
    {
        path: '/',
        redirect: 'login',
        component: AuthLayout,
        children: [{
                path: '/login',
                name: 'login',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
            },
            {
                path: '/register',
                name: 'register',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
            },
            { path: '*', component: NotFound }
        ]
    }
];

export default routes;
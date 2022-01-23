import AdminPanel from '@frontend/src/views/Administrator/AdminKatalog.vue'



export default [
    {
        path: "/",
        component: AdminPanel,
        children: [
            {
                path: "/admin/users",
                component: Users,
                meta: { 
                    requiresAuth: true
                }
            },
            {
                path: "/admin/cycleworks",
                component: CycleWorks
            },
            {
                path: "/admin/genre",
                component: Genre
            },
            {
                path: "/admin/achievement",
                component: Achievement
            },
            {
                path: "/admin/award",
                component: Award
            },
            {
                path: "/admin/statusreading",
                component: StatusReading
            },
            {
                path: "/admin/statuswriting",
                component: StatusWriting
            },
        ]
    },
    {
        path: "/admin/signIn",
        component: AdminPanel
    } 
]
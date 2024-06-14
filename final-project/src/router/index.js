import PageBlog from '../pages/PageBlog.vue'
import PageProject from '../pages/PageProject.vue'
import PageMain from '../pages/PageMain.vue'
import NotFound from '../pages/NotFound.vue'

export default [
    { path: '/', component: PageMain },
    { path: '/blog', component: PageBlog },
    { path: '/project', component: PageProject },
    { path: '/:pathMatch(.*)*', component: NotFound }
]


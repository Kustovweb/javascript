import PageBlog from '../pages/PageBlog.vue'
import PageProject from '../pages/PageProject.vue'
import PageMain from '../pages/PageMain.vue'
import NotFound from '../pages/NotFound.vue'
import PageBlogDetails from '../pages/PageBlogDetails.vue'
import PageProjectDetails from '../pages/PageProjectDetails.vue'
export default [
    {
        path: '/', component: PageMain, meta: {
            breadcrumb: 'Домой'
        }
    },
    {
        path: '/blog/:page?', component: PageBlog, meta: {
            breadcrumb: 'Блог'
        }
    },
    {
        path: '/project:page?', component: PageProject, meta: {
            breadcrumb: 'Проект'
        }
    },
    { path: '/:pathMatch(.*)*', component: NotFound },
    {
        path: '/blogDetails:id?', component: PageBlogDetails, meta: {
            breadcrumb: ''
        }
    },
    {
        path: '/projectDetails:id?', component: PageProjectDetails, meta: {
            breadcrumb: ''
        }
    }
]

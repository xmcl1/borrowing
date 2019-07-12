import router from '@/router/index.js'

export default (function (router) {
    router.beforeEach((to, from, next) => {
        console.log(to);
        var username = localStorage.getItem("username")
        var isLogin = localStorage.getItem("isLogin")
        if (to.meta.httpAuthorize) {
            if (username && isLogin) {
                next()
            } else {
                next({
                    name: "login"
                })
            }
        } else {
            next()
        }
    })
})(router)
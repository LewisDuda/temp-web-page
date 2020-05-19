window.onload = function () {
    var web = new Vue({
        el: '#web',
        data() {
            return {
                imgList:[
                    {
                        img:"src/image/roast_turkey_vege_opt.jpg"
                    },
                    {
                        img:"src/image/barbecue_chicken_opt.jpg"
                    },
                    {
                        img:"src/image/roast_turkey_dinner_opt.jpg"
                    },
                    {
                        img:"src/image/ramen_opt.jpg"
                    }
                ]
            }
        },
        methods:{
            jumpto(){
                window.location.pathname  = "/page/searchAll.html";
            }
        }
    })
}

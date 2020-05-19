window.onload = function () {
    var web = new Vue({
        el: '#web',
        data() {
            return {
                tableData: [],
                loading:true,
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            getData() {
                const cors = 'https://cors-anywhere.herokuapp.com/' // use cors-anywhere to fetch api data
                const url = 'http://node-mongodb-app-demo-app-project.apps.us-east-1.starter.openshift-online.com/stores/kind/italy' // origin api url

                /** fetch api url by cors-anywhere */
                axios.get(`${cors}${url}`)
                    .then((res) =>{
                        this.tableData = res.data
                        console.log(res.data)
                        this.loading=false
                    })
                    .catch((err) =>{
                        console.error(err)
                    })
            }
        }
    })
}
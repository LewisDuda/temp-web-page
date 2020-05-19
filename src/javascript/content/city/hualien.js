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
            getOneData() {
                axios.get('https://my-json-server.typicode.com/LewisDuda/jsondb/content/?name=' + this.parm)
                    .then((res) => {
                        this.tableData = res.data
                        console.log(res)
                    })
                    .catch((err) => {
                        console.error(err)
                    })
            },
            getData() {
                /*axios.get('http://nodejs-mongo-app-git-demo-app-project.apps.us-east-2.starter.openshift-online.com/stores/city/taipei')
                    .then((res) => {
                        this.tableData = res.data
                    })
                    .catch((err) => {
                        console.error(err)
                    })*/
                //const cors = 'http://localhost:8080/'; // use cors-anywhere to fetch api data
                const cors = 'https://cors-anywhere.herokuapp.com/' // use cors-anywhere to fetch api data
                const url = 'http://node-mongodb-app-demo-app-project.apps.us-east-1.starter.openshift-online.com/stores/city/hualien' // origin api url

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
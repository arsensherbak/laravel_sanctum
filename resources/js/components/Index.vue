<template>
<div>
    <router-link v-if="token" :to="{name: 'get.index'}">Get user</router-link>
    <router-link v-if="!token" :to="{name: 'user.login'}">Login</router-link>
    <router-link v-if="!token" :to="{name: 'user.register'}">Register</router-link>
    <router-link v-if="token" :to="{name: 'user.personal'}">Personal</router-link>
    <a v-if="token" @click.prevent="logout" href="#" >Logout</a>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: "Index",
    data(){
        return{
            token: null
        }
    },
    updated() {
        this.getToken()
    },
    mounted() {
        this.getToken()
    },
    methods: {
        getToken(){
           this.token = localStorage.getItem('x_xsrf_token')
        },
        logout(){
            axios.post('/logout')
            .then(res=>{
                localStorage.removeItem('x_xsrf_token')
                this.$router.push({name: 'user.login'})
            })
        }
    }
}
</script>

<style scoped>

</style>

<template>
    <div class="w-50">
        <input v-model="name" type="name" class="form-control mb-3" placeholder="name">
        <input v-model="email" type="email" class="form-control mb-3" placeholder="email">
        <input v-model="password" type="password" class="form-control" placeholder="password">
        <input v-model="password_confirmation" type="password" class="form-control"
               placeholder="password">
        <input @click.prevent="registr" type="submit" value="Enter" class="btn btn-primary">
    </div>
</template>

<script>
export default {
    name: "Register",
    data(){
      return{
          name: null,
          email: null,
          password: null,
          password_confirmation: null
      }
    },
    methods:{
        registr(){
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                })
                .then(res=>{
                    localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
                    this.$router.push({name: 'user.personal'})
                })
            })
        }
    }
}
</script>

<style scoped>

</style>

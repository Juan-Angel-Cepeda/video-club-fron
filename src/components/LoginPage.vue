<template>
    <h1>Login</h1>
    <form v-on:submit.prevent = "login">
        <h3 v-show="msg">{{ msg }}</h3>
        <label for="email">email</label>
        <input v-model="email" type="text" name="email" id="email">
        <label for="password">Contraseña</label>
        <input v-model="password" type="password" name="password" id="password">
        <input type="submit" name="" value="Iniciar sesión">
    </form>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'LoginPage',
        data(){
            return {
                email:"",
                password:"",
                msg:null
            };
        },
        methods:{
            login(){
                axios.post('http://localhost:3000/login',{
                    email:this.email,
                    password:this.password
                }).then(res => {
                    console.log(res);
                    this.$router.push('/directors');
                }).catch(err => {
                    this.msg = err.response.data.message;
                    console.log(err);
                });
            }
        }
    };
</script>

<style scoped>

</style>
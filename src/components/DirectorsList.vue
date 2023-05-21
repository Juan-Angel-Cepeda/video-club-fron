<template>
    <h3>Directores</h3>
    <router-link to="/directors">Directors</router-link>
    <router-link to="/login">Iniciar Sesion</router-link>
    <h3>Directores</h3>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="director in directors" :key="director._id">
                <td>{{ director._name }}</td>
                <td>{{ director._lastName }}</td>
                <td></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import axios from 'axios';
    
    export default {
        name:'DirectorsList',
        data(){
            return {
                directors:null
            };
        },
        methods:{
            list(){
                axios.get('http://localhost:3000/directors')
                     .then(res => this.directors = res.data.obj);
            }
        },
        mounted(){
            this.list()
        }

    };

</script>

<style scoped>

</style>
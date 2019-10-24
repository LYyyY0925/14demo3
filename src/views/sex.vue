<template>
    <div class="sex">
        <p>1.请问你的性别是：</p>
        <input type="radio" value="男" name="sex" v-model="radio">男
        <input type="radio" value="女" name="sex" v-model="radio">女
        <input type="radio" value="保密" name="sex" v-model="radio">保密
        <br>
        <router-link to="/hobby" @click="doSex">下一步</router-link>
        <a href="#" @click="res">重置</a>
    </div>
</template>

<script>
    export default {
        name: "sex",
        data(){
            return{
                radio:'保密'
            }
        },
        methods:{
            doSex(){
                this.$store.commit("addSex",this.radio)
            },
            res(){
                this.radio='保密'
            }
        }
    }
</script>

<style scoped>

</style>
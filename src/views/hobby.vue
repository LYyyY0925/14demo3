<template>
    <div class="hobby">
        <p>请选择您的兴趣爱好</p>
        <form>
            <input type="checkbox" value="看书" name="hobby" v-model="checkbox">看书
            <input type="checkbox" value="游泳" name="hobby" v-model="checkbox">游泳
            <input type="checkbox" value="跑步" name="hobby" v-model="checkbox">保跑步
            <input type="checkbox" value="看电影" name="hobby" v-model="checkbox">看电影
            <input type="checkbox" value="听音乐" name="hobby" v-model="checkbox">听音乐
            <input type="checkbox" value="动漫" name="hobby" v-model="checkbox">动漫
        </form>
        <router-link to="/">上一步</router-link>
        <router-link to="/zwjs" @click.native="doHobby">下一步</router-link>
        <a href="#" @click="res">重置</a>
    </div>
</template>

<script>
    export default {
        name: "hobby",
        data(){
            return{
                checkbox:[]
            }
        },
        methods:{
            doHobby(){
                this.$store.commit("addHobby",this.checkbox)
            },
            res(){
                this.checkbox=[]
            }
        }
    }
</script>

<style scoped>

</style>
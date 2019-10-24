<template>
    <div class="zwjs">
        <p>3.请介绍一下自己</p>
        <textarea v-model="zwjs"></textarea>
        <br>
        <router-link to="/jianjie" @click="doZwjs">提交</router-link>
        <router-link to="/hobby">上一步</router-link>
        <a href="#" @click="res">重置</a>
    </div>
</template>

<script>
    export default {
        name: "zwjs",
        data(){
            return{
                zwjs:''
            }
        },
        methods:{
            doZwjs(){
                this.$store.commit("addZwjs",this.zwjs)
            },
            res(){
                this.zwjs=''
            }
        }
    }
</script>

<style scoped>
textarea{
    width: 400px;
    height: 300px;
}
</style>
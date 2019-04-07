<template>
    <div>
        <h3>请输入新闻信息</h3>
        <input placeholder="请输入标题" type="text" v-model="title">
        <textarea rows="20" placeholder="请输入内容" v-model="content"></textarea>
        <ul class="btnUl">
            <li class="btn" @click="add()">添 &nbsp; 加</li>
            <li class="btn" @click="cancel()">取 &nbsp; 消</li>
        </ul>
    </div>
</template>

<script>
    import store from '@/store'
    export default {
        name: "Add",
        store,
        data () {
            return {
                title:'',
                content:'',
            }
        },
        methods:{
            add () {
                store.commit('addItem',{
                    title:this.title,
                    content:this.content
                })
                //添加完成后清空input的值
                this.title = '';
                this.content = '';
                //完成添加后，改变store的hasNews的值为true，
                store.state.hasNews = true
                //路由跳转
                this.$router.push('/home/list');
            },
            cancel () {
                //路由跳转
                this.$router.push('home/user')
            }
        }
    }
</script>

<style scoped lang="scss">
    h3{
        color: #42b983;
    }
    input{
        width: 88%;
        height: 40px;
        font-size: 16px;
        border-radius: 5px;
        outline: none;
        padding: 0 5px;
        color: #35495e;
        box-sizing: border-box;
        border: 1px solid #42b983;
    }
    textarea{
        width: 88%;
        border-radius: 5px;
        outline: none;
        font-size: 16px;
        margin-top: 20px;
        padding: 5px;
        color: #35495e;
        box-sizing: border-box;
        border: 1px solid #42b983;
    }
    .btn{
        display: inline-block;
        width: 40%;
        height: 40px;
        background: #42b983;
        color: #35495e;
        font-size: 16px;
        margin: 0 auto;
    }
    ul.btnUl{
        width: 100%;
        height: 60px;
        line-height: 60px;
        display: flex;
        padding: 0;
        margin: 20px 0 0 0;
        flex-flow: row nowrap;
        justify-content: space-around;
    }
    .btn{
        display: inline-block;
        width: 40%;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        border-radius: 5px;
        text-align: center;
        color:#35495e;
        background: #42b983;
    }
    .btn:nth-child(2){
        background: #35495e;
        color: #42b983;
    }
</style>
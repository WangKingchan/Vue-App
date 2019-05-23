<template>
    <div>
        <!-- v-show="index == current"如果当前这个item的index==store的current那就显示该条详情-->
        <div v-for="(item,index) in pageLists"
             v-show="index === current"
             :key="index">
            <p class="newTitle">{{item.title}}</p>
            <p class="newInfo">{{item.content}}</p>
        </div>
        <button type="button" class="returnList" @click="returnList()">返 &nbsp; 回</button>
        <button type="button" class="returnList deleteNews" @click="deleteNews()">删 &nbsp; 除</button>
    </div>
</template>

<script>
    import store from '@/store'
    export default {
        store,
        name: "Info",
        data () {
            return {
                // 当前新闻的索引
                current: store.state.current//获取store的current
            }
        },
        computed: {
            pageLists () {
                // 新闻列表条数
                return store.state.lists
            }
        },
        methods:{
            // 返回新闻列表
            returnList () {
                // 路由跳转实现返回列表
                this.$router.push('/home/list');
            },
            // 删除当前这条新闻并返回列表
            deleteNews(){
                // 调用数组方法splice()删除当前这个元素
                // 语法：arrayObject.splice(index,howmany)
                store.state.lists.splice(store.state.current,1);
                // 路由跳转实现返回列表
                this.$router.push('/home/list');
            }
        }
    }
</script>

<style scoped lang="scss">
    .returnList{
        width: 90%;
        height: 40px;
        line-height: 40px;
        background: #42b983;
        border: none;
        outline: none;
        color: #fff;
        margin: 15px auto;
        font-size: 16px;
        border-radius: 5px;
    }
    .deleteNews{
        background: #35495e;
    }
    .newTitle{
        border-bottom: 1px solid rgba(147, 147, 147, 0.4);
        margin: 10px 0;
        padding: 8px 0;
        font-weight: 600;
        text-align: left;
        text-align: justify;
    }
    .newInfo{
        text-align: left;
        text-align: justify;
        text-indent: 2em;
    }
</style>
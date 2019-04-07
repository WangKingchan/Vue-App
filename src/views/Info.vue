<template>
    <div>
        <!-- v-show="index == current"如果当前这个item的index==store的current那就显示该条详情-->
        <div v-for="(item,index) in pageLists"
             v-show="index == current"
             :key="index">
            <span>{{item.title}}</span>
            <p>{{item.content}}</p>
        </div>
        <div class="returnList" @click="returnList()">返 &nbsp; 回</div>
    </div>
</template>

<script>
    import store from '@/store'
    export default {
        store,
        name: "Info",
        data () {
            return {

                current: store.state.current,//获取store的current
            }
        },
        computed: {
            pageLists () {
                return store.state.lists
            }
        },
        methods:{
            returnList () {
                this.$router.push('/home/list')
            }
        }
    }
</script>

<style scoped lang="scss">
    .returnList{
        width: 80%;
        height: 40px;
        line-height: 40px;
        background: #42b983;
        margin: 0 auto;
        color: #fff;
        font-size: 16px;
        border-radius: 5px;
    }
    span{
        border-bottom: 1px solid rgba(147, 147, 147, 0.4);
        margin: 10px 0;
        padding: 8px 0;
        font-weight: 600;
        display: block;
    }
</style>
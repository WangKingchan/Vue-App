<template>
    <div>
        <!--v-show="!hasNews"如果列表没有新闻，则展示提示语和图片否则隐藏改提示语-->
        <div class="imgBox" v-html="img" v-show="!hasNews"></div>
        <ul>
            <li v-for="(item,index) in pageLists"
                @click="look(index)"
                :class="{active: index == current && current !== ''}"
                :key="index">
                <span>{{item.title}}</span>
                <p>{{item.content}}</p>
                <small>{{dateTime}}</small>
                <a v-show="index == current && current !== ''" @click="lookMore()">
                    <small>{{moreMsg}}</small>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import store from '@/store'
    export default {
        name: "List",
        store,
        data () {
            return {
                hasNews: store.state.hasNews,
                img:'<img alt="Vue logo" src="/img/logo.82b9c7a5.png">' +
                    '<p>哎哟，还没有新闻呢，去个人中心添加吧！</p>',
                current: '',
                dateTime: new Date().toLocaleString(),
                moreMsg:'查看更多>>',
            }
        },
        computed: {
            pageLists () {
                return store.state.lists
            }
        },
        methods:{
            look (index) {
                this.current = index
            },
            lookMore () {
                //查看更多，让当前的新闻index的值赋值给store的current
                store.state.current = this.current
                this.$router.push('/info');
            }
        }
    }
</script>

<style scoped lang="scss">
    li{
        -moz-box-shadow: 0 5px 10px rgba(147, 147, 147, 0.4); /* 老的 Firefox */
        box-shadow:  0 5px 10px rgba(147, 147, 147, 0.4);
        text-align: left;
        padding: 5px;
        box-sizing: border-box;
        border-radius: 5px;
        margin: 11px 0 0 0;
        color: #2c3e50;
        position: relative;
    }
    span{
        border-bottom: 1px solid rgba(147, 147, 147, 0.4);
        margin: 5px 0;
        font-weight: 600;
        display: block;
    }
    p{
        margin: 5px 0;
    }
    small{
        color: #777;
    }
    a{
        position: absolute;
        right: 6px;
        bottom: 6px;
    }
    a>small{
        color: #35495e;
    }
    li.active{
        background : #42b983;
        color: #fff;
    }
    .imgBox>p{
        text-align: center;
    }
</style>
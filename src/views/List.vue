<template>
    <div>
        <!--v-show="!hasNews"如果列表没有新闻，则展示提示语和图片否则隐藏该提示语-->
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
    // 引入vuex核心组件store.js。“@”代表src目录
    import store from '@/store'
    export default {
        name: "List",
        store,// 使用store
        data () {
            return {
                hasNews: store.state.hasNews,
                img:'<img alt="Vue logo" src="/img/logo.82b9c7a5.png">' +
                    '<p>哎哟，还没有新闻呢，去个人中心添加吧！</p>',
                current: '',
                dateTime: new Date().toLocaleString(), // 获取当前时间
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
        width: 100%;
        font-weight: 600;
        padding-bottom: 3px;
        word-break: break-all;
        display: block; /** 对象作为伸缩盒子模型显示 **/
        overflow: hidden; /*自动隐藏文字*/
        white-space: nowrap;/*强制不换行*/
        text-overflow: ellipsis;/*文字隐藏后添加省略号*/
        border-bottom: 1px solid rgba(147, 147, 147, 0.4);
    }
    p{
        width: 100%;
        word-break: break-all;/* word-break: normal|break-all|keep-all;在恰当的断字点进行换行,break-all允许在单词内换行,keep-all	只能在半角空格或连字符处换行。,normal 使用浏览器默认的换行规则。*/
        text-overflow: ellipsis;/* 溢出文字显示省略号 */
        display: -webkit-box; /* 对象作为伸缩盒子模型显示 */
        -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
        -webkit-line-clamp: 2; /* 显示的行数 */
        overflow: hidden;  /* 隐藏超出的内容 */
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
<template>
    <div class="listBox">
        <router-view/>
        <ul class="footer">
            <li class="icons"><router-link :to="{name:'list'}">{{newsBtnMsg}}</router-link></li>
            <li class="icons"><router-link :to="{name:'user'}">{{presBtnMsg}}</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data () {
            return{
                newsBtnMsg:'新 闻 列 表',
                presBtnMsg:'个 人 中 心'
            }
        }
    }
</script>

<style scoped lang="scss">
    ul,li{
        list-style-type: none;
    }
    .listBox{
        margin-bottom: 70px;

    }
    ul.footer{
        width: 100%;
        height: 60px;
        line-height: 60px;
        display: flex;
        padding: 0;
        margin: 0;
        background: #fff;
        flex-flow: row nowrap;
        justify-content: space-around;
        position: fixed;
        left: 0;
        bottom: 0;

    }
    .icons{
        font-size: 16px;
        flex: 1;
        text-align: center;
        border-top: 1px solid #35495e;
        a{/*scss语法，css嵌套写法*/
            color: #35495e;
            display: block;
            text-decoration: none;
            &.active{/*此处的"&"代表a标签,当它被激活时的样式*/
                color:#35495e;
                background: #42b983;
            }
        }
        &:hover{
            cursor: pointer;
        }
    }
</style>
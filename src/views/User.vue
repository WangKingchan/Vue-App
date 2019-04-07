<template>
    <div>
        <div class="imgBox">
            <img alt="Vue logo" src="../assets/logo.png">
        </div>
        <p>{{greetings}}{{userName}}</p>
        <p>{{welcome}}</p>
        <div class="btn" type="button" @click="linkAdd()">{{btnAddMsg}}</div>
        <div class="btn" type="button" @click="btnQuit()">{{btnQuitMsg}}</div>
        <div class="btn" type="button" @click="btnLogout()">{{btnLogoutMsg}}</div>
    </div>
</template>

<script>
    export default {
        name: "User",
        data () {
            return {
                // img:'../assets/logo.png',
                btnAddMsg:'添 加 新 闻',
                btnLogoutMsg:'注 销 账 户',
                btnQuitMsg:'退 出 登 录',
                greetings:'Hello ',
                welcome:'Welcome to the personal center',
                userName:localStorage.getItem("name")
            }
        },
        methods: {
            //添加新闻
            linkAdd () {
                this.$router.push('/add');
            },
            // 退出登录
            btnQuit () {
                if (confirm("确认退出当前登录？")) {
                    alert("退出成功！")
                    this.$router.push('/')
                }

            },
            // 注销账户
            btnLogout () {
                if (confirm("注销账户后将不能使用，确认注销吗？")) {
                    localStorage.name = '';
                    localStorage.password = '';
                    alert("账户注销成功！");
                    this.$router.push('/');
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .btn{
        display: block;
        width: 80%;
        height: 40px;
        line-height: 40px;
        background: #42b983;
        color: #35495e;
        font-size: 16px;
        border-radius: 5px;
        margin: 15px auto;
    }
    .imgBox{
        width: 100%;
        text-align: center;
    }
    .imgBox>img{
        margin: 0 auto;
    }
    .btn:last-child{
        color: #42b983;
        background: #35495e;
    }
</style>
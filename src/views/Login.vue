<template>
    <div>
        <form v-if="!isReg">
            <div class="imgBox">
                <img alt="Vue logo" src="../assets/logo.png">
            </div>
            <h3 class="titleH3">{{titleLog}}</h3>
            <p><input type="text" v-model="name" placeholder="请输入用户名"></p>
            <p><input type="password" v-model="password" placeholder="请输入用密码"></p>
            <ul class="btnUl">
                <li class="btn" @click="login()">登 &nbsp; 录</li>
                <li class="btn" @click="reg()">注 &nbsp; 册</li>
            </ul>
        </form>
        <form v-else>
            <div class="imgBox">
                <img alt="Vue logo" src="../assets/logo.png">
            </div>
            <h3 class="titleH3">{{titleReg}}</h3>
            <p><input type="text" v-model="name" placeholder="请输入用户名"></p>
            <p><input type="password" v-model="password" placeholder="请输入用密码"></p>
            <p><input type="password" v-model="repeat" placeholder="再次输入密码"></p>
            <ul class="btnUl">
                <li class="btn" @click="addUser()">注 &nbsp; 册</li>
                <li class="btn" @click="cancel()">取 &nbsp; 消</li>
            </ul>
        </form>
        <div>
            <p v-for="(item,index) in appMsg" :key="index">{{item}}</p>
            <p v-html="eail"></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data () {
            return{
                titleLog:'欢 迎 登 录',
                titleReg:'欢 迎 注 册',
                imgPath:'/img/logo.82b9c7a5.png',
                appMsg:[
                    'Vue-App',
                    'Vue-Cli/Vue/Vuex/vue-router',
                    '_Kingchan',
                    'QQ: 337462466'
                ],
                eail:'<a href="mailto:kingchan0858@qq.com">kingchan0858@qq.com</a>',
                isReg: false,// 登录注册的显示状态管理
                name: '',
                password: '',
                repeat: ''
            }
        },
        methods:{
            // 登录方法
            login () {
                // 用户点击登录时验证用户输入
                if (this.name == '' || this.password == '') {
                    alert("请输入用户名和密码！")
                }else {
                    // 获取到localStorage中保存的用户名和密码
                    let locName = localStorage.getItem("name");
                    let locPass = localStorage.getItem("password");
                    // 判断输入的用户名和密码跟localStorage中保存的是否一致
                    if (locName === this.name && locPass === this.password) {
                        //清空登录input输入框的value
                        this.name = '';
                        this.password = '';
                        alert("恭喜您已经成功登录！");
                        // 执行路由跳转到新闻列表
                        this.$router.push('/home/list');
                    }else {
                        alert("用户名密码不正确！");
                    }
                }
            },
            // 点击注册按钮改变isReg为true，显示注册表单
            reg () {
                this.isReg = true
            },
            // 点击取消按钮改变isReg为false，显示登录表单
            cancel () {
                this.isReg = false
            },
            // 注册方法
            addUser () {
                //点击注册时验证用户输入
                if (this.name == '' || this.password == '' || this.repeat == '') {
                    alert("请输入用户名和密码")
                } else {
                    if (this.password === this.repeat) {
                        //如果用户两次输入的密码一致，就将该用户名和密码保存到localStorage
                        localStorage.setItem("name",this.name);
                        localStorage.setItem("password",this.password);
                        //清空注册input输入框的value
                        this.name = '';
                        this.password = '';
                        this.repeat = '';
                        this.isReg = false;
                        alert('恭喜您注册成功！')
                    }else {
                        alert('两次输入的密码不一致！')
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    input{
        width: 88%;
        height: 40px;
        border-radius: 5px;
        outline: none;
        padding: 0 5px;
        box-sizing: border-box;
        border: 1px solid #42b983;
        color: #35495e;
    }
    .titleH3{
        color: #35495e;
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
        width: 38%;
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
        color:#42b983;
    }
</style>
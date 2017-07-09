<template lang="pug">
.layout
  Row(type="flex")
    .col
      Col(:span="24") 用户登录
  Form(ref="formInline" :model="formInline" :rules="form")
    Form-item(prop="username")
      Input(type="text" v-model="formInline.username" placeholder="请输入用户名" style="width:300px")
        Icon(type="person" slot="prepend" size="200px")
    Form-item(prop="password" style="margin-top:50px")
      Input(type="password" v-model="formInline.password" placeholder="请输入密码" style="width:300px")
        Icon(type="locked" slot="prepend")
    Form-item
      .button
        Button(type="primary" @click="login('formInline')") 登录
        Button(type="default" @click="reset('formInline')" style="margin-left:20px") 重置
</template>

<script>
export default {
  data () {
    return {
      formInline: {
        username: '',
        password: ''
      },
      form: {
        username: [
          { required: true, message: '用户名不能为空' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能小于6位' }
        ]
      }
    }
  },
  methods: {
    login (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('提交成功')
        } else {
          this.$Message.error('表单验证失败')
        }
      })
    },
    reset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>


<style lang="stylus" scoped>
@import './style/login'
</style>

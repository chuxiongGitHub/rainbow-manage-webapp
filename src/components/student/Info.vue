<template lang="pug">
.studentInfo
  .title 学生信息
  .content
    Row(class="expand-row")
      Col(span="6")
        span(class="expand-key") 学号:
        span(class="expand=value") {{ row.sno || '' }}
      Col(span="6")
        span(class="expand-key") 姓名:
        span(class="expand-value") {{ row.sname || '无' }}
      Col(span="6")
        span(class="expand-key") 性别:
        span(class="expand-value") {{ row.ssex || '无' }}
      Col(span="6")
        span(class="expand-eky") 出生日期：
        span(class="expand-value") {{ row.sbirthday || ''}}
</template>

<script>
export default {
  props: {
    row: Object
  }
}
</script>
<style lang="stylus">
@import './style/expand'  
</style>


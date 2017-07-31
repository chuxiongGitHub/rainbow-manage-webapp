<template lang="pug">
  Form(:label-width="72")
    Spin(v-if="loading", fix)
    Form-item(label="学号")
      Input(:value="form.sno", @on-change="value => change('sno', value.target.value)", :disabled="isEdit")
    Form-item(label="姓名")
      Input(:value="form.sname", @on-change="value => change('sname', value.target.value)")
    Form-item(label="出生年月")
      Date-picker(
        :value="form.sbirthday"
        @on-change="value => change('sbirthday', value)",
        type="datetime",
        :options="dateOptions",
        placeholder="请输入时间",
        formate="yyyy-MM-dd HH:mm",
        :clearable="false",
        :editable="false"
        )
    Form-item(label="班级")
      Input(:value="form.sclass", @on-change="value => change('sclass', value.target.value)")
    Form-item(label="性别")
      Input(:value="form.ssex", @on-change="value => change('ssex', value.target.value)")
</template>
<script>
import { mapState } from 'vuex'
import { FORM_CHANGE } from 'store/student/keys'
import moment from 'moment'
export default {
  data () {
    return {
      dateOptions: {
        disabledDate (date) {
          return moment(date).isBefore(moment().add(240, 'm'), 'month')
        }
      }
    }
  },
  computed: {
    ...mapState({
      form: ({student}) => student.form,
      isEdit: ({student}) => student.isEdit,
      loading: ({student}) => student.loading.edit
    })
  },
  methods: {
    change (key, value) {
      this.$store.commit(FORM_CHANGE, { key, value })
    }
  }
}
</script>


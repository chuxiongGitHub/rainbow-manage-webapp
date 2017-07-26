<template lang="pug">
  Modal(
    :value="show",
    :title="title",
    :closable="false",
    :mask-closable="false",
    :styles="style")
    app-modal-body
    app-modal-footer(slot="footer")
</template>
<script>
import { mapState } from 'vuex'
import AppModalBody from './ModalBody'
import AppModalFooter from './ModalFooter'
export default {
  components: { AppModalBody, AppModalFooter },
  computed: {
    ...mapState({
      show: ({student}) => student.modal.form,
      isEdit: ({student}) => student.isEdit
    }),
    title () {
      return this.isEdit ? '编辑' : '创建学生'
    },
    style () {
      return {
        top: '3px',
        margingBottom: '32px'
      }
    }
  }
}
</script>

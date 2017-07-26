import _ from 'lodash'

const form = {
  sno: '',
  sname: '',
  ssex: '',
  sbirthday: '',
  sclass: ''
}

export default {
  list: {},
  total: 0,
  query: {
    sno: '',
    sclass: '',
    ssex: '',
    sname: '',
    page: 1,
    size: 10
  },
  modal: {
    form: false
  },
  isEdit: false,
  loading: {
    create: false,
    edit: false
  },
  _form: _.cloneDeep(form),
  form: _.cloneDeep(form)
}

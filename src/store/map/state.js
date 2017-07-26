import _ from 'lodash'
const form = {
  sno: '',
  sname: '',
  sclass: '',
  ssex: '',
  sbirthday: ''
}

export default {
  list: [],
  _form: _.cloneDeep(form),
  form: _.cloneDeep(form)
}

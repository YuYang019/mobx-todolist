import { observable, action, useStrict } from 'mobx'

useStrict(true)

class FilterStore {

  @observable filter
  @observable aaa
  @observable bbb

  constructor() {
    this.filter = ''
  }
  
  @action filterTodo = (type) => {
    this.filter = type
  }

}

const filterStore = new FilterStore()

export default filterStore
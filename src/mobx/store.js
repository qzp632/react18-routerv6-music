import { observable } from 'mobx'

const store = observable({
    loding: true,
    scrollYkey: 0
})

export default store
import {INIT_USER_MSG} from '@/store/modules/user/constant.js'

export default {
    [INIT_USER_MSG](state, user) {
        state.user = user
    }
}

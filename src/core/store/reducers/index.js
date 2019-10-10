import { registerReducer, loginReducer } from './authReducer'
import {adminUsersReducer, adminClocksReducer, adminClocksFormReducer, adminClockUserFormReducer} from './adminReducer'
import { userProfileReducer } from './userReducer'

export default {
    register: registerReducer,
    login: loginReducer,
    adminUsers: adminUsersReducer,
    adminClocks: adminClocksReducer,
    userProfile: userProfileReducer,
    createClock: adminClocksFormReducer,
    linkClock: adminClockUserFormReducer
}
import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import ApiReducer from './ApiReducer';
import ProfileReducer from './ProfileReducer';
import AdminReducer from './AdminReducer';

//return app state
export default combineReducers({
  auth: AuthReducer,
  api: ApiReducer,
  profile: ProfileReducer,
  admin: AdminReducer
})

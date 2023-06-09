import { createStore } from 'vuex';
import usersModule from './modules/users/index.js';
import blogModule from './modules/blog/index.js';
import coursesModule from './modules/courses/index.js';

const store = createStore({
  modules: {
    users: usersModule,
    blog: blogModule,
    courses: coursesModule
  }
});

export default store;

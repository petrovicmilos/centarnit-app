export default {
    users(state) {
        return state.users;
    },
    accessToken(state) {
        return state.accessToken;
    },
    isAuthenticated(state) {
        return !!state.accessToken;
    }
};
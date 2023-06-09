export default {
    registerUser(state, payload) {
        state.users.push(payload);
    },
    loginUser(state, payload) {
        state.accessToken = payload.accessToken;        
    },
};
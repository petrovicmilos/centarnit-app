import axios from 'axios';


export default {
    registerUser(context, data) {
        const userData = {
            name: data.name,
            email: data.email,
            username: data.username,
            password: data.password
        };

        return new Promise((resolve, reject) => { axios.post('https://centarnitbe.herokuapp.com/user/', userData
                ).then(response => {
                  resolve(response.status);
                  context.commit('registerUser', userData);
                  console.log(response)
                }).catch(error => {
                  JSON.stringify(error)
                  console.log(error)
                  reject(error = 'There was an error trying to register')
                });
            });
    },
    

    loginUser(context, data) {
        const userData = {
            username: data.username,
            password: data.password
        }

        //Turning application/json into application/x-www-form-urlencoded
      var formBody = [];
      for (let property in userData) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(userData[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");

      //Header constant of axios 
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }

      console.log(userData)

      return new Promise((resolve, reject) => {  axios.post('https://centarnitbe.herokuapp.com/login', formBody, config)
      .then(response => {
              localStorage.setItem('accessToken', response.data.access_token);

              context.commit('loginUser',{
              accessToken: response.data
            });
            console.log(response.data)
            resolve(response.status);
        }).catch(function (error) {
          reject(error.response.data.detail = "Invalid username or password")
        });
      })
    },
    tryLogin(context) {
      const token = localStorage.getItem('accessToken');

      if(token) {
        context.commit('loginUser', {
          accessToken: token
        });
      }
    },
    logoutUser(context) {
      context.commit('loginUser', {
        accessToken: null
      });
    }
};
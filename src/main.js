import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import * as fb from './firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    firebase.initializeApp(
      {
        apiKey: "AIzaSyCYxQZW3xqHWCq3R2Faqdt3IfUbUSSv2Hk",
        authDomain: "ad-project-d0602.firebaseapp.com",
        databaseURL: "https://ad-project-d0602.firebaseio.com",
        projectId: "ad-project-d0602",
        storageBucket: "ad-project-d0602.appspot.com",
        messagingSenderId: "1032515072412",
        appId: "1:1032515072412:web:2e1cf128c4908f0dcdd859",
        measurementId: "G-09ZJEHXPJ8"
      }
    )
  }
}).$mount('#app')

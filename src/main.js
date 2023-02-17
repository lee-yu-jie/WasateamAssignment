import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createHead } from "unhead"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar, faGithub)

const head = createHead()
createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')

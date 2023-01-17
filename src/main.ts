import { createApp } from "vue";
import "./style.css";
import "./assets/scss/index.scss";
import App from "./App.vue";
import "./plugins/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");

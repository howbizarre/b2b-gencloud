import { createApp } from "vue";
import App from "./App.vue";

__VUE_OPTIONS_API__ = true;
__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
__VUE_PROD_DEVTOOLS__ = false;

const app = createApp(App);
app.mount("#app");

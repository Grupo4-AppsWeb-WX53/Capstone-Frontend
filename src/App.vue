<script>
import HeaderContentComponent from "./public/components/header-content-component.vue";
import SideBarComponent from "./public/components/sidebar-component.vue";
import {sidebarWidth} from "./public/services/state.js";


export default {
    name: 'App',
    computed: {
        sidebarWidth() {
            return sidebarWidth
        }
    },
    components: {SideBarComponent, HeaderContentComponent},

    data(){
        return{
            sidebarVisible: false,
        }
    },
    created() {
        console.log('created');
    },
    methods: {
        toggleSidebar() {
            this.sidebarVisible = !this.sidebarVisible;
        }
    }
}
</script>

<template>
    <div class="w-full">
        <pv-menubar class="pb-0 pt-0 w-full">
            <template #start>
                <div class="flex inline-block justify-content-between align-items-center">

                    <header-content-component></header-content-component>

                </div>

                <side-bar-component v-model:visible="sidebarVisible"></side-bar-component>
            </template>
        </pv-menubar>


        <router-view></router-view>
    </div>
</template>

<style scoped>

*{
    background-color: white;
    color: black;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

</style>

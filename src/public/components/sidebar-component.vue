<script>
import SidebarLink from './sidebar-link-component.vue'
import { collapsed, toggleSidebar, sidebarWidth } from '../services/state.js'
//import PersonalData from "../services/personal-data-component.vue";

export default {
    props: {},
    components: { SidebarLink },
    setup() {
        return { collapsed, toggleSidebar, sidebarWidth }
    }
}
</script>

<template>
    <div class="sidebar" :style="{ width: sidebarWidth }">
        <h1>
            <span v-if="collapsed">
            </span>
            <span v-else>User</span>

        </h1>


        <SidebarLink to="/home" icon="fas fa-home">Home</SidebarLink>
        <SidebarLink to="/personal-data" icon="fas fa-id-card-clip">Personal Data</SidebarLink>
        <SidebarLink to="/payment" icon="fas fa-money-bill">Payment</SidebarLink>
        <SidebarLink to="/notification" icon="fas fa-bell">Notifications</SidebarLink>
        <SidebarLink to="/sign-out" icon="fas fa-right-from-bracket">Sign out</SidebarLink>

        <span
                class="collapse-icon"
                :class="{ 'rotate-180': collapsed }"
                @click="toggleSidebar"
        >
      <i class="fas fa-angle-double-left" />
    </span>
    </div>
</template>

<style>
:root {
    --sidebar-bg-color: #0099AD;
    --sidebar-item-hover: #38a169;
    --sidebar-item-active: #276749;
}
</style>

<style scoped>
.sidebar {
    color: white;
    background-color: var(--sidebar-bg-color);

    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
}

.sidebar h1 {
    height: 2.5em;
}

.collapse-icon {
    position: absolute;
    top: 0;
    padding: 0.75em;

    color: rgba(255, 255, 255, 0.7);

    transition: 0.2s linear;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}
</style>
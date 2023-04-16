import FirmwareUpgradeView from '@/views/FirmwareUpgradeView.vue';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';

import { createRouter, createWebHistory } from 'vue-router';
import { isLoggedIn } from '@/utils/authentication';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: "active",
    routes: [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "AboutView" */ '@/views/AboutView.vue')
    },
    {
        path: '/info/network',
        name: 'Network',
        component: () => import(/* webpackChunkName: "NetworkInfoView" */ '@/views/NetworkInfoView.vue')
    },
    {
        path: '/info/system',
        name: 'System',
        component: () => import(/* webpackChunkName: "SystemInfoView" */ '@/views/SystemInfoView.vue')
    },
    {
        path: '/info/ntp',
        name: 'NTP',
        component: () => import(/* webpackChunkName: "NtpInfoView" */ '@/views/NtpInfoView.vue')
    },
    {
        path: '/info/mqtt',
        name: 'MqTT',
        component: () => import(/* webpackChunkName: "MqttInfoView" */ '@/views/MqttInfoView.vue')
    },
    {
        path: '/info/console',
        name: 'Web Console',
        component: () => import(/* webpackChunkName: "ConsoleInfoView" */ '@/views/ConsoleInfoView.vue')
    },
    {
        path: '/settings/network',
        name: 'Network Settings',
        component: () => import(/* webpackChunkName: "NetworkAdminView" */ '@/views/NetworkAdminView.vue')
    },
    {
        path: '/settings/ntp',
        name: 'NTP Settings',
        component: () => import(/* webpackChunkName: "NtpAdminView" */ '@/views/NtpAdminView.vue')
    },
    {
        path: '/settings/mqtt',
        name: 'MqTT Settings',
        component: () => import(/* webpackChunkName: "MqttAdminView" */ '@/views/MqttAdminView.vue')
    },
    {
        path: '/settings/inverter',
        name: 'Inverter Settings',
        component: () => import(/* webpackChunkName: "InverterAdminView" */ '@/views/InverterAdminView.vue')
    },
    {
        path: '/settings/dtu',
        name: 'DTU Settings',
        component: () => import(/* webpackChunkName: "DtuAdminView" */ '@/views/DtuAdminView.vue')
    },
    {
        path: '/settings/device',
        name: 'Device Manager',
        component: () => import(/* webpackChunkName: "DeviceAdminView" */ '@/views/DeviceAdminView.vue')
    },
    {
        path: '/firmware/upgrade',
        name: 'Firmware Upgrade',
        component: FirmwareUpgradeView
    },
    {
        path: '/settings/config',
        name: 'Config Management',
        component: () => import(/* webpackChunkName: "ConfigAdminView" */ '@/views/ConfigAdminView.vue')
    },
    {
        path: '/settings/security',
        name: 'Security',
        component: () => import(/* webpackChunkName: "SecurityAdminView" */ '@/views/SecurityAdminView.vue')
    },
    {
        path: '/maintenance/reboot',
        name: 'Device Reboot',
        component: () => import(/* webpackChunkName: "MaintenanceRebootView" */ '@/views/MaintenanceRebootView.vue')
    }
]
});

router.beforeEach((to, from, next) => {
    if (to.fullPath === '/' || to.fullPath === '/login') {
        next()
    } else {
        if (!isLoggedIn()) {
            next('/login')
        }
    }
    next()
})

export default router;

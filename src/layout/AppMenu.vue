<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

import { useAuth } from '@websanova/vue-auth/src/v3.js';
const auth = useAuth();

// console.log('check loggin', auth.check());
// console.log('auth', auth.user());

const model = ref([
    {
        label: 'Home',
        items: [
            { label: '首頁', icon: 'pi pi-fw pi-home', to: '/' },
            { label: '登入', icon: 'pi pi-fw pi-home', to: '/auth/login' }
        ]
    },
    {
        label: '會員給點',
        icon: 'pi pi-fw pi-briefcase',
        to: '/pages',
        items: [
            {
                label: '自動給點',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: '活動獎勵規則',
                        icon: 'pi pi-fw pi-sign-in'
                    }
                ]
            },
            {
                label: '手動給點',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: '單次給點',
                        icon: 'pi pi-fw pi-sign-in'
                    },
                    {
                        label: '批次給點',
                        icon: 'pi pi-fw pi-sign-in'
                    }
                ]
            },
            {
                label: '兌換碼給點',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: '兌換碼給點規則',
                        icon: 'pi pi-fw pi-sign-in'
                    },
                    {
                        label: '兌換碼狀態查詢',
                        icon: 'pi pi-fw pi-sign-in'
                    }
                ]
            }
        ]
    },
    {
        label: '會員扣點',
        icon: 'pi pi-fw pi-briefcase',
        to: '/pages',
        items: [
            {
                label: '批次扣點',
                icon: 'pi pi-fw pi-user'
            }
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
        <!-- <li>
            <a href="https://www.primefaces.org/primeblocks-vue/#/" target="_blank">
                <img src="/layout/images/banner-primeblocks.png" alt="Prime Blocks" class="w-full mt-3" />
            </a>
        </li> -->
    </ul>
</template>

<style lang="scss" scoped></style>

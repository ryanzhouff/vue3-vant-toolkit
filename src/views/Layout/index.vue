<script setup lang="ts">
  import { ref } from 'vue';
  import TabBar, { type TabBarItem } from '@/components/TabBar/index.vue';

  const arrowVisible = ref(true);
  const tabbars = ref<TabBarItem[]>([
    {
      title: '首页',
      to: {
        name: '/home'
      },
      icon: 'home-o'
    },
    {
      title: '设置',
      to: {
        name: '/setting'
      },
      icon: 'setting-o'
    },
    {
      title: '关于我',
      to: {
        name: '/profile'
      },
      icon: 'user-o'
    }
  ]);

  const onTabBarChange = (value: number) => {
    console.log(value);
  };
</script>

<template>
  <van-nav-bar :title="$route.meta.title as string" :left-arrow="arrowVisible" @click-left="$router.go(-1)" />
  <div class="main-page">
    <RouterView v-slot="{ Component }" v-if="$route.meta.keepAlive">
      <keep-alive>
        <component :is="Component" :key="$route.path" />
      </keep-alive>
    </RouterView>
    <RouterView v-if="!$route.meta.keepAlive" :key="$route.path"></RouterView>
  </div>
  <TabBar :data="tabbars" @tabBarChange="onTabBarChange" />
</template>

<style scoped></style>

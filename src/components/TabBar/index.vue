<script setup lang="ts">
  import { ref } from 'vue';

  export type TabBarItem = {
    title: string;
    to: {
      name: string;
    };
    icon: string;
  };

  type TabBarProps = {
    defaultActive?: number;
    data: TabBarItem[];
    activeColor?: string;
    inactiveColor?: string;
  };

  const { defaultActive, data, activeColor } = withDefaults(defineProps<TabBarProps>(), {
    defaultActive: 0,
    data: () => [],
    activeColor: '#4197ff'
  });

  const emits = defineEmits<{
    (e: 'tabBarChange', value: number): void;
  }>();

  const active = ref(defaultActive);

  const handleTabBarChange = (value) => {
    emits('tabBarChange', value);
  };
</script>

<template>
  <van-tabbar fixed route v-model="active" :active-color="activeColor" @change="handleTabBarChange">
    <van-tabbar-item v-for="(item, index) of data" :to="item.to.name" :key="index" :icon="item.icon">
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<style scoped></style>

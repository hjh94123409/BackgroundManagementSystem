<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#1f2d3d"
    class="el-menu-vertical-demo"
    text-color="#fff"
    unique-opened
    router
    :default-active="defaultActive"
    :collapse="!$store.getters.slideType"
  >
    <el-sub-menu
      :index="menu.id + ''"
      v-for="(menu, index) in menusList"
      :key="menu.id"
    >
      <template #title>
        <el-icon>
          <component :is="iconList[index]"></component>
        </el-icon>
        <span>{{ menu.authName }}</span>
      </template>
      <el-menu-item
        :index="'/' + subMenu.path"
        v-for="(subMenu, iii) in menu.children"
        :key="subMenu.id"
        @click="savePath(subMenu.path)"
      >
        <template #title>
          <el-icon>
            <component :is="icon[iii]"></component>
          </el-icon>
          <span>{{ $t(`menus.${subMenu.path}`) }}</span>
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { menuList } from '@/api/menu'
import { ref } from '@vue/reactivity'

const iconList = ref(['user', 'setting', 'shop', 'tickets', 'pie-chart'])
const icon = ref(['Menu', 'Menu', 'Menu'])

const defaultActive = ref(sessionStorage.getItem('path') || '/users')

const menusList = ref([])
const initMenusList = async () => {
  menusList.value = await menuList()
}
initMenusList()

const savePath = (path) => {
  sessionStorage.setItem('path', `/${path}`)
}
</script>

<style lang="scss" scoped></style>

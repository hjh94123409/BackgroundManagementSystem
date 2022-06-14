<template>
  <div id="guide" @click.prevent.stop="handleGuide">
    <svg-icon icon="guide"></svg-icon>
  </div>
</template>

<script setup>
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import { onMounted } from 'vue'
import { steps } from './steps'
import i18n from '@/i18n'
import { watchLang } from '@/i18n/watchlang'

const t = i18n.global.t

let driver
onMounted(() => {
  initDriver()
})

const initDriver = () => {
  driver = new Driver({
    animate: false,
    opacity: 0.75,
    padding: 10,
    allowClose: true,
    overlayClickNext: false,
    doneBtnText: t('driver.doneBtnText'),
    closeBtnText: t('driver.closeBtnText'),
    stageBackground: '#ffffff',
    nextBtnText: t('driver.nextBtnText'),
    prevBtnText: t('driver.prevBtnText')
  })
}

watchLang(initDriver)

const handleGuide = () => {
  driver.defineSteps(steps(t))
  driver.start()
}
</script>

<style lang="scss" scoped></style>

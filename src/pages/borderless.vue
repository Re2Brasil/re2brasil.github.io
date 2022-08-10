<script setup lang="ts">
const externalRouteTo = (route = '') => {
  window.open(route, '_blank')
}
</script>

<template>
  <div>
    <BaseSection size="half" title="What is Borderless?" class="secondary-section">
      <p class="w-[70%] text-center">
        <button class="text-borderless-blue" @click="externalRouteTo('http://borderless.genos.cc/')">
          Borderless Money
        </button>
        is a decentralized finance protocol to redefine how Social Investments are made, using yield-generating products and simultaneously contributing to social causes.
      </p>
    </BaseSection>
    <BaseSection title="Post your initiative to get engaged" class="primary-section dark:section-border">
      Initiatives
    </BaseSection>
  </div>
</template>

<route lang="yaml">
meta:
  layout: borderless
</route>

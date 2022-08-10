<script setup lang="ts">
// const user = useUserStore()
// const name = $ref(user.savedName)

// const router = useRouter()
// router.push(`/hi/${encodeURIComponent(name)}`)
// const { t } = useI18n()
</script>

<template>
  <div>
    <BaseHero title="Re²" subtitle="Regenerative Resources" background-image="https://images.squarespace-cdn.com/content/v1/62c1ab2e724bdb47d13cf746/94149e2e-79e8-4f39-9260-3623f0121193/Untitled+design+%2894%29.png" />

    <AboutSection />
    <RoadmapSection />
    <SocialSection />
    <HighlightSection />
    <InitiativesSection />
  </div>
</template>

<route lang="yaml">
meta:
  layout: landing
</route>

<template>
  <div class="home">
    <compressive-strength-panel />
  </div>
</template>

<script>
  import CompressiveStrengthPanel from "@/components/CompressiveStrengthPanel.vue";

  export default {
    name: "home",
    components: {
      CompressiveStrengthPanel,
    },
  };
</script>

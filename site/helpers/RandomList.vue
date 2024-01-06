<script setup lang="ts">
import { random } from "./random";
import { useIntervalFn } from "@vueuse/core";
import { ref, onMounted } from "vue";

interface Item {
  text: string;
  link: string;
}

const props = defineProps<{
  items: Item[];
  // interval in milliseconds for reordering list
  interval?: number;
}>();

const items = ref(props.items);

function randomize() {
  items.value = random(items.value);
}

onMounted(randomize);

if (props.interval) {
  const { pause, resume, isActive } = useIntervalFn(randomize, props.interval);
}
</script>

<template>
  <TransitionGroup name="fade" tag="ul">
    <li v-for="item in items" :key="item.text">
      <a :href="item.link">{{ item.text }}</a>
    </li>
  </TransitionGroup>
</template>

<style scoped>
/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
.VPTeamMembers.small .container {
  grid-template-columns: repeat(auto-fit, minmax(224px, 1fr));
}

.VPTeamMembers.small.count-1 .container {
  max-width: 276px;
}
.VPTeamMembers.small.count-2 .container {
  max-width: calc(276px * 2 + 24px);
}
.VPTeamMembers.small.count-3 .container {
  max-width: calc(276px * 3 + 24px * 2);
}

.VPTeamMembers.medium .container {
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
}

@media (min-width: 375px) {
  .VPTeamMembers.medium .container {
    grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
  }
}

.VPTeamMembers.medium.count-1 .container {
  max-width: 368px;
}
.VPTeamMembers.medium.count-2 .container {
  max-width: calc(368px * 2 + 24px);
}

.container {
  display: grid;
  gap: 24px;
  margin: 0 auto;
  max-width: 1152px;
}
</style>

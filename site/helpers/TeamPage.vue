<!-- A custom team page which periodically reorders the list -->

<script setup lang="ts">
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from "vitepress/theme";
import { ref } from "vue";
import { useIdle, useIntervalFn } from "@vueuse/core";
import { type TeamMember } from "./team.data";
import { random } from "./random";

function randomize() {
  if (idle.value) {
    team.value = random(team.value);
  }
}

const props = defineProps<{
  // an array of team members
  team: TeamMember[];
  // interval in seconds for reordering list
  interval?: number;
}>();

const team = ref(random(props.team));
const { idle, lastActive } = useIdle(100); // 1/10 sec
// const interval = 1000; // 1 min
if (props.interval) {
  const { pause, resume, isActive } = useIntervalFn(
    randomize,
    1000 * props.interval
  );
}
</script>

<template>
  <VPTeamPage>
    <VPTeamPageTitle>
      <template #title>Event Team</template>
    </VPTeamPageTitle>
    <VPTeamMembers size="small" :members="team" />
  </VPTeamPage>
</template>

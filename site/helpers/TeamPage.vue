<!-- A custom team page which periodically reorders the list -->

<script setup lang="ts">
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from "vitepress/theme";
import { ref, onMounted } from "vue";
import { useIntervalFn } from "@vueuse/core";
import { type TeamMember } from "./team.data";
import { random } from "./random";
import TeamMembers from "./TeamMembers.vue";

function randomize() {
  team.value = random(team.value);
}

onMounted(randomize);

const props = defineProps<{
  // an array of team members
  team: TeamMember[];
  // interval in milliseconds for reordering list
  interval?: number;
}>();

const team = ref(props.team);
if (props.interval) {
  const { pause, resume, isActive } = useIntervalFn(randomize, props.interval);
}
</script>

<template>
  <VPTeamPage>
    <VPTeamPageTitle>
      <template #title>Event Team</template>
    </VPTeamPageTitle>
    <TeamMembers size="small" :members="team" />
  </VPTeamPage>
</template>

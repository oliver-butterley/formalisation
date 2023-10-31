---
layout: page
---

<script setup lang='ts'>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'
import { ref } from 'vue'
import { useIdle, useIntervalFn } from '@vueuse/core'
import { data } from './helpers/team.data.ts'

/*
* Randomly order the array
*/
function random<Type>(array: Type[]) {
  return array.map(el => ({ el, sort: Math.random() }))
              .sort((a, b) => a.sort - b.sort)
              .map(({ el }) => el);
}

const team = ref(data.team)



// const { idle, lastActive } = useIdle(60 * 1000) // 1 min

const interval = 20 * 60 * 1000 // 20 minutes

const { pause, resume, isActive } = useIntervalFn(randomize, interval)

function randomize() {
  // if (idle.value) {
    team.value = random(team.value)
  // }
}

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Event Team</template>
  </VPTeamPageTitle>

  <VPTeamMembers size="small" :members="team" />
</VPTeamPage>

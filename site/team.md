---
layout: page
---

<script setup>
  import TeamPage from './helpers/TeamPage.vue'
  import { data } from "./helpers/team.data.ts";
</script>

<TeamPage :team="data.team" :interval="120"/>

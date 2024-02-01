<script setup lang="ts">
interface Item {
  speaker: string;
  title: string;
  abstract: string;
  time: string;
  link: string
}

const props = defineProps<{
  items: Item[];
}>();
</script>

<template>
  <ul>
    <li v-for="item in items">
      <strong> {{ item.title }}</strong>
      <ul class="none-list">
        <li>
          by <em>{{ item.speaker }}</em>
        </li>
        <li>Abstract: {{ item.abstract }}</li>
        <li>
          {{ item.time }} (<a :href="item.link">talk slides</a>)
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>
ul.none-list {
  list-style-type: none;
}
</style>

<template>
  <q-list
    padding
    class="task-card"
  >
    <q-item
      v-for="(item, i) in tasks"
      :key="i"
      clickable
      v-ripple
      :class="{'bg-blue-grey-1': item.done, 'text-grey-7': item.done}"
      @click="item.done = !item.done"
    >
      <q-item-section>
        <q-item-label>{{ item.todo }}</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-checkbox
          v-model="item.done"
          color="blue"
        />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'TaskCard',

  setup() {
    const tasks = ref([...Array(~~(Math.random() * 100))].map((v, i) => ({ todo: `task ${i}`, done: false })));
    return { tasks };
  },
});
</script>

<style lang="scss">
.task-card {
  width: 100%;
  max-width: $breakpoint-sm;
  padding: map-get($space-md, y);
}
</style>

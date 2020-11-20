<template>
  <q-list
    padding
    class="task-card"
  >
    <template v-if="editMode">
      <q-item
        v-for="(item, i) in tasks"
        :key="i"
      >
        <q-item-section>
          <q-item-label>
            <q-input
              v-model="item.todo"
              dense
            />
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn
            icon="close"
            flat
            round
            @click="deleteTask(i)"
          />
        </q-item-section>
      </q-item>
    </template>

    <template v-else>
      <q-item
        v-for="(item, i) in tasks"
        :key="i"
        clickable
        v-ripple
        :class="{'bg-blue-grey-1': item.done, 'text-grey-7': item.done}"
        @click="item.done = !item.done"
      >
        <q-item-section>
          <q-item-label>
            {{ item.todo }}
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-checkbox
            v-model="item.done"
            color="blue"
          />
        </q-item-section>
      </q-item>
    </template>
  </q-list>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'TaskCard',

  props: {
    editMode: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, no-bitwise
      tasks: [...Array(~~(Math.random() * 20))].map((v, i) => ({ todo: `task ${i}`, done: false })),
    };
  },

  methods: {
    deleteTask(id: number) {
      this.tasks.splice(id, 1);
    },
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

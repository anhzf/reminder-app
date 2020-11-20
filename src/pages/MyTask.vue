<template>
  <q-page class="q-py-md column items-center">
    <h2 class="text-h4">
      My Daily Task
    </h2>

    <task-card />

    <q-page-sticky
      position="bottom-right"
      :offset="[35, 35]"
    >
      <q-btn
        fab
        icon="edit"
        round
        size="lg"
        color="light-blue-6"
        text-color="white"
      />
    </q-page-sticky>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import TaskCard from 'components/TaskCard.vue';

export default defineComponent({
  name: 'PageMyTask',

  components: {
    TaskCard,
  },
});
</script>

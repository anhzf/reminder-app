<template>
  <q-page class="q-py-md column items-center">
    <h2 class="text-h4">
      My Daily Task
    </h2>

    <task-card :edit-mode="editMode" />

    <q-page-sticky
      position="bottom-right"
      :offset="[35, 35]"
    >
      <q-btn
        fab
        :icon="fabIcon"
        round
        size="lg"
        :color="fabBgColor"
        text-color="white"
        @click="editMode = !editMode"
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

  data() {
    return {
      editMode: false,
    };
  },

  computed: {
    fabIcon() {
      return this.editMode ? 'done' : 'edit';
    },
    fabBgColor() {
      return this.editMode ? 'green' : 'light-blue-6';
    },
  },
});
</script>

<template>
  <q-page class="column items-center q-py-md q-px-sm">
    <profile-card />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ProfileCard from 'components/ProfileCard.vue';

export default defineComponent({
  name: 'PageIndex',

  components: { ProfileCard },
});
</script>

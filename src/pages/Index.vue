<template>
  <q-page class="row items-center justify-evenly">
    <profile-card />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ProfileCard from 'components/ProfileCard';

export default defineComponent({
  name: 'PageIndex',

  components: { ProfileCard },
});
</script>

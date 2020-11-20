<template>
  <q-layout view="lHh Lpr fFf">
    <q-page-container class="home-page column justify-center items-center">
      <q-card class="shadow-24">
        <q-card-section>
          <h1 class="text-h4">
            Reminder-App
          </h1>
        </q-card-section>
        <q-separator inset />
        <q-card-actions align="right">
          <template v-if="loggedIn">
            <q-btn
              icon="exit_to_app"
              outline
              color="negative"
              padding="sm"
              @click="logout"
            >
              Sign out
            </q-btn>
            <q-btn
              icon="dashboard"
              unelevated
              color="primary"
              padding="sm"
              :to="{name: 'MyProfile'}"
            >
              Go to Dashboard
            </q-btn>
          </template>
          <template v-else>
            <q-btn
              icon="login"
              color="primary"
              flat
            >
              Sign in with Google
            </q-btn>
          </template>
        </q-card-actions>
      </q-card>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { authComposition } from 'src/services/auth';

export default defineComponent({
  name: 'PageHome',

  setup() {
    return {
      ...authComposition(),
    };
  },

  data: () => ({
    loggedIn: true,
  }),
});
</script>

<style lang="scss">
.home-page {
  height: 100vh;
  background: url('http://placeimg.com/1280/720/nature');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

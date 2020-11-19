<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Reminder App
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          icon="more_vert"
          aria-label="Menu"
          class="lt-sm"
        >
          <q-menu
            auto-close
            max-width="70vw"
            self="top right"
          >
            <q-list style="min-width: 100px">
              <q-item clickable>
                <q-item-section>Help &amp; Feedback</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

          <q-btn-dropdown
              label="Hi, Alwan!"
              no-caps
              flat
              auto-close
              align="center"
              class="gt-xs"
          >
            <q-list style="min-width: 150px">
              <q-item>
                <q-item-section avatar>
                    <q-avatar>
                        <q-img src="https://lh3.googleusercontent.com/a-/AOh14GiRwRAaixzKCat8PsljUIdjoUwJywYXmtoI9zB8Lw=s384-c-rg-br100" />
                    </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>Alwan Nuha</q-item-label>
                  <q-item-label caption lines="1">+62-851-5634-8055</q-item-label>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section>
                    Settings
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section>
                    Logout
                </q-item-section>
              </q-item>
            </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list padding>
        <q-item class="q-py-md">
          <q-item-section avatar>
            <q-avatar size="xl">
              <q-img src="https://lh3.googleusercontent.com/a-/AOh14GiRwRAaixzKCat8PsljUIdjoUwJywYXmtoI9zB8Lw=s384-c-rg-br100" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">
              Alwan Nuha Zaky Fadhila
            </q-item-label>
            <q-item-label caption>
              +62-851-5634-8055
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator class="q-my-sm" />

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />

        <q-separator class="q-my-sm" />

        <essential-link
          title="Help & Feedback"
          icon="help_center"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import EssentialLink from 'components/EssentialLink.vue';

const navData = [
  {
    title: 'My Profile',
    icon: 'person',
    to: { name: 'Home' },
  },
  {
    title: 'My Task',
    icon: 'description',
    to: { name: 'MyTask' },
  },
  {
    title: 'Settings',
    icon: 'settings',
    to: { name: 'Settings' },
  },
  {
    title: 'Logout',
    icon: 'exit_to_app',
    '@click': console.log('%cLogged Out!', 'color: red; background-color: white')
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const essentialLinks = ref(navData);

    return { leftDrawerOpen, essentialLinks };
  },
});
</script>

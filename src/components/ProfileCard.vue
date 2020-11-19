<template>
    <q-card
      bordered
      flat
      class="profile-card"
    >
      <div class="profile-card__edit-btn">
        <q-btn
          icon="edit"
          size="sm"
          color="blue"
          round
          flat
        />
      </div>

      <q-card-section class="text-center">
        <q-avatar size="5rem">
          <q-img src="https://lh3.googleusercontent.com/a-/AOh14GiRwRAaixzKCat8PsljUIdjoUwJywYXmtoI9zB8Lw=s384-c-rg-br100" />
        </q-avatar>

          <h5 class="text-h5 q-mt-lg q-mb-none">
            Alwan Nuha
          </h5>

          <a
            href="mailto:alwan.nuha7@gmail.com"
            class="text-subtitle2 text-grey-8 text-weight-light text-no-decoration"
          >alwan.nuha7@gmail.com
          </a>

      </q-card-section>

      <q-list padding class="q-my-sm">

        <q-item>
          <q-item-section avatar>
            <h6 class="text-caption q-ma-none text-grey-7">Phone number</h6>
          </q-item-section>
          <q-item-section>
            <span class="text-right">63234324234</span>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <h6 class="text-caption q-ma-none text-grey-7">Active since</h6>
          </q-item-section>
          <q-item-section>
            <span class="text-right">17/08/2001</span>
          </q-item-section>
        </q-item>

      </q-list>

    </q-card>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ProfileCard',

  props: {
    editable: {
      type: Boolean,
    },
  },
});
</script>

<style lang="scss">
.profile-card {
  position: relative;
  width: 100%;
  max-width: $breakpoint-xs;
  margin: 0 map-get($space-xs, x);
  padding: map-get($space-md, y);

  &__edit-btn {
    position: absolute;
    top: 0;
    right: 0;
    margin: map-get($space-sm, y) map-get($space-sm, x);
  }
}
</style>

<template>
  <q-item
    v-ripple
    clickable
    :to="to"
    @click="action"
  >
    <q-item-section
      v-if="icon"
      avatar
      class="q-pl-xs"
    >
      <q-icon
        color="blue-grey-5"
        :name="icon"
      />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-dark">
        {{ title }}
      </q-item-label>
      <q-item-label
        v-if="caption"
        caption
      >
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: '',
    },

    to: {
      type: [String, Object],
      default: '',
    },

    icon: {
      type: String,
      default: '',
    },

    action: {
      type: Function,
      default: () => false,
    },
  },
});
</script>

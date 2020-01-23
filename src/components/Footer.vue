<template>
 
    <v-footer>
      <v-card
        
        width="100%"
      
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="orange--text">
          2010 — <strong>Stemformatics</strong>
        </v-card-text>
      </v-card>
    </v-footer>

</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-home',
        'mdi-email',
        'mdi-twitter',
      ],
      items: [
        'default',
        'absolute',
        'fixed',
      ],
      padless: true,
      variant: 'default',
    }),
    computed: {
      localAttrs () {
        const attrs = {}

        if (this.variant === 'default') {
          attrs.absolute = false
          attrs.fixed = false
        } else {
          attrs[this.variant] = true
        }
        return attrs
      },
    },
  }
</script>
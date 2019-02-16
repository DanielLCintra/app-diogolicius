<template>
  <v-dialog
    v-model="dialogState"
    persistent
    max-width="400"
  >
    <v-card>
      <v-card-title>
        <h3 class="headline mb-0">
          Adicionar link
        </h3>
      </v-card-title>

      <v-card-text>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout
            row
            wrap
          >
            <v-flex xs6>
              <v-text-field
                v-model="rangePrice.start_quantity"
                name="start_quantity"
                label="Quantidade inicial"
                color="red accent-3"
                outline
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn
          class="white--text"
          flat
          @click.native="dialogState = !dialogState"
        >
          Cancelar
        </v-btn>

        <v-btn
          class="elevation-0 white"
          @click.native="dialog = true"
        >
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: 'AddLinkModal',

  props: {
    dialog: {
      type: Boolean
    }
  },

  data: () => ({
    rangePrice: {
      start_quantity: null
    }
  }),

  computed: {
    dialogState: {
      get() {
        return this.dialog
      },

      set() {
        this.rangePrice = null
        this.$emit('close-dialog')
      }
    }
  },

  methods: {
    add() {
      this.$emit('item-add', { ...this.rangePrice })
    }
  }
}
</script>

<style>

</style>

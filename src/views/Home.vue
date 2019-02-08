<template>
  <v-card>
    <v-card-title>
      <h3 class="headline mb-0">
        Diogolicius
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
          <v-flex xs10>
            <v-autocomplete
              v-model="search"
              label="Pesquisar"
              :items="linksCollection"
              item-text="bookmark_title"
              item-value="bookmark_title"
              outline
              clearable
            />
          </v-flex>

          <v-flex xs2>
            <v-btn
              class="elevation-0 white"
              flat
            >
              Adicionar
            </v-btn>
          </v-flex>

          <v-flex xs12>
            <v-card>
              <v-card-title primary-title>
                <h5 class="headline mb-0 subtitle">
                  Resultado
                </h5>
              </v-card-title>

              <v-card-text>
                <v-data-table
                  :headers="headers"
                  :items="linksCollection"
                  :rows-per-page-items="[5, 10, 20, 40]"
                  :loading="loading"
                  :search="search"
                  no-data-text="Sem dados para exibir"
                  no-results-text="Nenhum registro foi encontrado"
                  rows-per-page-text="Registros por página"
                >
                  <template
                    slot="items"
                    slot-scope="props"
                  >
                    <tr>
                      <td>{{ props.item.bookmark_title }}</td>
                      <td>{{ props.item.bookmark_link }}</td>
                      <td>{{ props.item.tags }}</td>
                      <td width="100">
                        <v-layout
                          justify-space-between
                          align-center
                        >
                          <v-btn
                            flat
                            icon
                          >
                            <v-icon
                              class="blue-grey--text text--darken-2"
                            >
                              edit
                            </v-icon>
                          </v-btn>

                          <v-btn
                            flat
                            icon
                          >
                            <v-icon class="blue-grey--text text--darken-2">
                              delete
                            </v-icon>
                          </v-btn>
                        </v-layout>
                      </td>
                    </tr>
                  </template>
                </v-data-table>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
    search: null,
    headers: [
      { text: 'Nome', value: 'bookmark_title', align: 'left' },
      { text: 'Link', value: 'bookmark_link', align: 'left' },
      { text: 'Tags', value: 'tags', align: 'left' },
      { text: '', value: '', align: 'right' }
    ],
    linksCollection: [],
    loading: false
  }),

  created() {
    this.getAll()
  },

  methods: {
    getAll() {
      this.loading = true
      this.$db.ref().on('value', (snapshot) => {
        this.linksCollection = snapshot.val().bookmarks
        this.loading = false
      })
    }
  }
}
</script>

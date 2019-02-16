<template>
  <v-app id="inspire">
    <v-container
      align-center
      justify-center
    >
      <v-layout
        row
        wrap
        align-center
        justify-center
      >
        <v-flex
          xs12
          sm5
        >
          <v-card>
            <v-layout
              row
              align-center
              justify-center
              class="py-5"
            >
              <v-form @submit.prevent="login()">
                <v-flex xs12>
                  <div class="logo__container">
                    <div class="logo__text">
                      <h1 class="text-xs-center mb-5">
                        Diogolicius
                      </h1>
                    </div>
                  </div>
                  <v-text-field
                    id="email"
                    v-model="person.email"
                    name="email"
                    label="E-mail"
                    type="email"
                    required
                    class="teste1"
                    outline
                  />
                </v-flex>

                <v-flex xs12>
                  <v-text-field
                    id="password"
                    v-model="person.password"
                    name="password"
                    label="Senha"
                    type="password"
                    required
                    outline
                  />
                </v-flex>

                <v-flex
                  xs12
                >
                  <div class="notification-message">
                    <span
                      v-for="(message, key) in notificationMessage"
                      :key="key"
                      class="message-item"
                    >
                      {{ message }} <br>
                    </span>
                  </div>


                  <div class="text-xs-center">
                    <v-btn
                      type="submit"
                      :disabled="loading"
                      :loading="loading"
                    >
                      Entrar
                    </v-btn>
                  </div>
                </v-flex>

                <v-flex
                  xs12
                  class="py-2"
                >
                  <div class="text-xs-center forgot-password">
                    Esqueceu a senha?
                  </div>
                </v-flex>
              </v-form>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'LoginIndex',

  data: () => ({
    person: {
      email: null,
      password: null
    },
    loading: false,
    notificationMessage: {
      message: 'Preencha os dados para fazer login'
    },
    loggedUser: null
  }),

  created() {
    this.$auth.signOut()
    setTimeout(() => {
      this.notificationMessage = []
    }, 3000)
  },

  mounted() {
    this.$auth.onAuthStateChanged((user) => {
      this.loggedUser = user
      console.log('usuário deslogado')
      if (user) {
        console.log('usuário logado')
        this.$router.push({ name: 'home' })
      }
    })
  },

  methods: {
    login() {
      this.loading = true
      const { email, password } = this.person
      this.$auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          this.notificate('Login realizado com sucesso.')
          this.loading = false
          this.$router.push({ name: 'home' })
        })
        .catch(({ code, message }) => {
          this.notificate(`${code} - ${message}`)
        })
    },

    validateForm() {
      return this.person.email === ''
        || this.person.email === null
        || this.person.password === ''
        || this.person.password === null
    },

    handleRequestError({ data }) {
      this.notificate(data.message)
    },

    notificate(message) {
      this.notificationMessage.push(message)

      setTimeout(() => {
        this.notificationMessage = []
      }, 3000)
    }
  }
}
</script>

<style>
form.v-form {
  width: 80%;
}
.notification-message {
  text-align: center;
  margin: 0px 0px 16px;
  font-weight: bold;
}
.message-item {
  font-size: 15px;
  font-weight: 400;
}
.logo{
  text-align: center;
}
.logo__container {
  display: flex;
  justify-content: center;
}
.logo__text {
  font-size: 10px;
  padding: 3.5em 0 0;
  font-family: Roboto;
}
.logo__image {
  max-width: 100px;
  max-height: 100px;
  margin-left: -1.5em;
}
.forgot-password {
  font-weight: 100 !important;
  margin-top: 0px;
  cursor: pointer;
}
.forgot-password:hover {
  text-decoration: underline;
}
</style>

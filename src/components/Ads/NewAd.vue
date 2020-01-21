<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <h1 class="text--secondary mb-3">Create new ad</h1>
        <v-form v-model="valid" ref="form" validation>
          <v-text-field
            label="Ad title"
            name="title"
            type="text"
            v-model="title"
            required
            :rules="[v => !!v || 'Title is required']"
          />

          <v-textarea
            label="Ad description"
            name="description"
            type="textarea"
            v-model="description"
            multi-line
            :rules="[v => !!v || 'Description is required']"
          ></v-textarea>
        </v-form>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-btn
          color="blue-grey"
          class="ma-2 white--text"
          @click="[]"
        >
          Upload
          <v-icon right dark>mdi-cloud-upload</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <img height="100" src="">
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-switch
          v-model="promo"
          label="Add to promo?"
          color="primary"
        ></v-switch>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-spacer></v-spacer>
        <v-btn class="success" :loading="loading" :disabled="!valid || loading" @click="createAd">Create ad</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: '',
      promo: false,
      valid: false
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    createAd () {
      if(this.$refs.form.validate()) {
        //logic
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          imageSrc: "https://miro.medium.com/max/1200/1*EM2oYsb4-NzwJ0YqszVaig.png"
        }
        this.$store.dispatch('createAd', ad)
          .then (() => {
            this.$router.push('/list')
          })
      }
    }
  }
}
</script>

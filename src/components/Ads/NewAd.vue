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
          @click="triggerUpload"
        >
          Upload
          <v-icon right dark>mdi-cloud-upload</v-icon>
        </v-btn>
        <input type="file" ref="fileInput" accept="image/*" @change="onFileChange" hidden>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <img v-if="imageSrc" height="100" :src="imageSrc">
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
        <v-btn class="success" :loading="loading" :disabled="!valid || !image || loading" @click="createAd">Create ad</v-btn>
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
      valid: false,
      image: null,
      imageSrc: ''
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    triggerUpload () {
      this.$refs.fileInput.click()
    },
    onFileChange (event) {
      const file = event.target.files[0]

      const reader = new FileReader()
      reader.onload =  e => {
        this.imageSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.image = file
    },
    createAd () {
      if(this.$refs.form.validate() && this.image) {
        //logic
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          image: this.image
        }
        this.$store.dispatch('createAd', ad)
          .then (() => {
            this.$router.push('/list')
          })
          .catch(() =>{})
      }
    }
  }
}
</script>

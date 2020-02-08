<template>
  <v-dialog v-model="modal" width="400px">

    <template v-slot:activator="{ on }">
    <v-btn class="primary" text v-on="on">Buy</v-btn>
    </template>

      <v-card>

        <v-card-title class="headline">Do you want to bue it?</v-card-title>

        <v-divider></v-divider>

        <v-card-text>

          <v-text-field
            label="Your name"
            name="name"
            type="text"
            v-model="name"
            required
          />

          <v-text-field
            label="Your phone"
            name="phone"
            type="text"
            v-model="phone"
            required
          />

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="" text @click="onCancel" :disabled="localLoading">Close</v-btn>
          <v-btn color="success" @click="onSave" :disabled="localLoading" :loading="localLoading">Buy it!</v-btn>
        </v-card-actions>

      </v-card>

  </v-dialog>
</template>

<script>

  export default {
    props: ['ad'],
    data () {
      return {
        modal: false,
        name: '',
        phone: '',
        localLoading: false
      }
    },
    methods: {
      onCancel () {
        this.name = ''
        this.phone = ''
        this.modal = false
      },
      onSave () {
        if (this.name !== '' && this.phone !== '') {
          this.localLoading = true
          this.$store.dispatch('createOrder', {
            name: this.name,
            phone: this.phone,
            adId: this.ad.id,
            ownerId: this.ad.ownerId
          })
          .finally(() => {
            this.name = ''
            this.phone = ''
            this.modal = false
            this.localLoading = false
          })

          this.loading = false
        }
      }
    }
  }

</script>

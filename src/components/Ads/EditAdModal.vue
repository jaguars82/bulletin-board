<template>
  <v-dialog v-model="modal" width="400px">

    <template v-slot:activator="{ on }">
    <v-btn class="warning" text v-on="on">Edit</v-btn>
    </template>

      <v-card>

        <v-card-title class="headline">Edit ad</v-card-title>

        <v-divider></v-divider>

        <v-card-text>

          <v-text-field
            label="Title"
            name="title"
            type="text"
            v-model="editedTitle"
            required
          />

          <v-textarea
            label="Description"
            name="description"
            type="textarea"
            v-model="editedDescription"
            multi-line
          ></v-textarea>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="" text @click="onCancel">Cancel</v-btn>
          <v-btn color="success" @click="onSave">Save</v-btn>
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
        editedTitle: this.ad.title,
        editedDescription: this.ad.description
      }
    },
    methods: {
      onCancel () {
        this.editedTitle = this.ad.title
        this.editedDescription = this.ad.description
        this.modal = false
      },
      onSave () {
        if (this.editedTitle !== '' && this.editedDescription !== '') {

          this.$store.dispatch('editAd', {
            title: this.editedTitle,
            description: this.editedDescription,
            id: this.ad.id
          })

          this.loading = false
        }
      }
    }
  }

</script>

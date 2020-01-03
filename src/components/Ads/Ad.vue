<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-img :src="ad.imageSrc" height="300px"></v-img>
          <v-card-title>{{ ad.title }}</v-card-title>
          <v-card-text>{{ ad.description }}</v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn class="warning" text>Edit</v-btn>
            <v-btn class="success">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    ad () {
      const id = this.id
      return this.$store.getters.adById(id)
    }
  }
}
</script>

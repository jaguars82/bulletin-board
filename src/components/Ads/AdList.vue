<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">

        <h1 class="text--secondary mb-3">My ads</h1>

        <v-card class="elevation-10 mb-3" v-for="ad in myAds" :key="ad.id">
          <v-row>
            <v-col class="py-0" cols="4">
              <v-img
                :src="ad.imageSrc"
                height="180px"
              ></v-img>
            </v-col>
            <v-col cols="8">
              <v-card-title>
                {{ ad.title }}
              </v-card-title>

              <v-card-text>{{ ad.description }}</v-card-text>

              <v-card-actions>

                <v-spacer></v-spacer>

                <v-btn class="info" :to="'ad/' + ad.id">Open</v-btn>

              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    myAds () {
      return this.$store.getters.myAds
    }
  }
}
</script>

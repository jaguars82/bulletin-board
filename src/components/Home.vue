<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
            <v-carousel>
              <v-carousel-item
                v-for="ad in ads"
                :key="ad.id"
                :src="ad.imageSrc"
                reverse-transition="fade-transition"
                transition="fade-transition"
              >
                <div class="car-link">
                  <v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
                </div>
              </v-carousel-item>
            </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-row>
        <v-col :cols="cols" v-for="ad of ads" :key="ad.id">
            <v-card>
              <v-img
                class="white--text align-end"
                height="200px"
                :src="ad.imageSrc"
              >
                <v-card-title>{{ad.title}}</v-card-title>
              </v-img>

              <v-card-text class="text--primary">
                <div>{{ad.description}}</div>
              </v-card-text>

              <v-card-actions>
                <v-spacer />
                <v-btn
                  :to="'/ad/' + ad.id"
                  text
                >
                  Open
                </v-btn>

                <v-btn
                  class="primary"
                  raised
                >
                  Buy
                </v-btn>
              </v-card-actions>
            </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ads: [
        {
          title: 'First ad',
          description: 'Hello! I am 1st description!',
          promo: false,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          id: '123'
        },
        {
          title: 'Second ad',
          description: 'Hello! I am 2nd description!',
          promo: true,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          id: '123243'
        },
        {
          title: 'Third ad',
          description: 'Hello! I am 3rd description!',
          promo: false,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          id: '12343545'
        }
      ]
    }
  },
  computed: {
    cols () {
      const breakPoint = this.$vuetify.breakpoint.name;
      switch (breakPoint){
        case 'xs': return 12
        case 'sm': return 6
        default: return 4
      }
    }
  }
}
</script>

<style scoped>
  .car-link{
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0,0,0,.3);
    transform: translate(-50%, 0);
    padding: 10px 15px;
    border-radius: 5px 5px 0 0;
  }
</style>

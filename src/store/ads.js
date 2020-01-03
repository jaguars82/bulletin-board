export default {
  state: {
    ads: [
    {
        title: 'First ad',
        description: 'Hello! I am 1st description!',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        id: '123'
      },
      {
        title: 'Second ad',
        description: 'Hello! I am 2nd description!',
        promo: false,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        id: '123243'
      },
      {
        title: 'Third ad',
        description: 'Hello! I am 3rd description!',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        id: '12343545'
      }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createAd ({commit}, payload) {
      payload.id = '657667888'
      commit('createAd', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {return ad.promo})
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}

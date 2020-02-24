<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" v-if="loading">
        <v-progress-circular
          size="100"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </v-col>
      <v-col cols="12" sm="8" md="6" v-else-if="!loading && orders.length !== 0">
        <h1 class="text--secondary mb-3">Orders</h1>
        <v-list
          subheader
          two-line
          flat
        >
          <v-list-item-group>
            <v-list-item v-for="order in orders" :key="order.id">
                <v-list-item-action>
                  <v-checkbox
                    color="success"
                    :input-value="order.done"
                    @click="markDone(order)"
                  ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{ order.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn class="primary" :to="'/ad/' + order.adId">Open</v-btn>
                </v-list-item-action>
            </v-list-item>

          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="12" sm="8" md="6" v-else>
        <h1 class="text--secondary">You have no orders</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    orders () {
      return this.$store.getters.orders
    }
  },
  methods: {
    markDone (order) {
      this.$store.dispatch('markOrderDone', order.id)
      .then(() => {
        order.done = true
      })
      .catch(() => {})
    }
  },
  created () {
    this.$store.dispatch('fetchOrders')
  }
}
</script>

<template>
  <v-container
    fluid
    grid-list-xl
  >
    <v-layout row>
      <v-flex
        xs12
        md6
        lg6
      >
        <material-stats-card
          :value="String(summery.Global.TotalRecovered)"
          :sub-text="String(summery.Global.NewRecovered)"
          color="green"
          icon="mdi-account"
          title="Izliječeni"
          sub-icon="mdi-plus"
          small-sub-text="Zadnja 24 sata"
        />
      </v-flex>
      <v-flex
        xs12
        md6
        lg6
      >
        <material-stats-card
          :value="String(summery.Global.TotalConfirmed)"
          :sub-text="String(summery.Global.NewConfirmed)"
          color="orange"
          icon="mdi-account"
          title="Potvrđeni slučajevi"
          small-sub-text="Zadnja 24 sata"
          sub-icon="mdi-plus"
          sub-icon-color="error"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg6
      >
        <material-stats-card
          :value="String(summery.Global.TotalDeaths)"
          :sub-text="String(summery.Global.NewDeaths)"
          color="red"
          icon="mdi-account"
          title="Smrtni slučajevi"
          small-sub-text="Zadnja 24 sata"
          sub-icon="mdi-plus"
          sub-icon-color="error"
        />
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex
        xs6
        lg12
      >
        <v-data-table
          :headers="headers"
          :items="summery.Countries"
          :pagination.sync="pagination"
          dense
          class="elevation-1"
        >
          <template v-slot:items="props">
            <td class="text-xs-center">{{ props.item.Country }}</td>
            <td class="text-xs-center">{{ props.item.NewConfirmed }}</td>
            <td class="text-xs-center">{{ props.item.TotalConfirmed }}</td>
            <td class="text-xs-center">{{ props.item.NewRecovered }}</td>
            <td class="text-xs-center">{{ props.item.TotalRecovered }}</td>
            <td class="text-xs-center">{{ props.item.NewDeaths }}</td>
            <td class="text-xs-center">{{ props.item.TotalDeaths }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'World',
  data () {
    return {
       headers: [
        { text: 'Država', value: 'Country', align: 'center', sortable: false },
        { text: 'Novi slučajevi', value: 'NewConfirmed', align: 'center', sortable: true },
        { text: 'Ukupno potvrđeno', value: 'TotalConfirmed', align: 'center', sortable: true },
        { text: 'Novo oporavljeni', value: 'NewRecovered', align: 'center', sortable: true },
        { text: 'Ukupno oporavljeni', value: 'TotalRecovered', align: 'center', sortable: true },
        { text: 'Novi smrtni slučajevi', value: 'NewDeaths', align: 'center', sortable: true },
        { text: 'Ukupno smrtnih slučajeva', value: 'TotalDeaths', align: 'center', sortable: true }
      ],
      pagination: {
       descending: true,
       sortBy: 'Date',
       rowsPerPage: 10
      },
      Countries: []
    }
  },
  computed: mapState(['summery']),
  created () {
    this.$store.dispatch('summery')
  }
}
</script>

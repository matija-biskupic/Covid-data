<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout wrap>
      <v-flex
        md12
        sm12
        lg12>
        <v-combobox
          :items="CountryList"
          v-model="country"
          item-text="Country"
          item-value="Slug"
          label="Država"
        />
        <v-data-table
          :headers="headers"
          :items="CountryData"
          :pagination.sync="pagination"
          dense
          class="elevation-1"
        >
          <template v-slot:items="props">
            <td class="text-xs-center">{{ new Date(props.item.Date).toLocaleDateString('hr') }}</td>
            <td class="text-xs-center">{{ props.item.Active }}</td>
            <td class="text-xs-center">{{ props.item.Recovered }}</td>
            <td class="text-xs-center">{{ props.item.Deaths }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Country',
  data () {
    return {
       headers: [
        {
          text: 'Datum',
          value: 'Date',
          align: 'center',
          sortable: true
        },
        {
          text: 'Aktivni',
          value: 'Active',
          align: 'center',
          sortable: true
        },
        {
          text: 'Oporavljeni',
          value: 'Recovered',
          align: 'center',
          sortable: true
        },
        {
          text: 'Smrtni slučajevi',
          value: 'Deaths',
          align: 'center',
          sortable: true
        }
      ],
      pagination: {
       descending: true,
       sortBy: 'Date',
       rowsPerPage: 10
      },
      country: undefined
    }
  },
  computed: mapState(['CountryList', 'CountryData']),
  watch: {
    country: function (newCountry, oldCountry) {
      if (newCountry) {
        this.getCountryData()
      }
    }
  },
  created () {
    this.$store.dispatch('countries')
  },
  methods: {
    getCountryData: function () {
      this.$store.dispatch('countryData', this.country.Slug)
    }
  }
}
</script>

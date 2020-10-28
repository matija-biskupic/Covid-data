// https://vuex.vuejs.org/en/actions.html
import axios from 'axios'
import state from './state'
// The login action passes vuex commit helper that we will use to trigger mutations.
export default {
  summery ({ commit }) {
    if (state.summery.Countries.length === 0) {
      axios.get('/summary')
      .then(response => {
        commit('saveSummery', response.data)
      })
      .catch(error => {
        console.log(error)
      })
    }
    },
    countries ({ commit }) {
      if (state.CountryList.length === 0) {
        axios.get('/countries')
        .then(response => {
          commit('saveCountryList', response.data)
        })
        .catch(error => {
          console.log(error)
        })
      }
    },
    countryData ({ commit }, countrySlug) {
      axios.get(`/total/country/${countrySlug}`)
      .then(response => {
        commit('saveCountryData', response.data)
      })
        .catch(error => {
         console.log(error)
        })
    }
}

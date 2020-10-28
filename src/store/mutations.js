// https://vuex.vuejs.org/en/mutations.html

export default {
  loading (state, isLoading) {
    state.isLoading = isLoading
  },
  saveSummery (state, summery) {
    state.summery = summery
  },
  saveCountryList (state, countryList) {
    state.CountryList = countryList
  },
  saveCountryData (state, countryData) {
    state.CountryData = countryData
  }
}

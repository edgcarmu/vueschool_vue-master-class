import Vue from 'vue'
import moment from 'moment'

Vue.filter('uppercase', function (value) {
  if (!value) return ''
  return value.toUpperCase()
})

Vue.filter('humanFriendlyDate', function (value) {
  if (!value) return ''
  return moment.unix(value).format('MMMM Do YYYY, h:mm:ss a')
})

Vue.filter('diffForHumans', function (value) {
  if (!value) return ''
  return moment.unix(value).fromNow()
})

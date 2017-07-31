<template lang="pug">
  .map
</template>

<script>
import { mapState } from 'vuex'
import _ from 'lodash'
// import { MAP_LIST } from 'store/map/keys'
let AMap = null

const loadScript = key => new Promise((resolve, reject) => {
  const callback = `CALLBACK_${Date.now()}`
  window[callback] = () => resolve(window.AMap)
  const script = document.createElement('script')
  script.src = `//webapi.amap.com/maps?v=1.3&key=${key}&callback=${callback}`
  document.body.appendChild(script)
})
export default {
  name: 'map',
  data () {
    return {
      map: null,
      infoData: {},
      infoMarkers: []
    }
  },
  computed: {
    ...mapState({
      info: ({map}) => map.list
    })
  },
  methods: {
    async init () {
      AMap = await loadScript('4d014a4800e8f9fc8ef524a94db2588a')
      this.map = new AMap.Map(this.$el, {resizeEnable: true, zoom: 14, doubleClickZoom: false})
      this.map.setCity('昆明')
      this.map.setStatus({ scrollWheel: false })
      this.map.setMapStyle('amap://styles/blue')
      this.map.plugin(['AMap.TooBar'], () => {
        this.map.addControl(new AMap.ToolBar({ offset: new AMap.Pixel(0, 100), position: 'RB', liteStyle: true }))
      })
    },
    renderInfoMarker () {
      _.forEach(this.infoMarkers, marker => marker.setMap(null))

      this.infoMarkers = _.map(this.info, (arg) => {
        const icon = '/static/images/icon.png'
        return this.createMarker({ position: arg.position, icon })
      })
    },
    createMarker ({ position = {}, icon }) {
      const { longitude, latitude } = position
      console.log('position', position)
      const location = new AMap.Marker({
        map: this.map,
        position: [longitude || 102.713114, latitude || 25.059949],
        icon: new AMap.Icon({ image: icon })
      })
      console.log('location', location)
      return location
    },
    // 异步调用防止阻塞
    async fetchInfo () {
      await this.$store.dispatch('map/list')
      this.renderInfoMarker()
      setTimeout(() => this.fetchInfo(), 20000)
    }
  },
  async mounted () {
    await this.init()
    this.fetchInfo()
  }
}
</script>

<template lang="pug">
  .map
</template>

<script>
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
      map: null
    }
  },
  methods: {
    async init () {
      console.log('创建地图')
      AMap = await loadScript('4d014a4800e8f9fc8ef524a94db2588a')
      this.map = new AMap.Map(this.$el, {resizeEnable: true, zoom: 14, doubleClickZoom: false})
      this.map.setCity('昆明')
      this.map.setStatus({ scrollWheel: false })
      this.map.setMapStyle('amap://styles/blue')
      this.map.plugin(['AMap.TooBar'], () => {
        this.map.addControl(new AMap.ToolBar({ offset: new AMap.Pixel(0, 100), position: 'RB', liteStyle: true }))
      })
      this.map.featureType(['bg', 'green ', 'road', 'building'])
      this.showBuildingBlock(true)
    }
  },
  async mounted () {
    await this.init()
  }
}
</script>

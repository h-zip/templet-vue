<template>
  <div :class="containerClasses" :style="containerStyles" ref="container"
       @touchend="onTouchEnd"
       @touchmove="onTouchMove"
       @touchstart="onTouchStart"
       @scroll="onScroll">
    <div :class="contentClasses" :style="contentStyles" ref="content">
      <slot name="header"></slot>
      <slot name="content"></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  const prefixCls = 'xxx-scroll-view';
	export default {
		name: "scroll-view",
    props: {
		  height: String,
      width: String
    },
    computed: {
      containerClasses: function () {
        return [
          `${prefixCls}`
        ]
      },
      contentClasses: function () {
        return [
          `${prefixCls}-content`
        ]
      },
      containerStyles: function () {
        return {
          top: '-30px',
          height: `calc(${this.height} + 30px)`,
          width: this.width
        }
      },
      contentStyles: function () {
        return {
          transform: 'translate3d(0, ' + this.top + 'px, 0)',
          transitionDuration: this.during + 'ms'
        }
      },
    },
    data: function () {
		  return {
        content: null,
        header: null,
        touching: false,
        refreshing: false,
        startY: 0,
        diff: 0,
        top: 0,
        during: 0
      }
    },
    mounted: function () {
		  this.content = this.$refs.content
      this.header = this.$children[0]
      // console.log(this.$children)
      // console.log(this.$refs.container.scrollHeight)
      // document.addEventListener('touchmove', this.stopTouch, { passive: true, capture: false })
    },
    methods: {
      clientHeight: function () {
        return this.$refs.container ? this.$refs.container.clientHeight : 0
      },
      scrollHeight: function () {
        return this.$refs.container ? this.$refs.container.scrollHeight : 0
      },
      scrollTop: function () {
        return this.$refs.container ? this.$refs.container.scrollTop : 0
      },
		  onScroll: function (e) {
        let data = this.configData()
        if (this.header && this.header.onScroll) {this.header.onScroll(e, data) }
        if (this.footer && this.footer.onScroll) {this.footer.onScroll(e, data) }
		    this.$emit('on-scroll', e)
        // e.preventDefault()
        // console.log(this.$refs.container.scrollTop)
        // if (!this.touching) {
        //   this.$refs.header.style.top =`${-30 - this.content.scrollTop}px`
        // }
        // this.$refs.header.style.top =`${-30 - this.content.scrollTop}px`
        // let x = this.lastTop - this.refreshingTop
        // let y = this.content.scrollTop - this.refreshingTop
        // let self = this
        // if (x >= 0 && y < 0) {
        //   this.$refs.icon.style.transition =  'transform 0.3s'
        //   this.$refs.icon.style.transform =  `rotate(180deg)`
        // } else if (x <= 0 && y > 0){
        //   this.$refs.icon.style.transition =  'transform 0.3s'
        //   this.$refs.icon.style.transform =  `rotate(0deg)`
        // }
        // this.lastTop = this.content.scrollTop
        // if (this.refreshing && this.content.scrollTop >= this.refreshingTop) {
        //   // this.refreshing = false
        //   this.$refs.container.style.transition =  'transform 0s'
        //   this.$refs.container.style.transform =  `translate3d(0,50px,0)`
        //   if (!this.flag) {
        //     this.flag = true
        //     setTimeout(function () {
        //       self.$refs.container.style.transition =  'transform 0.5s'
        //       self.$refs.container.style.transform =  `translate3d(0,0,0)`
        //       self.flag = false
        //       setTimeout(function () {
        //         self.$refs.container.style.transition =  ''
        //         self.$refs.container.style.transform =  ''
        //         self.refreshing = false
        //       }, 500)
        //     }, 2000)
        //   }
      // }
        // this.$emit('on-scroll',this.container)
      },
      onTouchEnd: function (e) {
        this.touching = false
        let data = this.configData()
        if (this.header && this.header.onTouchEnd) {this.header.onTouchEnd(e, data) }
        if (this.footer && this.footer.onTouchEnd) {this.footer.onTouchEnd(e, data) }
        this.$emit('on-touchend', e)
      },
      onTouchStart: function (e) {
        // console.log('Start')
        this.startY = e.targetTouches[0].pageY
        this.touching = true
        let data = this.configData()
        if (this.header && this.header.onTouchStart) {this.header.onTouchStart(e, data) }
        if (this.footer && this.footer.onTouchStart) {this.footer.onTouchStart(e, data) }
        this.$emit('on-touchstart', e)
      },
      onTouchMove: function (e) {
        // console.log('Move')
        this.diff = e.targetTouches[0].pageY - this.startY
        let data = this.configData()
        if (this.header && this.header.onTouchMove) {this.header.onTouchMove(e, data) }
        if (this.footer && this.footer.onTouchMove) {this.footer.onTouchMove(e, data) }
        this.$emit('on-touchmove', e)
      },
      onTouchCancel: function (e) {
        // console.log('Cancel')
        let data = this.configData()
        if (this.header && this.header.onTouchCancel) {this.header.onTouchCancel(e, data) }
        if (this.footer && this.footer.onTouchCancel) {this.footer.onTouchCancel(e, data) }
        this.$emit('on-touchcancel', e)
      },
      configData: function () {
        return {
          scrollTop: this.scrollTop(),
          clientHeight: this.clientHeight(),
          scrollHeight: this.scrollHeight(),
          touching: this.touching,
          refreshing: this.refreshing,
          diff: this.diff,
          top: this.top,
          during: this.during
        }
      },
      setTop: function (v) {
        this.top = v
      },
      setDuring: function (v) {
        this.during = v
      },
      setRefreshing: function (v) {
        this.refreshing = v
      }
    }
	}
</script>

<style scoped>

</style>

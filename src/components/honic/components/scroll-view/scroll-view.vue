<template>
  <div :class="containerClasses" :style="containerStyles" ref="container">
    <div :class="headerClasses" :style="headerStyles" ref="header">
      <i :class="iconClasses" :style="iconStyles" ref="icon"></i>
      <span style="font-size: 17px; line-height: 30px;">下拉加载更多</span>
    </div>
    <div :class="contentClasses"
         @scroll.passive.capture="onScroll"
         @touchend="onTouchEnd"
         ref="content">
      <!--@touchmove="onTouchMove"-->
      <!--@touchstart="onTouchStart"-->
      <!--@touchend="onTouchEnd"-->
      <!--@touchcancel="onTouchCancel"-->
      <slot></slot>
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
      headerClasses: function () {
        return [
          `${prefixCls}-header`
        ]
      },
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
      iconClasses: function () {
        return [
          {
            'ivu-icon': true,
            'ivu-icon-md-arrow-down': !this.refreshing,
            'ivu-icon-ios-loading': this.refreshing,
            'xxx-loading': this.refreshing
          }
        ]
      },
      iconStyles: function () {
        return {
          color: 'white',
          width: '20px',
          height: '20px',
          verticalAlign: 'middle'
          // fontSize: '22px',
          // lineHeight: '30px'
        }
      },
      headerStyles: function () {
        return {
          top: '-30px',
          textAlign: 'center',
          width: '100%',
          height: '30px'
        }
      },
      containerStyles: function () {
        return {
          height: this.height,
          width: this.width
        }
      }
    },
    data: function () {
		  return {
        content: null,
        header: null,
        refreshing: false,
        animating: false,
        flag: false,
        lastTop: 0,
        refreshingTop: -50
      }
    },
    mounted: function () {
		  this.content = this.$refs.content
      // document.addEventListener('touchmove', this.stopTouch, { passive: true, capture: false })
    },
    methods: {
      stopTouch: function (e) {
        e.preventDefault()
      },
		  onScroll: function (e) {
        this.$refs.header.style.top =`${-30 - this.content.scrollTop}px`
        let x = this.lastTop - this.refreshingTop
        let y = this.content.scrollTop - this.refreshingTop
        let self = this
        if (x >= 0 && y < 0) {
          this.animating = true
          this.$refs.icon.style.transition =  'transform 0.3s'
          this.$refs.icon.style.transform =  `rotate(180deg)`
        } else if (x <= 0 && y > 0){
          this.animating = true
          this.$refs.icon.style.transition =  'transform 0.3s'
          this.$refs.icon.style.transform =  `rotate(0deg)`
        }
        this.lastTop = this.content.scrollTop
        if (this.refreshing && this.content.scrollTop >= this.refreshingTop) {
          // this.refreshing = false
          this.$refs.container.style.transition =  'transform 0s'
          this.$refs.container.style.transform =  `translate3d(0,50px,0)`
          if (!this.flag) {
            this.flag = true
            setTimeout(function () {
              self.$refs.container.style.transition =  'transform 0.5s'
              self.$refs.container.style.transform =  `translate3d(0,0,0)`
              self.flag = false
              setTimeout(function () {
                self.$refs.container.style.transition =  ''
                self.$refs.container.style.transform =  ''
                self.refreshing = false
              }, 500)
            }, 2000)
          }
      }
        // this.$emit('on-scroll',this.container)
      },
      onTouchEnd: function (e) {
        // console.log('End')
        if (this.content.scrollTop <= this.refreshingTop && !this.refreshing) {
          this.refreshing = true
        }
      },
      onTouchStart: function (e) {
        // console.log('Start')
      },
      onTouchMove: function (e) {
        // console.log('Move')
      },
      onTouchCancel: function (e) {
        // console.log('Cancel')
      }
    }
	}
</script>

<style scoped>

</style>

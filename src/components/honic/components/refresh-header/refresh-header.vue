<template>
  <div :class="headerClasses" :style="headerStyles">
    <i :class="iconClasses" :style="iconStyles"></i>
    <span style="font-size: 17px; line-height: 30px;">{{ text }}</span>
  </div>
</template>

<script>
  const prefixCls = 'xxx-refresh-header';
  const t1 = '下拉刷新';
  const t2 = '松手刷新';
  const t3 = '正在努力加载中。。。';
	export default {
		name: "refresh-header",
    props: {
		  during: {
		    type: Number,
        default: 300
      },
      interval: {
        type: Number,
        default: 3000
      }
    },
    computed: {
		  text: function () {
		    let t = t1
		    if (this.refreshing) {
		      t = t3
        } else {
		      if (this.arrowFlag === 1) {
		        t = t2
          } else {
		        t = t1
          }
        }
		    return t
      },
      headerClasses: function () {
        return [
          `${prefixCls}`
        ]
      },
      iconClasses: function () {
        return [
          {
            'ivu-icon': true,
            'ivu-icon-md-arrow-down': !this.refreshing,
            'ivu-icon-ios-loading': this.refreshing,
            'xxx-loading': this.refreshing,
            'xxx-refresh-arrow' :true,
            'xxx-refresh-arrow-up': this.arrowFlag === 1,
            'xxx-refresh-arrow-down': this.arrowFlag === 2
          }
        ]
      },
      iconStyles: function () {
        return [
          {
            color: 'white',
            width: '20px',
            height: '20px',
            verticalAlign: 'middle'
            // fontSize: '22px',
            // lineHeight: '30px'
          }
        ]
      },
      headerStyles: function () {
        return {
          backgroundColor: 'black',
          top: '0',
          textAlign: 'center',
          width: '100%',
          height: '30px'
        }
      }
    },
    data: function () {
		  return {
        refreshing: false,
        arrowFlag: 0
      }
    },
    mounted: function () {
    },
    methods: {
      onScroll: function (e, data) {

      },
      onTouchStart: function (e, data) {

      },
      onTouchMove: function (e, data) {
        console.log(11111)
        if (data.scrollTop > 0) {
          if ((data.scrollTop + data.clientHeight >= data.scrollHeight) && data.diffY < 0) {
            e.preventDefault()
          }
          return
        }
        if (data.diffY > 0) {
          e.preventDefault()
          if (this.$parent && this.$parent.setTop) {
            let top = Math.pow(data.diffY, 0.8) + (data.refreshing ? 30 : 0)
            this.$parent.setTop(top)
            this.arrowFlag = top >= 30 ? 1 : 2
          }
        }
      },
      onTouchEnd: function (e, data) {
        let self = this
        if (this.$parent && this.$parent.setTop && this.$parent.setRefreshing && this.$parent.setDuring) {
          if (data.top > 0 && !data.refreshing) {
            this.$parent.setDuring(this.during)
            setTimeout(function () {
              self.$parent.setDuring(0)
            },this.during)
            if (data.top > 30) {
              this.$parent.setTop(30)
              this.refreshing = true
              this.$parent.setRefreshing(true)
              this.$emit('on-refresh', this.endRefresh)
              // setTimeout(function () {
              //
              // },this.interval)
            } else {
              this.$parent.setTop(0)
            }
          } else if (data.top > 30 && data.refreshing) {
            this.$parent.setDuring(this.during)
            this.$parent.setTop(30)
            setTimeout(function () {
              self.$parent.setDuring(0)
            },this.during)
          }
        }
      },
      onTouchCancel: function (e, data) {
      },
      endRefresh: function () {
        if (!this.$parent.touching) {
          this.$parent.setDuring(this.during)
          let self = this
          setTimeout(function () {
            self.$parent.setDuring(0)
          },self.during)
        }
        this.$parent.setTop(0)
        this.refreshing = false
        this.$parent.setRefreshing(false)
      }
    }
	}
</script>

<style scoped>

</style>

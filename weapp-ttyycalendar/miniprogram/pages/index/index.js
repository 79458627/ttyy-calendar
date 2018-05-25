var plugin = requirePlugin("myPlugin")
Page({
  data: {
    isShow: false,
    dateStr: ''
  },
  onLoad: function() {
    plugin.getData()
  },
  _yybindchange: function (e) {
    console.log(e)
    this.setData({
      dateStr: e.detail.date
    })
  },
  cellClick: function () {
    var isShow = true
    this.setData({
      isShow: isShow
    })
  }
})
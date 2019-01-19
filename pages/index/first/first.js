Page({
  data: {
    mode: 'hello cat',
    text: '开开心心过大年',
    text_bootom:'点我看看吓死你',
    src: '../../../resources/cat.jpg'
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../me/me'
    })
  },
  imageError: function (e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  }
})
Page({
  data: {
    mode: 'me',
    text: 'its me!',
    src: '../../../resources/me.jpg'
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: 'me/me'
    })
  },
  imageError: function (e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  }
})
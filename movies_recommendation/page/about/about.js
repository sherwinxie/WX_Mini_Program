// page/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:"https://sherwinxie.xyz",
  },

  /*
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  about_web_click:function(event){
    // wx.navigateTo({
    //   url: '/page/webview/webview',
    // })
    
    var that=this
    wx.showModal({
      title: 'www.sherwinxie.xyz',
      content: '是否复制网址到剪贴板?',
      success: function (res) {
        if (res.confirm) {
          wx.setClipboardData({
            data: that.data.url,
            success() {
              that.setData({
                url: 'url'
              })
              wx.showToast({
                title: 'Copy success',
                icon: 'success',
                duration: 2000
              })
              // console.log('success')
            }
          })
          wx.getClipboardData({
            success(res) {
              console.log(res.data)
            }
          })
          
          // console.log('用户点击确定')
        } else if (res.cancel) {
          // console.log('用户点击取消')
        }
      }
    })
  },

  about_phonecall_click:function(e){
    wx.makePhoneCall({
      phoneNumber: '119' 
    })
  },
  about_scan_click: function (e) {
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
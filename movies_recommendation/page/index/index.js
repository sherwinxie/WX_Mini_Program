// page/index/index.js
Page({
  onPullDownRefresh: function () {
    // wx.startPullDownRefresh();
    
    wx.stopPullDownRefresh;
    
  },
  /**
   * 页面的初始数据
   */
  data: {
    movieList: [{
      movieName: "黑客帝国",
      movieImg: "/page/images/hack_emp.jpg",
      movieEvaluate: "关于代码的故事。",
      recommend: true,
      id: 1292063,
    },{
      
      movieName:"肖申克的救赎",
      movieImg:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg",
      movieEvaluate:"希望的故事。",
      recommend:true,
      id: 1292052,
    }, {
        movieName: "悲惨世界",
        movieImg: "https://img3.doubanio.com/view/photo/raw/public/p1806096471.jpg",
        movieEvaluate: "美好的歌剧",
        recommend: true,
        id: 1295644,
    }, {
      movieName: "阿甘正传",
      movieImg: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p510876377.jpg",
      movieEvaluate: "关于无常的故事。",
      recommend: true,
      id: 1292720,
      }, ],
      // current:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this.data.movieList.length)
    this.setData({
      currentIndex: 0
    })
    
  },

  f0:function(e){
    this.setData({
      currentIndex: 0
    })
  },

  // f1:function(e){
  //   // console.log(e.currentTarget)
  //   var mid = e.currentTarget.dataset.movieId
  //   wx.navigateTo({
  //     url: '/page/detail/detail?mid=' + mid,
  //   })
  // },

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
      return{
        title: "Sherwin's Zone "
      }
  }
})
const db = wx.cloud.database({})

Page({

  /**
   * 页面的初始数据
   */
  data: {
    mailarr:["买场","慈善场","购物车"],
    mai1res:[]
  },

  /**
   * 生命周期函数--监听页面1加载
   */
  onLoad: function (options) {
    db.collection("mai1-data").get().then(res => {
      console.log(res.data)
      this.setData({
        mai1res: res.data
      })
    })
  },


  // serach(){
  //   db.collection("swiper").where({
  //     spm: "晨曦"
  //   }).get()
  //     .then(res=> {
  //   console.log(res)
  //     })
  // }


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
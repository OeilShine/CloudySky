// pages/shoye/shoye.js
const db = wx.cloud.database({})

Page({

 
  /**
   * 页面的初始数据
   */
  data: {
  result: {},
    arr:["精","品","大","促"]
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection("shoye-swiper").get().then(res => {
      console.log(res.data)

      this.setData({
        result: res.data
      })
    })
   /* 
    //2.2获取集合的引用
    db.collection("cs").get().then(res=>{
    
        console.log("查询成功",res)
        console.log(res.data)
      })

    // 请求轮播图数据 getData() {
    db.collection("swiper").get().then(res=> {
      console.log(res)
      console.log(res.data)
      console.log(res.data.id)
    })
var _this=this;
const db = wx.cloud.database({
  env:'环境ID'
})
db.collection('cs').get({
  success:res=>{
    console.log(res.data)
    this.setData({
      ne:res.data
    })
  }
})
 */


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
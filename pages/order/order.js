// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    merchantLogo:'../../images/logo.png',
    merchantTitle:"大排面",
    goodsList:[
      {
        goodsIcon: '../../images/logo.png',
        goodsTitle:'名称',
        goodsWeekNum:20,
        goodsPrice:15,
        num:1
      },
      {
        goodsIcon: '../../images/logo.png',
        goodsTitle: '名称1',
        goodsWeekNum: 30,
        goodsPrice: 11,
        num: 1
      }
    ]
  },
  addnum: function () {
    var num = Number(this.data.num);
    num++;
    this.setData({
      num: num
    })
  },
  reduce: function () {
    var num = Number(this.data.num);
    num--;
    if (num < 1) {
      return;
    }
    this.setData({
      num: num
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
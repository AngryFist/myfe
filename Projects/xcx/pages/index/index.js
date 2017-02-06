var CONFIG = require('../../utils/config.js');
//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    list : {},
    config :　CONFIG
  },
  //事件处理函数
  toaddress: function() {
    wx.navigateTo({
      url: '../address/address'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    loadList(that)
  },
  
})

function loadList(obj){
  wx.request({
    url : 'http://192.168.7.172/dj_fe/Projects/xcx/json/list.json',
    success : function(res){
      console.log(res.data);
      obj.setData({
        list : res.data
      })
    }
  })
}


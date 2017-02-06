Page({
  data: {
    text : '位置'
  },
  onLoad: function () {
    var that = this;
    getPostion(that);
  },
  
})

function getPostion(obj){
  wx.getLocation({
    type: 'wgs84',
    success: function(res) {
        console.log(res)
        obj.setData({
            latitude : res.latitude,
            longitude : res.longitude
        })
    }
})
}
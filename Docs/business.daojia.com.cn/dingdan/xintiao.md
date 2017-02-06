# 心跳
  * 模块 orderHeart
    * 心跳采用传统的信息交互方式，每60秒发起一次ajax请求
    * cookie相关字段
      * new_order_count  新单数
      * out_meal_count   待出餐
      * cancel_count     取消单
   
  * 相关模块
    * common/order/playSound 语音播报
      * 语音播报依赖于jPlayer框架
      * 采用队列播报的方式，先播新单，再播改单，最后取消单
    * orderHand/hnotice
      * 关键代码：通过cookie中创建一个noticesCookie，记录单一订单的改单和取消单的语音播报次数（大于50次后不再播报）


  * 最新改动：心跳中改单和取消单不是增量的，只要大于0，即进行语音提示，不再需要在cookie中记录相关信息
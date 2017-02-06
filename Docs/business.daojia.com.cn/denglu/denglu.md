# 登录和权限

  * cookie中登录相关字段 （前缀：dj\_bussness\_）
    1. access_token
    2. login_user
    3. role_name
    4. merchant_name (仅商户)

###权限
  * 获取权限的模块 getPurview
  * 如果获取到用户有订单处理权限，则开始发起订单心跳
    * 心跳模块 orderHeart


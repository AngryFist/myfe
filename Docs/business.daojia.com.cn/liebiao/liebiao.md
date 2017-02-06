# 列表
1. 字段说明

  * customID      列表ID
  * url           接口地址
  * disPage       是否禁止分页
  * leading       列表中显示的字段（id和dataAttr为保留值，绑定在tr上）
  * operate       操作按钮
  * noDataTip     无数据时显示的文本

          var myTableData = {
            customID : 'duizhangList',
            url : jsonApi.checkList,
            //disPage : true,  //是否禁止分页
            leading : {
                id : 'id',
                bill_time : '账单日期',
                restaurant_name : '餐厅名称',
                total_price : '合计餐费',
                discount_price : '折后价格',
                adjust_price : '调整款',
                take_price : '取餐价格',
                settlement_time : '结算日期',
                state : '状态'
            },
            operate : [
                {
                    name : 'checkingBtn',
                    title : '对账'
                }
            ],
            noDataTip : '没有对账数据'
         }
      
2. 依赖模块（必须）
    * common/tableList/data
    * common/ajax/a
3. 相关模块（非必须）
    * ./detail     详情
    * common/date  格式化时间戳
4. 初始化方法

   dataLoad.Init(customClass, myTableData, queryOptions, callBackFn, callBackArg)
   
   参数说明
     * customClass 列表容器className
     * myTableData 
     * queryOptions 筛选条件Object
     * callBackFn 回调函数（列表生成后执行的初始化方法或事件函数）
     * callBackArg  回调函数参数
    
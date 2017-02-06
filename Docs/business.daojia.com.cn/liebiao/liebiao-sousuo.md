# 列表搜索栏

1. 字段说明
  * customClass 搜索html容器className
  * inputs      搜索条件Object
    * type        字段类型，默认为text 目前仅支持test和select
    * title       字段标题
    * selectOption  select options集合
  * buttons       按钮集合


        var myData = {
              customClass : '',
              inputs : {
                city_id : {
                      type  :  'select',
                      title :  '城市',
                      selectOption : [
                          // {
                          //     optionID : 0,
                          //     title : '全部'
                          // }
                      ]
                  },
                  area_id : {
                      type  :  'select',
                      title :  '区域',
                      selectOption : [
                          // {
                          //     optionID : 0,
                          //     title : '全部'
                          // }
                      ]
                  },
                  restaurant_name : {
                      title :  '餐厅名称'
                  },
                  date_type : {
                      type  :  'select',
                      title :  '查询日期',
                      selectOption : [
                          {
                              optionID : 1,
                              title : '结算日期'
                          },
                          {
                              optionID : 2,
                              title : '账单日期'
                          },
                      ]
                  },
              },
              buttons : {
                  searchButton : {
                      title : '查询',
                      customClass : 'queryButton'
                  }
              }
          }
          
2. 依赖模块（必须）
    * common/searchBar/a
    * common/searchBar/go
3. 相关模块（非必须）
    * common/datePicker   日历控件（依赖于jQueryUI）
4. 初始化方法

   searchBar.Init(myData);
   
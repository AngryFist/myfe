# 表单
1. 字段说明
    * inputs      表单字段Object
    * type        字段类型，默认为text 支持text、select、hidden
    * title       字段标题
    * selectOption  select options集合
    * 字段验证
      * necessary  是否必须（是否允许为空）
      * regular   正则表达式验证
      * maxLength 最大长度
      * minLength 最小长度
      * repeat 重复输入一致性验证
      * exist 检测字段是否已存在（服务器端唯一性验证）
        * id 
        * url 验证接口
  * buttons       按钮集合
 
            var formItems = {
                formID : 'yinhangForm',
                url : '',
                inputs : {
                    merchant_id : {
                        type : 'hidden',
                        _value : merchant_id
                    }
                    bank_card_alias : {
                        type  :  'text',
                        title :  '银行账户别名*',
                        //验证信息
                        necessary : true,
                        tip : '银行账户别名仅支持汉字大小写字母及数字,不可超过30个字符',
                        regular : /^[\u4E00-\u9FA50-9a-zA-Z]{1,30}$/,
                        exist : {
                            id : 'bank_account_id',
                            url : jsonApi.checkBankAliasExist
                        }
                    },
                    bank_card_number : {
                        type  :  'text',
                        title :  '银行账号*',
                        //验证信息
                        necessary : true,
                        maxLength : 19,
                        regular : /^(\d)*$/,
                        tip : '银行账号格式不正确，请检查后重试',
                        exist : {
                            id : 'bank_account_id',
                            url : jsonApi.checkBankNumberExist
                        }
                    },
                    re_bank_card_number : {
                        type  :  'text',
                        title :  '重复银行账号*',
                        //验证信息
                        repeat : 'bank_card_number',
                        regular : /^(\d)*$/,
                        tip : '两次输入的银行账号不一致，请重新填写'
                    },
                },
                buttons : {
                    editSubmit : {
                        title : '新增账户'
                    },
                    backHistory : {
                        title : '返回',
                        customClass : 'cancelBtn'
                    }
                }
            }
            
2. 依赖模块（必须）
    * common/form/a
    * common/valid/f
3. 相关模块（非必须）
    * ./editIschange
4. 初始化方法
    * 初始化表单  formA.Init(myFormID, formItems);
    * 开启字段验证 valid.Init(myFormID, formItems, submitFn);  
      * 默认的验证方式为失去焦点时验证和提交时验证
      * 字段说明
        * submitFn 验证通过后的回调函数
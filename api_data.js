define({ "api": [
  {
    "type": "post",
    "url": "http://www.baidu.com",
    "title": "2.2.5集装箱动态查询接口",
    "name": "_________",
    "group": "GroupName1",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "json_parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>唯一标识</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cntNo",
            "description": "<p>箱号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "beginDate",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>结束时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例：",
          "content": "{\n  \"json_parameters\": {\n      \"beginDate\": \"\",\n      \"cntNo\": \"\",\n      \"endTime\": \"\",\n      \"uuid\": \"7e2a7789ac914df891fbd69a41fde989\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "returnMsg",
            "description": "<p>返回码的描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "returnCode",
            "description": "<p>返回码，具体参见附录二</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "returnData",
            "description": "<p>返回查询的信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "cntStatusInfo",
            "description": "<p>第二级，订单头信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "depotCode",
            "description": "<p>码头代码(仓码标识)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "containerNo",
            "description": "<p>集装箱号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "containerType",
            "description": "<p>箱型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adminDesc",
            "description": "<p>当前控箱公司</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "linerDesc",
            "description": "<p>箱属公司</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dateWork",
            "description": "<p>作业时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "typeWorkCode",
            "description": "<p>作业环节代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "typeWorkName",
            "description": "<p>作业环节名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deliberyType",
            "description": "<p>作业项目</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "containerState",
            "description": "<p>重/吉</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sealNo",
            "description": "<p>封条号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sourceOrderNo",
            "description": "<p>所属作业单号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ownerShort",
            "description": "<p>作业记录的控箱公司</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "agentConsigneeDesc",
            "description": "<p>作业单委托单位</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cargoConsigneeDesc",
            "description": "<p>作业单货主名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shippingOrderNo",
            "description": "<p>S/O</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "containerTaskNo",
            "description": "<p>当前作业单号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "containerWorkNo",
            "description": "<p>作业记录主键</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "import",
            "description": "<p>进/出口</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tradeType",
            "description": "<p>内贸/进出口</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meansTransport",
            "description": "<p>第三级，载具信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attribute01",
            "description": "<p>属性01</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attribute02",
            "description": "<p>属性02</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attribute03",
            "description": "<p>属性03</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attribute04",
            "description": "<p>属性04</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "billNoList",
            "description": "<p>第三级，历史提运单集合</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "billNo",
            "description": "<p>大船提单号(S/O)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回示例：",
          "content": " HTTP/1.1 200 OK\n{\n    \"returnCode\": \"\",\n    \"returnData\": {\n        \"cntStatusInfo\": {\n            \"adminDesc\": \"广运船务有限公司\",\n             \"agentConsigneeDesc\": \"广运船务有限公司\",\n            \"billNoList\": [\n                \"18JJI04198\"\n            ],\n            \"containerNo\": \"EITU1847729\",\n            \"containerRefNo\": \"EITU184772920181013\",\n            \"containerState\": \"重\",\n            \"containerTaskNo\": \"I20181013004\",\n            \"containerType\": \"40HQ\",\n            \"containerWorkNo\": \"I20181013004*366135081\",\n            \"dateWork\": \"2018-10-15 08:21:36\",\n            \"deliveryType\": \"入堆场\",\n            \"depotCode\": \"FSCM\",\n            \"importExport\": \"I\",\n            \"linerDesc\": \"EMC(长荣）\",\n            \"meansTransport\": {\n                \"_class\": \"com.sinotrans.gd.message.entity.MeansTransport\",\n                \"attribute01\": \"511201810120\",\n                \"attribute02\": \"BAO FENG 222\",\n                \"attribute03\": \"7209550055\",\n                \"description\": \"宝丰222\"\n            },\n            \"ownerShort\": \"广运船务有限公司\",\n            \"sealNo\": \"M/EMCQDH2397/CA\",\n            \"sourceOrderNo\": \"I20181013004\",\n            \"tradeType\": \"进出口\",\n            \"typeWorkCode\": \"DIS\",\n            \"typeWorkName\": \"卸船\"\n        }\n    },\n    \"returnMsg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "F:/visualdoc/src/2.2datasearch/2.2.5_damic_search.js",
    "groupTitle": "2.2数据查询服务"
  },
  {
    "type": "post",
    "url": "http://www.baidu.com",
    "title": "2.2.3运单轨迹跟踪查询接口",
    "name": "__________",
    "group": "GroupName1",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "json_parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>唯一标识</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "queryData",
            "description": "<p>第二级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderNo",
            "description": "<p>运单号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例：",
          "content": "{\n  \"json_parameters\": {\n      \"queryData\": {\n          \"orderNo\": \"so111111\"\n      },\n      \"uuid\": \"7e2a7789ac914df891fbd69a41fde989\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>返回代码，成功-1；失败-0</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息，成功-success；失败-failure</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>第二级，轨迹集合</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "device_code",
            "description": "<p>设备号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "direction",
            "description": "<p>方向</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "electricity",
            "description": "<p>电量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loc_time",
            "description": "<p>轨迹发生时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vessel",
            "description": "<p>船名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "speed",
            "description": "<p>速度</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回示例：",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 1,\n    \"data\": [\n        {\n            \"create_time\": \"2018-10-18 00:18:17\",\n            \"device_code\": \"413467350\",\n            \"direction\": 0.0,\n            \"lat\": \"22.80845200\",\n            \"lng\": \"113.00133000\",\n            \"loc_time\": \"2018-10-18 00:18:17\",\n            \"speed\": 0.00,\n            \"vessel\": \"TAI YANG HUA\"\n        },\n        {\n            \"create_time\": \"2018-10-18 03:18:17\",\n            \"device_code\": \"413467350\",\n             \"direction\": 0.0,\n            \"lat\": \"22.80839200\",\n            \"lng\": \"113.00126300\",\n            \"loc_time\": \"2018-10-18 03:18:17\",\n            \"speed\": 0.00,\n            \"vessel\": \"TAI YANG HUA\"\n        }\n    ],\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "F:/visualdoc/src/2.2datasearch/2.2.3_polyline_track.js",
    "groupTitle": "2.2数据查询服务"
  },
  {
    "type": "post",
    "url": "http://www.baidu.com",
    "title": "2.2.4电子围栏状态反馈接口",
    "name": "__________",
    "group": "GroupName1",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "json_parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>唯一标识</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "queryData",
            "description": "<p>第二级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderNo",
            "description": "<p>运单号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例：",
          "content": "{\n  \"json_parameters\": {\n      \"queryData\": {\n          \"orderNo\": \"so111111\"\n      },\n      \"uuid\": \"7e2a7789ac914df891fbd69a41fde989\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "returnMsg",
            "description": "<p>返回码的描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "returnCode",
            "description": "<p>返回码，具体参见附录二</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "returnData",
            "description": "<p>返回查询的信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>状态信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderNo",
            "description": "<p>系统订单号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "billNo",
            "description": "<p>系统运单号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deviceCode",
            "description": "<p>车船名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statusCode",
            "description": "<p>状态代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statusName",
            "description": "<p>状态名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statusTime",
            "description": "<p>状态发生时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statusDesc",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fenceCode",
            "description": "<p>围栏代码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回示例：",
          "content": "HTTP/1.1 200 OK\n{\n \t\"returnMsg\":\"\",\n \t\"returnCode\":\"\",\n \t\"returnData\":{\n \t\t\"status\":{\n             \"orderNo\":\"NM18052300042\",\n \t\t\t\"billNo\":\"X05231651\",\n \t\t\t\"deviceCode\":\"新成功22\",\n \t\t\t\"statusCode\":\"OCARI\",\n \t\t\t\"statusName\":\"到港\",\n \t\t\t\"statusTime\":\"20180530074148\",\n \t\t\t\"statusDesc\":\"提/运单号：X05231651已到港，运输工具：新成功22 /，地点：虎门\",\n \t\t\t\"fenceCode\":\"36003_CNHMN\",\n \t\t\t\"fenceName\":\"虎门\"\n \t\t}\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "F:/visualdoc/src/2.2datasearch/2.2.4_ele_retalk.js",
    "groupTitle": "2.2数据查询服务"
  },
  {
    "type": "post",
    "url": "http://www.baidu.com",
    "title": "2.2.1订单状态节点跟踪查询接口",
    "name": "____________",
    "group": "GroupName1",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "json_parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>唯一标识</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "orderInfo",
            "description": "<p>第二级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sourceOrderNo",
            "description": "<p>来源系统订单号</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "jobOrderList",
            "description": "<p>第三级(选填)如果任务单为空，则查询订单下所有(包括任务单和箱)状态集合返回；如果任务单不为空，则查询订单状态集合和任务单状态集合返回</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "jobOrderNo",
            "description": "<p>任务单号</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "cntList",
            "description": "<p>第三级(选填)如果箱为空，则查询订单下所有(包括任务单和箱)状态集合返回；如果箱不为空，则查询订单状态集合和箱动态集合返回</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cntNo",
            "description": "<p>箱号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例：",
          "content": "{\n  \"json_parameters\": {\n  \t   \"uuid\": \"7e2a7789ac914df891fbd69a41fde989\",\n      \"orderInfo\": {\n          \"sourceOrderNo\": \"NM18110300014\",\n          \"jobOrderList\" : [\n          {\n\t            \t\"jobOrderNo\" : \"HYD11031341\"\n\t            },\n\t            {\n\t            \t\"jobOrderNo\" : \"10011926\"\n\t            }\n          ],\n           \"cntList\": [\n\t            {\n\t                \"cntNo\": \"HYT98008\"\n\t            },\n\t            {\n\t                \"cntNo\": \"HYT98004\"\n\t            }\n      \t\t]\n      }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "returnMsg",
            "description": "<p>返回码的描述，成功/失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "returnCode",
            "description": "<p>返回码，1—成功/0—失败</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "returnData",
            "description": "<p>返回的查询信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "orderInfo",
            "description": "<p>第二级订单头信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sourceOrderNo",
            "description": "<p>来源系统订单号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tplCode",
            "description": "<p>业务所属模板号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "origName",
            "description": "<p>起运地名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "origCode",
            "description": "<p>起运地代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "origAddr",
            "description": "<p>起运地地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "origLocation",
            "description": "<p>起运地坐标（经纬度）,格式lat_lng:23.098257,113.453185</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "destName",
            "description": "<p>目的地名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "destCode",
            "description": "<p>目的地代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "destAddr",
            "description": "<p>目的地地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "destLocation",
            "description": "<p>目的地坐标（经纬度）,格式lat_lng:23.098257,113.453185</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bkTime",
            "description": "<p>下单时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trackNo",
            "description": "<p>物流跟踪关键号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trackType",
            "description": "<p>跟踪号类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ept",
            "description": "<p>计划开始时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "eft",
            "description": "<p>计划完成时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cargo",
            "description": "<p>货物名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "isDel",
            "description": "<p>删除标识</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "orderStatusInfoList",
            "description": "<p>第三级订单状态信息集合</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sourceCode",
            "description": "<p>数据源代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statusCode",
            "description": "<p>状态节点标准代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statusDesc",
            "description": "<p>状态节点描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workLocName",
            "description": "<p>作业地点名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workLocCode",
            "description": "<p>作业地点代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workTime",
            "description": "<p>作业时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "orderTransportInfo",
            "description": "<p>第三级订单载具信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderTransportName",
            "description": "<p>载具名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderTransportCode",
            "description": "<p>载具代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "jobOrderList",
            "description": "<p>第三级任务单头信息集合</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "jobOrderStatusInfoList",
            "description": "<p>第四级任务单状态信息集合</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "jobOrderTransportInfo",
            "description": "<p>第四级任务单载具信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jobOrderTransportName",
            "description": "<p>载具名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jobOrderTransportCode",
            "description": "<p>载具代码</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "cntList",
            "description": "<p>第四级集装箱头信息集合</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cntType",
            "description": "<p>箱型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cntNo",
            "description": "<p>箱号</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "cntStatusViews",
            "description": "<p>第五级集装箱进度条集合</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customStatusName",
            "description": "<p>状态节点业务名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "squ",
            "description": "<p>排序号</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "cntStatusInfoList",
            "description": "<p>第五级集装箱状态信息集合</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sealNo",
            "description": "<p>封条号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cntStatus",
            "description": "<p>空/重</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "cntTransportInfo",
            "description": "<p>第五级集装箱载具信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回示例：",
          "content": " HTTP/1.1 200 OK\n {\n \t\"returnCode\" : \"\",\n \t\"returnMsg\" : \"\",\n \t\"returnData\" : {\n \t\t\"orderInfo\" : {\n \t\t\t \"sourceOrderNo\": \"NM18110300014\",\n\t            \"tplCode\": \"1111\",\n\t            \"origName\": \"\",\n\t            \"origCode\": \"\",\n\t            \"origAddr\": \"\",\n\t            \"origLocation\": \"\",\n\t            \"destName\": \"\",\n\t            \"destCode\": \"\",\n\t            \"destAddr\": \"\",\n\t            \"destLocation\": \"\",\n\t            \"bkTime\": \"\",\n\t            \"trackNo\": \"\",\n\t            \"trackType\": \"\",\n\t            \"ept\": \"\",\n\t            \"eft\": \"\",\n\t            \"cargo\": \"\",\n\t            \"remark\": \"\",\n\t            \"isDel\": \"\",\n\t\t\t\"orderStatusInfoList\" :[\n\t\t\t\t{\n\t\t\t\t\t\"sourceCode\" : \"\",\n\t\t    \t\t\t\"trackNo\" : \"\",\n\t\t    \t\t\t\"statusCode\" : \"\",\n\t\t    \t\t\t\"statusDesc\" : \"\",\n\t\t    \t\t\t\"workLocName\" : \"\",\n\t\t    \t\t\t\"workLocCode\" : \"\",\n\t\t    \t\t\t\"workTime\" : \"\",\n\t\t    \t\t\t\"remark\" : \"\",\n\t\t    \t\t\t\"isDel\" : \"\"\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"orderTransportInfo\" : {\n\t\t\t\t\"orderTransportName\" : \"\",\n\t\t    \t\t\"orderTransportCode\" : \"\",\n\t\t    \t\t\t\"startTime\" : \"2018-11-06 00：00:00\",\n\t\t    \t\t\"endTime\" : \"2018-11-06 00：00:00\"\n\t\t\t},\n\t\t\t\"jobOrderList\" : [\n\t\t\t\t{\n\t\t\t\t\t  \"tplCode\": \"\",\n\t            \t\t  \"origName\": \"\",\n\t\t\t            \"origCode\": \"\",\n\t\t\t            \"origAddr\": \"\",\n\t\t\t            \"origLocation\": \"\",\n\t\t\t            \"destName\": \"\",\n\t\t\t            \"destCode\": \"\",\n\t\t\t            \"destAddr\": \"\",\n\t\t\t            \"destLocation\": \"\",\n\t\t\t            \"bkTime\": \"\",\n\t\t\t            \"trackNo\": \"\",\n\t\t\t            \"trackType\": \"\",\n\t\t\t            \"ept\": \"\",\n\t\t\t            \"eft\": \"\",\n\t\t\t            \"cargo\": \"\",\n\t\t\t            \"remark\": \"\",\n\t\t\t            \"isDel\": \"\",\n\t\t\t            \"jobOrderStatusInfoList\" : [\n\t\t\t            \t     {\n\t\t\t\t\t\t\t\t\"sourceCode\" : \"\",\n\t\t\t\t\t    \t\t\t\"trackNo\" : \"\",\n\t\t\t\t\t    \t\t\t\"statusCode\" : \"\",\n\t\t\t\t\t    \t\t\t\"statusDesc\" : \"\",\n\t\t\t\t\t    \t\t\t\"workLocName\" : \"\",\n\t\t\t\t\t    \t\t\t\"workLocCode\" : \"\",\n\t\t\t\t\t    \t\t\t\"workTime\" : \"2018-11-06 00：00:00\",\n\t\t\t\t\t    \t\t\t\"remark\" : \"\",\n\t\t\t\t\t    \t\t\t\"isDel\" : \"\"\n\t\t\t\t\t\t\t}\n\t\t\t            ],\n\t\t\t            \"jobOrderTransportInfo\" : {\n\t\t\t            \t\t\"jobOrderTransportName\" : \"\",\n\t\t\t\t\t    \t\t\"jobOrderTransportCode\" : \"\",\n\t\t\t\t\t    \t\t\"startTime\" : \"2018-11-06 00：00:00\",\n\t\t\t\t\t    \t\t\"endTime\" : \"2018-11-06 00：00:00\"\n\t\t\t\t\t    \t\t },\n\t\t\t            \"cntList\" : [\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\"cntType\" : \"40GP\",\n\t\t\t\t\t\t\t\t\"cntNo\" : \"HYT98008\",\n\t\t\t\t\t\t\t\t\"remark\" : \"\",\n\t\t\t\t\t\t\t\t\"isDel\" : \"\",\n\t\t\t\t\t\t\t\t\"cntStatusInfoList\" : [\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\"sourceCode\" : \"\",\n\t\t\t\t\t\t\t    \t\t\t\"statusCode\" : \"\",\n\t\t\t\t\t\t\t    \t\t\t\"statusDesc\" : \"订舱完成\",\n\t\t\t\t\t\t\t    \t\t\t\"workLocName\" : \"\",\n\t\t\t\t\t\t\t    \t\t\t\"workLocCode\" : \"\",\n\t\t\t\t\t\t\t    \t\t\t\"workTime\" : \"\",\n\t\t\t\t\t\t\t    \t\t\t\"sealNo\" : \"11111\",\n\t\t\t\t\t\t\t    \t\t\t\"cntStatus\" : \"重\"\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\t\t\"cntTransportInfo\" : {\n\t\t\t\t\t\t\t\t\t\t\"cntTransportName\" : \"\",\n\t\t\t\t\t\t\t    \t\t\t\"cntTransportCode\" : \"\",\n\t\t\t\t\t\t\t    \t\t\t\"startTime\" : \"\",\n\t\t\t\t\t\t\t    \t\t\t\"endTime\" : \"\"\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t   ]\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "F:/visualdoc/src/2.2datasearch/2.2.1_status_track.js",
    "groupTitle": "2.2数据查询服务"
  },
  {
    "type": "post",
    "url": "http://www.baidu.com",
    "title": "2.2.2车船运行轨迹跟踪查询接口",
    "name": "____________",
    "group": "GroupName1",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "json_parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>唯一标识</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "queryData",
            "description": "<p>第二级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "queryType",
            "description": "<p>查询类型，查询类型（1-车牌号/船舶号，2-设备号）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>车牌号/船舶号或设备号，（只查当前位置支持多个）格式：设备号1|设备号2……（以“|”分隔），查询设备量上限50个</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "beginTime",
            "description": "<p>开始时间, 格式“yyyy-MM-dd HH:mm:ss”，当不传beginTime、endTime时表示只查当前位置</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>结束时间, 格式“yyyy-MM-dd HH:mm:ss”，当不传beginTime、endTime时表示只查当前位置</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter",
            "description": "<p>经纬度是否过滤（0-未过滤，1-过滤）,查历史轨迹时支持过滤漂移点，默认过滤</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例：",
          "content": "{\n  \"json_parameters\": {\n      \"uuid\": \"7e2a7789ac914df891fbd69a41fde989\",\n      \"queryData\" :{\n      \t\"queryType\": \"1\",\n\t        \"vaule\": \"华东801\",\n\t        \"beginTime\" : \"2018-11-05 00：00:00\",\n\t        \"endTime\" : \"2018-11-06 00：00:00\",\n\t        \"filter\" : \"1\"\n      }\n   }\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>返回代码，成功-1，失败-0</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息，成功-success，失败-failure</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>第二级，轨迹集合，若查询当前位置则返回一个点</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "device_code",
            "description": "<p>设备号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "direction",
            "description": "<p>方向</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "electricity",
            "description": "<p>电量</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "extra_data",
            "description": "<p>额外信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "place",
            "description": "<p>地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plateNo",
            "description": "<p>载具名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "speed",
            "description": "<p>速度</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回示例：",
          "content": " HTTP/1.1 200 OK\n {\n    \"code\": 1,\n    \"data\": [\n        {\n            \"create_time\": \"2018-11-07 13:44:28\",\n            \"device_code\": \"413700570\",\n            \"direction\": 215.0,\n            \"electricity\": -1,\n            \"extra_data\": {\n                \"elockStatus\": \"0\"\n            },\n            \"gpsStatus\": \"00000000000000000000000000000010\",\n            \"gps_alarm\": \"00000000000000000000000000000000\",\n            \"lat\": 22.0529,\n            \"lng\": 113.83365,\n            \"online\": 1,\n            \"place\": \"广东省珠海市香洲区\",\n            \"plateNo\": \"江信9\",\n            \"speed\": 6.07\n        }\n    ],\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "F:/visualdoc/src/2.2datasearch/2.2.2_carboat_track.js",
    "groupTitle": "2.2数据查询服务"
  },
  {
    "type": "post",
    "url": "http://www.baidu.com",
    "title": "2.1.2电子围栏创建接口",
    "name": "________",
    "group": "GroupName",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "json_parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>唯一标识</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "electricFenceData",
            "description": "<p>第二级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shape",
            "description": "<p>围栏形状（1-圆形，2-多边形）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "portIdOrAddress",
            "description": "<p>港口ID或工厂地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "radius",
            "description": "<p>半径</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例：",
          "content": "{\n \"json_parameters\": {\n      \"electricFenceData\": {\n          \"portIdOrAddress\": \"111\",\n          \"radius\": \"1000\",\n          \"shape\": \"1\"\n      },\n      \"uuid\": \"7e2a7789ac914df891fbd69a41fde989\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "returnMsg",
            "description": "<p>返回码的描述，成功/失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "returnCode",
            "description": "<p>返回码，1—成功/0—失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "returnData",
            "description": "<p>返回的查询信息，空</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回示例：",
          "content": "HTTP/1.1 200 OK\n{\n  \"returnMsg\" : \"成功\",\n  \"returnCode\" : \"1\",\n  \"returnData\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "F:/visualdoc/src/2.1subscirbe/2.1.2_ele_create.js",
    "groupTitle": "2.1数据订阅服务"
  },
  {
    "type": "post",
    "url": "http://www.baidu.com",
    "title": "2.1.1委托单状态传送接口",
    "name": "_________",
    "group": "GroupName",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "json_parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>唯一标识</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "orderInfo",
            "description": "<p>第二级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sourceOrderNo",
            "description": "<p>来源系统订单号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerBKNo",
            "description": "<p>客户订单编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tplCode",
            "description": "<p>业务所属模板号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerName",
            "description": "<p>委托人名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerCode",
            "description": "<p>委托人代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerEmail",
            "description": "<p>委托人邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerPhone",
            "description": "<p>委托人电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "origName",
            "description": "<p>起运地名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "origCode",
            "description": "<p>起运地代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "origAddr",
            "description": "<p>起运地地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "origLocation",
            "description": "<p>起运地坐标（经纬度）,格式lat_lng:23.098257,113.453185</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destName",
            "description": "<p>目的地名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destCode",
            "description": "<p>目的地代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destAddr",
            "description": "<p>目的地地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destLocation",
            "description": "<p>目的地坐标（经纬度）,格式lat_lng:23.098257,113.453185</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bkTime",
            "description": "<p>下单时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carrierName",
            "description": "<p>承运人名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carrierCode",
            "description": "<p>承运人代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carrierEmail",
            "description": "<p>承运人邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carrierPhone",
            "description": "<p>承运人电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agentName",
            "description": "<p>服务商名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agentCode",
            "description": "<p>服务商代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agentEmail",
            "description": "<p>服务商邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agentPhone",
            "description": "<p>服务商电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiverName",
            "description": "<p>收货人名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiverCode",
            "description": "<p>收货人代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiverEmail",
            "description": "<p>收货人邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiverPhone",
            "description": "<p>收货人电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transportName",
            "description": "<p>载具名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transportCode",
            "description": "<p>载具代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "voyage",
            "description": "<p>航次/班列</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trackNo",
            "description": "<p>物流跟踪关键号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trackType",
            "description": "<p>跟踪号类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ept",
            "description": "<p>计划开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eft",
            "description": "<p>计划完成时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pSourceOrderNo",
            "description": "<p>上级订单号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cargo",
            "description": "<p>货物名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sourceCode",
            "description": "<p>数据源代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isDel",
            "description": "<p>删除标识</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "orderStatusInfo",
            "description": "<p>必须有</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sourceStatusName",
            "description": "<p>源数据状态名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sourceStatusCode",
            "description": "<p>源数据状态代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workLocName",
            "description": "<p>作业地点名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workLocCode",
            "description": "<p>作业地点代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workTime",
            "description": "<p>作业时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "statusDesc",
            "description": "<p>业务描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "cntList",
            "description": "<p>箱信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cntType",
            "description": "<p>箱型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cntNo",
            "description": "<p>箱号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例：",
          "content": "{\n  \"json_parameters\": {\n      \"uuid\": \"7e2a7789ac914df891fbd69a41fde989\",\n      \"consignOrderInfo\": {\n      \t  \"sourceOrderNo\": \"NM18110300014\",\n          \"customerBKNo\": \"WL-HT-2018102500005-AYINNAC180840992C\",\n          \"tplCode\": \"1111\",\n         \"customerName\": \"黄埔分公司\",\n          \"customerCode\": \"O2ONM\",\n          \"customerEmail\": \"\",\n         \"customerPhone\": \"\",\n          \"origName\": \"上海\",\n          \"origCode\": \"SHANGHAI\",\n          \"origAddr\": \"\",\n          \"origLocation\": \"上海\",\n          \"destName\": \"黄埔\",\n          \"destCode\": \"HUANGPU\",\n          \"destAddr\": \"\",\n          \"destLocation\": \"\",\n          \"bkTime\": \"2018-11-11 23：00:00\",\n          \"carrierName\": \"速航\",\n          \"carrierCode\": \"\",\n          \"carrierEmail\": \"\",\n          \"carrierPhone\": \"\",\n          \"agentName\": \"\",\n          \"agentCode\": \"\",\n          \"agentEmail\": \"\",\n          \"agentPhone\": \"\",\n          \"receiverName\": \"\",\n          \"receiverCode\": \"\",\n          \"receiverEmail\": \"\",\n          \"receiverPhone\": \"\",\n          \"transportName\": \"华东810\",\n          \"transportCode\": \"\",\n          \"voyage\": \"\",\n          \"trackNo\": \"\",\n          \"trackType\": \"\",\n          \"ept\": \"\",\n          \"eft\": \"\",\n          \"pSourceOrderNo\": \"\",\n           \"cargo\": \"玉米\",\n            \"remark\": \"\",\n          \"sourceCode\": \"\",\n          \"isDel\": \"华东801\",\n          \"orderStatusInfo\" : {\n  \t\t\t\"sourceCode\" : \"\",\n  \t\t\t\"sourceOrderNo\" : \"NM18110300014\",\n  \t\t\t\"trackNo\" : \"\",\n  \t\t\t\"sourceStatusName\" : \"订舱完成\",\n  \t\t\t\"sourceStatusCode\" : \"NMDC_BKCFM\",\n  \t\t\t\"workLocName\" : \"\",\n  \t\t\t\"workLocCode\" : \"\",\n  \t\t\t\"workTime\" : \"2018-11-06 00：00:00\",\n  \t\t\t\"statusDesc\" : \"\",\n  \t\t\t\"transportName\" : \"华东801\",\n  \t\t\t\"transportCode\" : \"\",\n  \t\t\t\"remark\" : \"\",\n  \t\t\t\"isDel\" : \"\"\n  \t\t},\n  \t\t\"cntList\": [\n              {\n                  \"sourceOrderNo\": \"HYT98008\",\n                  \"cntType\": \"40GP\",\n                  \"cntNo\": \"HYT980080000\",\n                  \"remark\": \"\",\n                  \"isDel\": \"\"\n              },\n              {\n                  \"sourceOrderNo\": \"HYT98007\",\n                  \"cntType\": \"40GP\",\n                  \"cntNo\": \"HYT98000000\",\n                  \"remark\": \"\",\n                  \"isDel\": \"\"\n              }\n          ]\n      }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "returnMsg",
            "description": "<p>返回码的描述，成功/失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "returnCode",
            "description": "<p>返回码，1—成功/0—失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "returnData",
            "description": "<p>返回的查询信息，空</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回示例：",
          "content": "HTTP/1.1 200 OK\n{\n  \"returnMsg\" : \"成功\",\n  \"returnCode\" : \"1\",\n  \"returnData\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "F:/visualdoc/src/2.1subscirbe/2.1.1_order_status_sent.js",
    "groupTitle": "2.1数据订阅服务"
  },
  {
    "type": "post",
    "url": "http://www.baidu.com",
    "title": "2.1.4提运单轨迹订阅接口",
    "name": "_________",
    "group": "GroupName",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "json_parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>唯一标识</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sourceOrderNo",
            "description": "<p>来源系统订单号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "billNo",
            "description": "<p>系统订单号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例：",
          "content": "{\n  \"json_parameters\": {\n      \"uuid\": \"7e2a7789ac914df891fbd69a41fde989\",\n      \"sourceOrderNo\" : \"\",\n      \"billNo\" : \"\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "returnMsg",
            "description": "<p>返回码的描述，成功/失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "returnCode",
            "description": "<p>返回码，1—成功/0—失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "returnData",
            "description": "<p>返回的查询信息，空</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回示例：",
          "content": "HTTP/1.1 200 OK\n{\n  \"returnMsg\" : \"成功\",\n  \"returnCode\" : \"1\",\n  \"returnData\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "F:/visualdoc/src/2.1subscirbe/2.1.4_polyline_sub.js",
    "groupTitle": "2.1数据订阅服务"
  },
  {
    "type": "post",
    "url": "http://www.baidu.com",
    "title": "2.1.3设备围栏绑定订阅接口",
    "name": "__________",
    "group": "GroupName",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "json_parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>唯一标识</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "bindData",
            "description": "<p>第二级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderNo",
            "description": "<p>系统订单号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "billNo",
            "description": "<p>系统运单号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceCode",
            "description": "<p>设备</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>设备类型：1表示便携GPS设备；2表示车载设备，4表示车船</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "interval",
            "description": "<p>时间间隔</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fenceCodes",
            "description": "<p>围栏代码，最好围栏要前缀END_,如：36003_CNHUA，END_36003_CNTSN</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fenceStatusIn",
            "description": "<p>入围栏状态订阅</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fenceStatusOut",
            "description": "<p>出围栏状态订阅</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例：",
          "content": "{\n  \"json_parameters\": {\n      \"bindData\": {\n          \"orderNo\": \"NM18110300014\",\n          \"billNo\": \"so111111\",\n          \"deviceCode\": \"华东801\",\n          \"deviceType\": \"4\",\n          \"interval\": \"2\",\n          \"fenceCodes\": \"36003_CNHUA,END_36003_CNTSN\",\n          \"fenceStatusIn\": \"OCARI\",\n          \"fenceStatusOut\": \"OCDSP\"\n      },\n       \"uuid\": \"7e2a7789ac914df891fbd69a41fde989\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "returnMsg",
            "description": "<p>返回码的描述，成功/失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "returnCode",
            "description": "<p>返回码，1—成功/0—失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "returnData",
            "description": "<p>返回的查询信息，空</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回示例：",
          "content": "HTTP/1.1 200 OK\n{\n  \"returnMsg\" : \"成功\",\n  \"returnCode\" : \"1\",\n  \"returnData\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "F:/visualdoc/src/2.1subscirbe/2.1.3_device_bind.js",
    "groupTitle": "2.1数据订阅服务"
  }
] });

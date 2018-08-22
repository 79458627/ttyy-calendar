# ttyy-calendar
#### 天天预约-微信小程序-预约日历插件

APPID：wx6b6cb15df2836ebe
版本号：1.0.0
名称：天天预约日历

#### 插件效果演示
![demo](https://github.com/79458627/ttyy-calendar/blob/master/img/demo.gif)


#### 1.申请使用插件

在使用插件前，首先要在小程序管理后台的“设置-第三方服务-插件管理”中添加插件。开发者可登录小程序管理后台，通过 appId 查找插件并添加。插件开发者通过申请后，方可在小程序中使用相应的插件。



#### 2.引入插件代码包

对于插件的使用者，使用插件前要在 app.json 中声明需要使用的插件，例如：

```
{
  "plugins": {
    "myPlugin": {
      "version": "1.0.0",
      "provider": "wx6b6cb15df2836ebe"
    }
  }
}
```



#### 3.使用插件的自定义组件

在 json 文件定义需要引入的自定义组件时，例如：

```
{
  "usingComponents": {
    "yycalendar": "plugin://myPlugin/yycalendar"
  }
}
```



#### 4.在需要使用地方添加

```
<yycalendar 
	show='{{isShow}}' 
	beginTime="08:00" 
	endTime="06:00" 
	timeGap="60" 
	bind:yybindchange="_yybindchange"/>
```



#### 插件参数解释

```
    beginTime: {
      type: String, 	// 开始时间
      value: '09:00'
    },
    endTime: {
      type: String,	// 结束时间
      value: '21:00'
    },
    timeGap: {
      type: Number,	// 单位时间(min)
      value: 60
    },
    show: {
      type: Boolean, 	// 显示或隐藏遮罩
      value: false
    }
```

#### 问题反馈群
![demo](https://github.com/79458627/ttyy-calendar/blob/master/img/WechatIMG2.jpeg)

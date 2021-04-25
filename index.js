//index.js
//获取应用实例
//const app = getApp()
//var util = require('utils/util.js');
function disableElement() {
console.log("test");
}
var data = {
marqueePace: 1,//滚动速度
marqueeDistance: 0,//初始滚动距离
marquee_margin: 20,
size:14,
interval: 40, // 时间间隔

infoSelected: false,
text: '我想什么时候出就出，想什么时候回就回，你管不着，Hhhh!',
io: [
{name:'进校', value:0},
{name:'出校', value: 1}
], //进出校门
names:['张三', '李四', '王五'],
customName: 'null',
auth: '研究生用户，入校授权有效!',
time: 'asdasdadaded qeqc',
userInfo: {},
hasUserInfo: false,
//canIUse: wx.canIUse('button.open-type.getUserInfo')
};
function radiochange(e) {

}

$('input[type=radio][name=io]').change(function () {
console.log("radiochange");
console.log("radiochange"+$("input[name='io']:checked").val());
if($("input[name='io']:checked").val() == 0){
console.log($("input[name='io']:checked").val());
document.getElementById("auth").innerHTML="研究生用户，出校登记成功！";
}
else{
console.log($("input[name='io']:checked").val());
document.getElementById("auth").innerHTML="研究生用户，入校授权有效！";
}
})



function namechange() {
document.getElementById("user-right").innerHTML = document.getElementById("custom-name-input").value
}


$("#infoselected").click(function(){
$("div.info").hide();
data.time = formatTime(new Date())
console.log(data.time)
document.getElementById("time").innerHTML = data.time;
});

const formatTime = date => {
const year = date.getFullYear()
const month = date.getMonth() + 1
const day = date.getDate()
const hour = date.getHours()
const minute = date.getMinutes()
const second = date.getSeconds()

return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
n = n.toString()
return n[1] ? n : '0' + n
}






//事件处理函数
function bindViewTap() {
wx.navigateTo({
url: '../logs/logs'
})
}
function onLoad() {
//console.log("-1 "+app.globalData.userInfo);
if (app.globalData.userInfo) {
//console.log("0 "+userInfo);
this.setData({
userInfo: app.globalData.userInfo,
hasUserInfo: true
});

} else if (this.data.canIUse){
//console.log("0 "+app.globalData.userInfo);
// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
// 所以此处加入 callback 以防止这种情况
app.userInfoReadyCallback = res => {
this.setData({
userInfo: res.userInfo,
hasUserInfo: true
});
}
} else {
// 在没有 open-type=getUserInfo 版本的兼容处理
//console.log("0 "+app.globalData.userInfo);
wx.getUserInfo({
success: res => {
app.globalData.userInfo = res.userInfo
this.setData({
userInfo: res.userInfo,
hasUserInfo: true
})
}
})

}
}
function getUserInfo(e) {
console.log(e)
app.globalData.userInfo = e.detail.userInfo
this.setData({
userInfo: e.detail.userInfo,
hasUserInfo: true
})
}

function onShow() {
var time = formatTime(new Date());
// 再通过setData更改Page()里面的data，动态更新页面的数据
this.setData({
text: time
});

var that = this;
var length = that.data.text.length * that.data.size;//文字长度
var windowWidth = wx.getSystemInfoSync().windowWidth*0.6;// 屏幕宽度
console.log(length,windowWidth);
that.setData({
length: length,
windowWidth: windowWidth,
});
that.scrolltxt();// 第一个字消失后立即从右边出现
}


function scrolltxt() {
}

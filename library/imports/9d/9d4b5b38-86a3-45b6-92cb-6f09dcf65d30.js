"use strict";
cc._RF.push(module, '9d4b5s4hqNFtpLLbwnc9l0w', 'CacheObject');
// scripts/CacheObject.js

"use strict";

var CacheObjects = {
    GameObject: null,
    CollsionTypeZero: 0, //圆圈tag
    CollsionTypeOne: 1, //发射的子弹
    CollsionTypeTwo: 2 //依靠的子弹
};
CacheObjects.LevelInfo = [{ "TagetNum": 10, "Time": 60, "RoteSpeed": 2.22, "IsReturn": false }, //通关限定数目,通关限定时间,转速,是否可翻转
{ "TagetNum": 12, "Time": 60, "RoteSpeed": 3.33, "IsReturn": true }, { "TagetNum": 14, "Time": 60, "RoteSpeed": 4.44, "IsReturn": true }, { "TagetNum": 14, "Time": 60, "RoteSpeed": 5.55, "IsReturn": true }, { "TagetNum": 14, "Time": 60, "RoteSpeed": 6.66, "IsReturn": true }];
module.exports = CacheObjects;

cc._RF.pop();
# Dexer-s-Graph  
## 1  introduce 介绍
Dexer's Graph是一个基于JavaScript的小型整合动画引擎，能够实现css属性的简单动画。  
## 2  Class 类  
* ### **`dex_SimpleAnimation`** 动画的核心与动画实现方案<br>
  #### 动态方法:
  * **`startAt(id)`**    
  在某标签上开始动画     
    * `id`标签id

  * **`addMoveX(from,length,during,begin,rate)`**    
  添加水平移动动画
    * `from`：动画执行前位置 (`null`: 从已知位置执行)
    * `length`：移动长度
    * `during`：动画执行时间
    * `begin`：动画毫秒后执行 (`null`=`0`)
    * `rate`：动画速率变化值 (`null`=`new dex_Rate(1)`)
  * **`addMoveY(from,length,during,begin,rate)`**    
  添加垂直移动动画
    * `from`：动画执行前位置 (`null`: 从已知位置执行)
    * `length`：移动长度
    * `during`：动画执行时间
    * `begin`：动画毫秒后执行 (`null`=`0`)
    * `rate`：动画速率变化值 (`null`=`new dex_Rate(1)`)
  * **`addRotate(from,length,during,begin,rate)`**    
  添加顺时针旋转动画
    * `from`：动画执行前旋转角度
    * `length`：旋转度数
    * `during`：动画执行时间
    * `begin`：动画毫秒后执行 (`null`=`0`)
    * `rate`：动画速率变化值 (`null`=`new dex_Rate(1)`)
  * **`addFade(from,length,during,begin,rate)`**    
  添加渐入渐出动画
    * `from`：动画执行前透明度
    * `length`：透明度变化量
    * `during`：动画执行时间
    * `begin`：动画毫秒后执行 (`null`=`0`)
    * `rate`：动画速率变化值 (`null`=`new dex_Rate(1)`)
  * **`onFinish(func)`**    
  动画结束回调
    * `func`：回调函数
  * **`onRun(func)`**    
  动画每一帧回调
    * `func`：回调函数 (参数ms指动画已执行时间)
  * **`setReducible(bool)`**    
  设置动画是否结束后还原
    * `bool`：布尔值
  * **`reset()`**
  还原动画
  * **`restart()`**
  重放动画
  * **`finish()`**
  结束动画
* ### **`dex_DelaySet`** 延迟操作<br>
  #### 动态方法:
  * **`add(code,delay)`**    
  添加项
    * `code`执行的代码
    * `delay`执行后的延迟

  * **`run()`**
  执行
* ### **`dex_Rate`** 速率变化操作<br>
  #### 构造方法:
  &nbsp;&nbsp;&nbsp;&nbsp;**`dex_Rate(val_1,val_2,val_3,...)`** 
  #### 动态方法:
  * **`getCount()`**
  获取值总数
  * **`getTranslatedValues()`**
  获取各值所占权(百分比数组0<n<1)&nbsp;&nbsp;ps:处理后各值和为1
  * **`getPresent()`**
  获取各项所占总长度的百分比(百分比数组0<n<1);
  * **`getInceasePresent()`**
  获取递增的各项所占总长度的百分比(百分比数组0<n<1);
  * **其他：`Array.prototype.addRate(rate)`**
  将数组各值根据rate的权修改且总和不变;
* ### **例外：`dex_HashMap`** 哈希表<br>
* ### **未完工：`dex_Effect`** 动画效果<br>
## 3 Files 文件
**`Rate.js`** 内有dex_Rate类    
**`HashMap.js`** 内有dex_HashMap类    
**`Loop.js`** 内有dex_DelaySet类    
**`Rate.js`** 内有dex_Rate类

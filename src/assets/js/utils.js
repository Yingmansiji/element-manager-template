// 该文件作用：定义项目常用的方法


/*
 * 1. 判断数据类型
 * 
 */

export function getType(par){
    var toString = Object.prototype.toString;
    var map = {
        "[object String]": "string",
        "[object Number]": "number",
        "[object Boolean]": "boolean",
        "[object Undefined]": "undefined",
        "[object Null]": "null",

        "[object Array]": "array",
        "[object Object]": "object",
        "[object Function]": "function",
        "[object Date]": "date",
        "[object RegExp]": "regExp"
    };
    return map[toString.call(par)]
 }

 /*
 * 2. 倒计时n秒
 * 
 */
export function countDown(n, fn){
    var timer = setInterval(function(){
        n--;
        console.log(n);
        fn(n);
        if(n <= 0){
            clearInterval(timer)
        }
    }, 1000)
}

/*
 * 3. 生成时间戳
 * time： 时间字符串（例如： '2020-03-09'）
 */
export function timeStamp(time){
    let stamp = Date.parse(new Date(time));
    console.log(stamp);
    return stamp;
}

/*
 * 4. 数值小于零，补零
 * num： 时间字符串（例如： '2020-03-09'）
 */
export function addZero(num){
    if(0 <= parseInt(num) && parseInt(num) < 10){
        return '0' + num;
    }
    return num;
}



 
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// [ 1 ]
// [ XHR 请求 ]
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function reqByXhr() {
    // 1 - 创建 XHR对象
    var request = new XMLHttpRequest();
    /* 浏览器兼容处理
    if (window.XMLHttpRequest)
    {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        request=new XMLHttpRequest();
    }
    else
    {
        // IE6, IE5 浏览器执行代码
        request=new ActiveXObject("Microsoft.XMLHTTP");
    }
    */

    // 2 - 向服务器发送请求
    request.open('get', 'https://unpkg.com/axios/dist/axios.min.js', true);
    request.send();
    /*
    xmlhttp.open("POST","/try/ajax/demo_post2.php",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send("fname=Henry&lname=Ford");
    */

    // 3 - 接收服务器响应
    /*
    onreadystatechange
        存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。
    readyState
        存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
        0: 请求未初始化
        1: 服务器连接已建立
        2: 请求已接收
        3: 请求处理中
        4: 请求已完成，且响应已就绪
    status
        200: "OK"
        404: 未找到页面
    */
    console.log('/// before onreadystatechange ///')
    console.log(request.readyState)
    request.onreadystatechange = function () {
        console.log('/// onreadystatechange ///')
        console.log(request.readyState)
        console.log(request.status)
        if (request.readyState == 4 && request.status == 200) {
            document.getElementById("myDiv").innerHTML = 'XHR 请求：' + request.responseText;
        }
    }
    // 请求成功的回调 request.readyState == 4
    // request.onload = function() {
    //     console.log('/// onload ///')
    //     console.log(request.readyState)
    //     console.log(request.status)
    // }

    // 请求结束的回调 request.readyState == 4
    // request.onloadend = function() {
    //     console.log('/// onloadend ///')
    //     console.log(request.readyState)
    //     console.log(request.status)
    // }
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// [ 2 ]
// [ Axios 请求 ]
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function reqByAxios() {
    axios.get('https://unpkg.com/axios/dist/axios.min.js')
        .then(function (response) {
            // handle success
            console.log('/// axios response is: ///');
            console.log(response);
            document.getElementById("myDiv").innerHTML = 'Axios 请求：' + response.data;
        })
        .catch(function (error) {
            // handle error
            console.log('/// axios error is: ///');
            console.log(error);
            document.getElementById("myDiv").innerHTML = 'Axios 请求：' + error.message;
        })
        .then(function () {
            // always executed
            console.log('/// axios always executed! ///')
        });
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// [ 3 ]
// [ MyAxios 请求 ]
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function reqByMyAxios() {
    // 构造函数
    class MyAxios {
        get(url) {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest()
                xhr.open('get', url, true)
                xhr.onload = function () {
                    const res = {}
                    res.data = xhr.responseText
                    res.status = xhr.status
                    resolve(res)
                }
                xhr.send()
            })
        }
    }

    var myAxios = new MyAxios();
    myAxios.get('https://unpkg.com/axios/dist/axios.min.js')
        .then(function (response) {
            // handle success
            console.log('/// MyAxios response is: ///');
            console.log(response);
            document.getElementById("myDiv").innerHTML = 'MyAxios 请求：' + response.data;
        })
}

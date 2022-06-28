
function reqByAxios() {
    axios.get('http://localhost:8888/api/user')
        .then(function (response) {
            // handle success
            console.log('/// axios response is: ///');
            console.log(response);
            const data = JSON.stringify(response.data);
            document.getElementById("myDiv").innerHTML = 'Axios 请求：' + data;
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

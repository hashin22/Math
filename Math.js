function getRandom() {
    //Math.random() 함수사용해보기
    let num = Math.random() * 100;
    num = Math.ceil(num) * 1000;
    return num;
}



window.onload = function() {
    document.querySelector("#amount").value = getRandom();

}
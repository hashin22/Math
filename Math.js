function testMath() {
    //Math.random() 함수사용해보기
    let num;
    for (let i = 0; i < 30; i++) {
        num = Math.random() * 100;
        num = Math.ceil(num) * 1000;

        document.querySelector("p").innerHTML += num + "<br>";
    }
}


window.onload = function() {
    testMath();

}
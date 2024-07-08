// const inputString = prompt("Mời bạn nhập chuỗi: ");

// let lowerCaseCount = 0;
// let upperCaseCount = 0;
// let digitCount = 0;
// let spaceCount = 0;
// console.log(inputString)
// for(let  i = 0 ; i < inputString.length; i++) {
   
//     let char = inputString[i];  
//     // console.log(inputString[i])
//     if(char >= 'a' && char <= 'z') {
//         lowerCaseCount++;
//         // console.log(inputString[i])
//     } else if(char >= 'A' && char <= 'Z') {
//         upperCaseCount++;   
//         // console.log(inputString[i])
//     } else if(char >= '0' && char <= '9') {
//         digitCount++;
//         // console.log(inputString[i])
//     } else if(char == ' ') {
//         spaceCount++;
//         // console.log(inputString[i])
//     }
    
// }
// console.log("Lower case count: " + lowerCaseCount);
// console.log("Upper case count: " + upperCaseCount);
// console.log("Digit count: " + digitCount);
// console.log("Space count: " + spaceCount);



function isPasswordValid(password) {
    // return password.length >= 8 && password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/)
    if(password.length <6){
        return false;
    }
    let hasUpperCase = false;
    let hasLowCase = false;
    let hasDigit = false;

    for(let i = 0 ; i < password.length; i++) {
        let char = password[i];

        if(char >= 'a' && char <= 'z') {
            hasLowCase = true;
        } else if(char >= 'A' && char <= 'Z') {
            hasUpperCase = true;
        } else if(char >= '0' && char <= '9') {
            hasDigit = true;
        }
    }
    return hasUpperCase && hasLowCase && hasDigit;
}

function setPassWord(){
    let password = prompt("Mời nhập pass: ")
    if(isPasswordValid(password)){
        alert("Đặt mật khẩu thành công! Mật khẩu: " + password);
        return password;
    }else{
        alert(`Mật khẩu không hợp lệ! Nhập lại
            1.Có ít nhất 6 ký tự
            2.Có ít nhất 1 số
            3.Có ít nhất 1 chữ viết hoa
            4.Có 1 chữ thường
            `);
        return setPassWord();
    }
}
let passwordOk = setPassWord();
let count = 0;
while(true){
    let passwordLogin = prompt("nhap lai password: ");
    if(passwordLogin === passwordOk){
        alert("Mật khẩu khớp, chào mừng bạn đã qua cửa")
        break;
    }
    else{
        count++;
        {
            if(count < 5){
                
                alert("Bạn đã nhập sai " +count +"/5")
               
            }else{
                alert("Bạn đã nhập quá số lần cho phép. Tài khoản đã bị khoá!");
                break;
            }
        }
    
    }
   
}

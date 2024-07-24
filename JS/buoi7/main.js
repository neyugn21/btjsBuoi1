let arr = [1, 7, 5, 9, 2, 6];

// // 1. Tổng các phần tử chẵn trong mảng
// let tongchan = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         tongchan += arr[i];
//     }
// }
// console.log("Tổng các phần tử chẵn:", tongchan);

// 2. Tổng các phần tử lớn hơn 5 trong mảng
// let sumGreaterThan5 = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 5) {
//         sumGreaterThan5 += arr[i];
//     }
// }
// console.log("Tổng các phần tử lớn hơn 5:", sumGreaterThan5);

// // 3. Tổng các phần tử chia 7 dư 2 trong mảng
// let chiabay = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 7 === 2) {
//         chiabay += arr[i];
//     }
// }
// console.log("Tổng các phần tử chia 7 dư 2:", chiabay);

// 4. Max của các phần tử chẵn mảng
// let maxEven = -Infinity;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 && arr[i] > maxEven) {
//         maxEven = arr[i];
//     }
// }
// console.log("Max của các phần tử chẵn:", maxEven);

// // 5. Lớn nhất của mảng
// let maxElement = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxElement) {
//         maxElement = arr[i];
//     }
// }
// console.log("Lớn nhất của mảng:", maxElement);

// // 6. Số lượng các phần tử chia hết cho 5 trong mảng
// let countDiv5 = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 === 0) {
//         countDiv5++;
//     }
// }
// console.log("Số lượng các phần tử chia hết cho 5:", countDiv5);

// // 7. Trung bình các phần tử chia hết cho 5 trong mảng
// let sumDiv5 = 0;
// let countDiv5Avg = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 === 0) {
//         sumDiv5 += arr[i];
//         countDiv5Avg++;
//     }
// }
// let avgDiv5 = countDiv5Avg === 0 ? 0 : sumDiv5 / countDiv5Avg;
// console.log("Trung bình các phần tử chia hết cho 5:", avgDiv5);

// // 8. Nhập số và đếm số lần xuất hiện của số đó trong mảng
// let input = prompt("Nhập một số: ");
// let countInput = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == input) {
//         countInput++;
//     }
// }
// console.log(`Số lần xuất hiện của số ${input}:`, countInput);

// // 9. Tìm phần tử lớn thứ 2 trong mảng

// câu 1
// function reverse(str) {
//     let splitStr = str.split("")
//     let Reverse = splitStr.reverse()
//     let Result = Reverse.join("")
// }



// câu 2
// function remove(arr) {
//     let set = new Set(arr)
//     let toArr = [...set]
//     console.log(toArr)
// }
// remove([1, 2, 2, 3])



// câu 3
// function getElements(arr) {
//     arr.sort();
//     let result = {
//         value: '',
//         count: 0
//     };
//     let count = 1;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == arr[i + 1]) ++count;
//         else {
//             count = 1;
//         }
//         if (result.count < count) {
//             result.value = arr[i];
//             result.count = count;
//         }
//     }
//     return {
//         value: result.value,
//         count: result.count

//     }
// }
// console.log(getElements([1, 2, 2, 2, 2, 2, 2,]))



let bntAdd = document.querySelector(".bntAdd")
bntAdd.onclick = checkInput()

function checkInput() {
  let element = document.querySelector(".Contain")
  let inputElement = element.querySelectorAll(".value")
  for (let i = 0; i < inputElement.length; i++) {
    if (inputElement[i].value === "") {
      console.log("errror")
    }
    else {
      console.log("susses")
    }
  }

}


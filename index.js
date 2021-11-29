const input = document.getElementById("input1");
const button = document.querySelector("button");
const target = document.querySelector(".target")


let data = {
  firstPic: '',
  secondPic: ''
}



button.addEventListener("click",function(){
  data.firstPic = input.value
  data.secondPic = input.value

  let newText = `<html>Test ${data.firstPic}</html>`

  console.log(data.firstPic)
  target.innerText = newText;

})

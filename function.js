// Khởi tạo các phần tử DOM
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let imgpum = document.querySelector('#pum');

let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let imgfan = document.querySelector('#fan');

let btn5 = document.querySelector('#btn5');
let btn6 = document.querySelector('#btn6');
let imgmist = document.querySelector('#mist');

let btn7 = document.querySelector('#btn7');
let btn8 = document.querySelector('#btn8');
let imgvalve = document.querySelector('#valve');

////////////////////////////////////////////////////////////////////12 bơm
btn1.addEventListener('click', () => {
  imgpum.src = 'img/pumpon1.png'; // ảnh khi bật
  btn1.classList.add('active-on');
  btn2.classList.remove('active-off');
  btn2.classList.remove('active-on'); // Nếu có nhấn nhầm
  btn1.classList.remove('active-off'); // Đảm bảo không có class sai
  firebase.database().ref("thietbi1").set({ bom: 1 });
});

btn2.addEventListener('click', () => {
  imgpum.src = "img/pump.png"; // ảnh khi tắt
  btn2.classList.add('active-off');
  btn1.classList.remove('active-on');
  btn1.classList.remove('active-off');
  btn2.classList.remove('active-on');
  firebase.database().ref("thietbi1").set({ bom: 0 });
});
////////////////////////////////////////////////////////////////////34 quạt
btn3.addEventListener('click', () => {
    imgfan.src = 'img/fanon.png'; // ảnh khi bật
    btn3.classList.add('active-on');
    btn4.classList.remove('active-off');
    btn4.classList.remove('active-on');
    btn3.classList.remove('active-off');
    firebase.database().ref("thietbi2").set({ fan: 1 });
  });
  
  btn4.addEventListener('click', () => {
    imgfan.src = 'img/fan.png'; // ảnh khi tắt
    btn4.classList.add('active-off');
    btn3.classList.remove('active-on');
    btn3.classList.remove('active-off');
    btn4.classList.remove('active-on');
    firebase.database().ref("thietbi2").set({ fan: 0 });
  });

  ////////////////////////////////////////////////////////////////////56 phun sương
btn5.addEventListener('click', () => {
    imgmist.src = 'img/miston.png'; // ảnh khi bật
    btn5.classList.add('active-on');
    btn6.classList.remove('active-off');
    btn6.classList.remove('active-on');
    btn5.classList.remove('active-off');
    firebase.database().ref("thietbi3").set({ mist: 1 });
  });
  
  btn6.addEventListener('click', () => {
    imgmist.src = 'img/mist.png'; // ảnh khi tắt
    btn6.classList.add('active-off');
    btn5.classList.remove('active-on');
    btn5.classList.remove('active-off');
    btn6.classList.remove('active-on');
    firebase.database().ref("thietbi3").set({ mist: 0 });
  });
  
  ////////////////////////////////////////////////////////////////////78 van xả
btn7.addEventListener('click', () => {
    imgvalve.src = 'img/valveon.png'; // ảnh khi bật
    btn7.classList.add('active-on');
    btn8.classList.remove('active-off');
    btn8.classList.remove('active-on');
    btn7.classList.remove('active-off');
    firebase.database().ref("thietbi4").set({ valve: 1 });
  });
  
  btn8.addEventListener('click', () => {
    imgvalve.src = 'img/valve.png'; // ảnh khi tắt
    btn8.classList.add('active-off');
    btn7.classList.remove('active-on');
    btn7.classList.remove('active-off');
    btn8.classList.remove('active-on');
    firebase.database().ref("thietbi4").set({ valve: 0 });
  });
  

const addForm = document.querySelector("form.add");
const ul = document.querySelector("ul.todos");
const searchFormInput = document.querySelector("form.search input");

//ADD NEW TODO
const handleAddItem = (inputValue) => {
  const html = 
  `<li class="list-group-item d-flex justify-content-between align-items-center">
  <div class="box1">
      <span>${inputValue}</span>
  <i class="fa-solid fa-trash delete"></i> 
  </div>
</li>`;
  ul.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = addForm.add.value;
  if (inputValue.length) handleAddItem(inputValue);
  addForm.add.value = "";
});

//REMOVE TODO
ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

//SEARCH INPUT: PREVENT DEFAULT ACTION
searchFormInput.parentElement.addEventListener("submit", (e) =>
  e.preventDefault()
);

//SEARCH AND FILTER TODOS
const filterItems = (value) => {
  Array.from(ul.children).forEach((li) => {
    if (!li.textContent.toLowerCase().includes(value)) li.classList.add("filtred");
    else li.classList.remove("filtred");
  });
};

searchFormInput.addEventListener("keyup", (e) => {
  const value = searchFormInput.value.toLowerCase().trim();
  filterItems(value);
});




var greeting;
var now = new Date();
var hours = now.getHours();
var session = document.getElementById('session');
    if (5 <= hours && hours < 8) {//Morning
        document.write('<body style="background: #F3904F;  color: white">');
        session.innerHTML = 'AM';
    }
    if (8 <= hours && hours < 12) {//Day
        document.write('<body style="background: -webkit-linear-gradient(rgba(10,12,36,1) , rgba(18,82,97,1));background: linear-gradient( rgba(10,12,36,1) , rgba(18,82,97,1));  color: white">');
        session.innerHTML = 'AM';
    }
    if (12 <= hours && hours < 18) {//Evening
        document.write('<body style="background: #d6da30;  color: white">');
        session.innerHTML = 'PM';
    }
    if (18 <= hours && hours < 5) {//Night
        document.write('<body style="background: #0f2027; color : white">');
        session.innerHTML = 'PM';
    }



function displayTime(){
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  var sec = dateTime.getSeconds();

  if (hrs < 10) {
      hrs = '0' + hrs;
  }

  if (min < 10) {
      min = '0' + min;
  }

  if (sec < 10) {
      sec = '0' + sec;
  }
  
      var session = document.getElementById('session');
      if(hrs >= 12){  
          session.innerHTML = 'PM';
      }else{
          session.innerHTML = 'AM';
      }
      document.getElementById('hours').innerHTML = hrs;
      document.getElementById('minutes').innerHTML = min;
      document.getElementById('seconds').innerHTML = sec;
  }
setInterval(displayTime, 10);
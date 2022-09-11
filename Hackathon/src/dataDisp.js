import { getData, setData } from "./dataStore";

const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const d3 = document.getElementById('d3');
const d4 = document.getElementById('d4');
const d5 = document.getElementById('d5');

const b1 = document.getElementById('b1');

b1.addEventListener("click" , (e) => {
    e.preventDefault();
    let data = getData();
    data.d1 = 500;
    setData(data);
    d1.classList.remove("dispenser empty");
    d1.classList.add("dispenser full");
    d1.innerHTML = `${data.d1} left`
    location.reload();
})


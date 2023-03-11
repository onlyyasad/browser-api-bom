const setAge = () => {
    localStorage.setItem("age", "25");
}

const getAge = () =>{
    const age = localStorage.getItem("age");
    document.getElementById("age").innerText = age;
}
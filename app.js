function Clear(){
    let input=document.getElementById("input").value ="";
    let results=document.getElementById("result").value ="";
}

function tostring(){
    let n = document.getElementById("input").value;
    let array = n.toString();
    document.getElementById("result").value = array;
}

let array = [];

function pop() {
    let input = document.getElementById("input").value;
    array.pop(input);
    document.getElementById("result").value = "["+array+"]";

    document.getElementById("input").value = "";
}

function push() {
    let input = document.getElementById("input").value;
    array.push(input);
    document.getElementById("result").value = "["+array+"]";

    document.getElementById("input").value = "";
}

function shift() {
    let input = document.getElementById("input").value;
    array.shift(input);
    document.getElementById("result").value = "["+array+"]";

    document.getElementById("input").value = "";
}

function unshift() {
    let input = document.getElementById("input").value;
    array.unshift(input);
    document.getElementById("result").value = "["+array+"]";

    document.getElementById("input").value = "";
}

function concat() {
    let array1 = []
    let array2 = prompt("Enter the number to add:");
    array1 = array.concat(array2);
    document.getElementById("result").value = "["+array1+"]";

    document.getElementById("input").value = "";

}

function filter() {

    let input = document.getElementById("input").value;

    let filter = parseInt(prompt("Enter the value to filter:"));
    let num = array.filter(check);

    function check(num) {
        return num<filter;
    }
    
    document.getElementById("result").value = num;

    document.getElementById("input").value = "";

}

function find() {
    let input = document.getElementById("input").value;
    let find = parseInt(prompt("Enter the value to find:"));

    let num = array.find(check);

    function check(age) {
        return age < find;
    }

    document.getElementById("result").value = num;

    document.getElementById("input").value = "";
}

function splice() {
    let a = parseInt (prompt("Enter the index value:"));
    let b = parseInt (prompt("Enter the item to be removed:")); 
    array.splice(a,b);
    document.getElementById("result").value = "["+array+"]";
}

function slice() {
    let a = parseInt (prompt("Enter the index value:"));
    let b = parseInt (prompt("Enter the item to be removed:")); 
    array = array.slice(a,b);
    document.getElementById("result").value = "["+array+"]";
}

function reverse() {
    let input = document.getElementById("input").value;
    array.reverse();

    document.getElementById("result").value = "["+array+"]";
}

function sort() {
    let input = document.getElementById("input").value;
    array.sort();

    document.getElementById("result").value = "["+array+"]";
}

function Delete() {
    let input = prompt("Enter the index to delete:");
    delete array[input];
    document.getElementById("result").value = "["+array+"]";
}







const setstyle = ()=>
{
    document.getElementById("venom").style.color = "orange"
    document.getElementById("venom").style.fontSize = "35px";
    // document.getElementsByClassName("venom").innerHTML = "venom F5"; this is not work because in same class we have many ele so specify 
    document.getElementsByClassName("venom")[0].innerHTML = "venom F5!!";
}

// JavaScript Display Possibilities

// JavaScript can "display" data in different ways:
// 1. Writing into an HTML element, using innerHTML.
// 2. Writing into the HTML output using document.write().
// 3. Writing into an alert box, using window.alert().
// 4. Writing into the browser console, using console.log().
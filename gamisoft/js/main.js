function toggleFunction(){
    var x = document.getElementById("myPassword");
    var y = document.getElementById("hideEye");
    var z = document.getElementById("openEye");

    if(x.type === 'password'){
        x.type = "text";
        z.style.display = 'block';
        y.style.display = 'none';
    }else {
        x.type = 'password';
        z.style.display = 'none';
        y.style.display = 'block';
    }
}
function handleUpdate(){
    var spacing = document.querySelector('.spacing').value;
    var blur = document.querySelector('.Blur').value;
    var color = document.querySelector('.color').value;
    // var img = document.querySelector('img');
    document.documentElement.style.setProperty('--spacing', spacing + 'px');
    document.documentElement.style.setProperty('--blur', blur + 'px');
    document.documentElement.style.setProperty('--base', color);
}
var inputs = document.querySelectorAll('.spacing, .Blur, .color');
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
// document.getElementById("darkBtn").addEventListener("click" , function(){
//     if(this.click){
//         console.log("dark mode");
//     }
//     else{
//         console.log("light mode");
        
//     }
    
// })


var themeDark = document.getElementById('theme-dark');
var themeLight = document.getElementById('theme-light');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeLight.classList.remove('hidden');
} else {
    themeDark.classList.remove('hidden');
}

var themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeDark.classList.toggle('hidden');
    themeLight.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const toggleSwitchSlider = document.querySelector('.theme-switch__toggle-slider');


function switchTheme(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); // Save user theme preference for future visits
    } else{
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); 
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);


// check for saved user theme preferences on site 
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

//apply saved theme if any
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === 'light'){
        toggleSwitch.checked = true;

        // Prevent slider animation
        toggleSwitchSlider.style.transition = "all 0s";

        setTimeout(function(){
        toggleSwitchSlider.style.transition = "all 0.2s";
        }, 200);
    }

}


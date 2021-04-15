import { AlertWeb } from './js/alert.js';
// import './styles/theme.css';
// import './assets/fontawesome-free-5.15.3-web/css/all.css';  
import '@fontawesomev5/all.css'
import '@styles/theme.css'
import photo from '@images/person_photo@2x.png'


// import photo from './assets/pictures/person_photo@2x.png';  

const API = process.env.API;
const USER = process.env.USER_ACCOUNT;

$( document ).ready(function() {
    console.log("=====.env ===");
    console.log("API : " + API);
    console.log("USER ACCOUNT   : " + USER);
    
    $('#btn-sidebar-collapser').on('click', function() {
        // $('.overlay').removeClass('active');
        $('.sidebar').addClass('active');
        $('#body-content').addClass('active');
        // new AlertWeb().showMessage('my own alert');
    });
    
    $('#btn-sidebar-toogle').on('click', function() {
        // $('#sidebar').toggleClass('active');
        $('.sidebar').toggleClass('active');
        $('#body-content').toggleClass('active');
        console.log("click");
        new AlertWeb().print("very good")
    });
});



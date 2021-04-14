import { AlertWeb } from './js/alert.js';
import './styles/theme.css';
import photo from './assets/pictures/person_photo@2x.png';  

$( document ).ready(function() {
    
    console.log("document ready..");

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



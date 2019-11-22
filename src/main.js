import {DoctorSearch} from './api-display';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {

  $('form#user-input').submit(function(event) {
    event.preventDefault();
    let userSymptom = $('#symptom').val();
    console.log(userSymptom);
    let doctorSearch = new DoctorSearch(userSymptom);
    doctorSearch.getDoctors();

  })

});

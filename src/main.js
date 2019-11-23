import {DoctorSearch} from './api-call.js';
import {SearchResults} from './results.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {

  let locationCheck = new DoctorSearch();
  (async () => {
  await locationCheck.getLocation();
  $('#city').text(locationCheck.location[2])
  })();

  $('form#user-input').submit(function(event) {
    event.preventDefault();

    let radius = $('#search-radious option:selected').val();
    let userSymptom = $('#symptom').val();
    let docName = $('#doctor-name').val();
    $('#symptom').val('');
    $('#doctor-name').val('');
    $('#search-results').empty();

    (async () => {
      let doctorSearch = new DoctorSearch(userSymptom, docName, radius);
      await doctorSearch.getLocation();
      let docResults = await doctorSearch.getDoctors();
    if(doctorSearch.error == true) {
let error = await doctorSearch.getDoctors();
  $('#no-results').text(error)

      }
      let newResults = new SearchResults(docResults);
      newResults.userResults();
    })();

  });

});

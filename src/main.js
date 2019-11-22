import {DoctorSearch} from './api-call.js';
import {SearchResults} from './results.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {

  $('form#user-input').submit(function(event) {
    event.preventDefault();
    let userSymptom = $('#symptom').val();
    let docName = $('#doctor-name').val();

    (async () => {
      let doctorSearch = new DoctorSearch(userSymptom, docName);
      const docResults = await doctorSearch.getDoctors();
      let newResults = new SearchResults(docResults);
      newResults.userResults();

    })();


  });

});


import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {

  $("#user-info").submit(function(event) {
    event.preventDefault();
    const userName = $('#user-name').val();
    const userAge = $('#user-age').val();
    const userDeathAge = $('#user-death-age').val();
    const user = new User(userName, userAge, userDeathAge);

    $('#welcome-name').text(user.name);
    $('#current-age').text(user.age);
    $('#years-left').text(user.deathClock(user.death, user.age));
    $('.age-calc').show();
    $('.user-form').hide();
    if(user.age > user.death) {
      $(".expired").show();
    } else {
      $('.welcome').show();
    }

    Object.keys(user.aging).forEach(key=>{
      $('#aging-selector').append("<option value=" + `${user.aging[key]}` + ">" + `${key}` + "</option>");
    });

    $("#space-age, button").click(function(event) {
      event.preventDefault();
      let aging = $('#aging-selector').val();
      let newAge = user.planetAge(user.age, aging);
      let newDeathAge = user.planetAge(user.death, aging);
      $('#welcome-name').text(user.name);
      $('#current-age').text(newAge);
      $('#years-left').text(user.deathClock(newDeathAge, newAge));
    });
  });
});

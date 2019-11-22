import $ from 'jquery';


export class SearchResults {
  constructor(docResults) {
    this.result = docResults;
  }

  userResults() {
    let docArray = this.result.data;
    docArray.forEach(function(doc) {
      let acceptNew = () => {
        if(doc.practices[0].accepts_new_patients == true){
          return "yes";
        }else{
          return "no";
        }
      }
      let website = () => {
        if(doc.practices[0].website === undefined) {
          return "no website listed";
        } else {
          return doc.practices[0].website;
        }
      }
      let firstName = doc.profile.first_name;
      let lastName = doc.profile.last_name;
      let address = doc.practices[0].visit_address.street + " " + doc.practices[0].visit_address.city + ", " + doc.practices[0].visit_address.state + " " + doc.practices[0].visit_address.zip;
      let phone = doc.practices[0].phones[0].number;

      $('ul#search-results').append("<li>" + firstName + " " +
      lastName +
      "</li>" + "<ul>" + "<li>" + address +
      "</li>" + "<li>" +
      phone +
      "</li>" +'<li>' +
      website() + "</li>" +
      "<li> Accepting new patients:" + acceptNew() + "</li>" + "</ul>" );

    });
  }
}

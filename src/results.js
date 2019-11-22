import $ from 'jquery';


export class SearchResults {
  constructor(docResults) {
    this.result = docResults;
    this.pastResults = [];
  }

  userResults() {


    let docArray = this.result.data;
    if(docArray.length === 0){
      $("#no-results").text("No results. Try another search.")
    }

    docArray.forEach(function(doc) {
      let acceptNew = () => {

        if(doc.practices[0].accepts_new_patients == true){
          return "yes";
        }else{
          return "no";
        }
      };
      let website = () => {
        if(doc.practices[0].website === undefined) {
          return "no website listed";
        } else {
          return doc.practices[0].website;
        }
      };

      let firstName = doc.profile.first_name;
      let lastName = doc.profile.last_name;
      let address = doc.practices[0].visit_address.street + " " + doc.practices[0].visit_address.city + ", " + doc.practices[0].visit_address.state + " " + doc.practices[0].visit_address.zip;
      let phone = doc.practices[0].phones[0].number;

      Promise.all(website, acceptNew, firstName, lastName, address, phone).then(

      $('ul#search-results').append("<li id='doc-name'>" + firstName + " " + lastName + "</li>" + "<ul>" + "<li>Address: " + address + "</li>" + "<li> Phone: " + phone + "</li>" + "<li> Website: " + website() + "</li>" + "<li> Accepting new patients: " + acceptNew() + "</li>" + "</ul>")
);
    });
  }
}

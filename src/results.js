import $ from 'jquery';


export class SearchResults {
  constructor(docResults) {
    this.result = docResults;
  }

  userResults() {
    let docArray = this.result.data;
    docArray.forEach(function(doc) {
      $('ul#search-results').append("<li>" + doc.profile.first_name + " " + doc.profile.last_name + "</li>" +
      "<ul>" + "<li>" + doc.practices[0].visit_address.street + " " + doc.practices[0].visit_address.city + ", " + doc.practices[0].visit_address.state + " " + doc.practices[0].visit_address.zip + "</li>" +
      "<li>" + doc.practices[0].phones[0].number + "</li>"   + "</ul>" );
    });
  }
}

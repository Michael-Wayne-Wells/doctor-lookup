import $ from 'jquery';


export class SearchResults {
  constructor() {
    this.result = [];

  }

  userResults(docResults) {
  let docArray = docResults.data
  docArray.forEach(function(doc) {
    $('ul#search-results').append("<li>" + doc.profile.first_name + " " + doc.profile.last_name + "</li>")

  })


}
}

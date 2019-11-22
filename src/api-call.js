export class DoctorSearch {
  constructor(symptom,doctorName) {
    this.symptom = symptom;
    this.doctorName = doctorName;
    this.error = false;
    this.location = []
  }


async getLocation() {
  try {
    let response = await fetch(`https://freegeoip.app/json/`);
      let jsonResponse = await response.json();
      this.location.push(jsonResponse.latitude, jsonResponse.longitude, jsonResponse.city );
      console.log(this.location);
  }catch(error){
    this.error = true;
    return "There was an error handling your request: " + error.message;
  }
}
  async getDoctors() {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${this.doctorName}&query=${this.symptom}&location=${this.location[0]}%2c${this.location[1]}%2c100&skip=0&limit=10&user_key=${process.env.API_KEY}`);
        console.log(response);
      let jsonResponse = await response.json();

      return jsonResponse;

    }catch(error){
      this.error = true;
      console.log(this.error);
      return "There was an error handling your request: " + error.message;
    }
  }


}

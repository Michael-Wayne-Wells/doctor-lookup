export class DoctorSearch {
  constructor(symptom,doctorName) {
    this.symptom = symptom;
    this.doctorName = doctorName;
  }

  async getDoctors() {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${this.doctorName}&query=${this.symptom}&location=or-portland&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonResponse = await response.json();

      return jsonResponse;

    }catch(error){
      console.error("There was an error handling your request: " + error.message);
    }
  }


}

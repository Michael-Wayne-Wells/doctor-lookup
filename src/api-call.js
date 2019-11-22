export class DoctorSearch {
  constructor(symptom,doctorFirst,doctorLast) {
    this.symptom = symptom;
    this.doctorFirst = doctorFirst;
    this.doctorLast = doctorLast;
  }



  async getDoctors() {
    try {
      console.log(process.env.API_KEY);
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${this.symptom}&location=or-portland&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonResponse = await response.json();
      return jsonResponse;

    }catch(error){
      console.error("There was an error handling your request: " + error.message);
    }
  }


}

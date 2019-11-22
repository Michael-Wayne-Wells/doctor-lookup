export class DoctorSearch {
  constructor(symptom,doctorFirst,doctorLast) {
    this.symptom = symptom;
    this.doctorFirst = doctorFirst;
    this.doctorLast = doctorLast;
    const apiUrl = `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland${searchVar}&&skip=0&limit=10&user_key=${prepare.env.API_KEY}`
  }

  apiUrl() {

  }

  async getDoctors() {
    try {
      let response = await fetch(apiUrl);
      let jsonResponse = await response.json;
      return jsonResponse;

    }
  }


}

# _Doctor Lookup_

#### _Returns local doctor listings from Better Doctor API based on users input_

#### By _**Michael Wells**_

## Description
This application is build to search for local doctors based on symptoms or doctors name. Results are gathered from [BetterDoctor API](href="https://developer.betterdoctor.com/").
_ _

* User's location is gathered on page load which will be used to find local doctor.
* User selects location radius to refine Results
* User can enter symptom or other search terms to refine results.
* User can enter doctors Name to refine results.
* Application displays error message if there is an issue reaching the API.
* Application displays a no results message if their search returned nothing.


## Setup/Installation Requirements

You will need to register get an api key from [BetterDoctor API](href="https://developer.betterdoctor.com/")
* clone and open the file locally
* _in terminal run:_
>$git clone https://github.com/Michael-Wayne-Wells/doctor-lookup.git

* _add an .env file to the projects main repository folder_

>$touch .env

* _Add your api key to the .env file. It must be named API_KEY to work:_

>API_KEY = [your key]

* _install webpack_

>$npm install

* _run the program_

>$npm run start



## Known Bugs

_No known bugs_

## Support and contact details

_If you have any issues with the program or want to reach out, email [mwells1286@gmail.com](href="mailto:mwells1286@gmail.com")_

## Technologies Used

_This program utilized:_
* [BetterDoctor API](href="https://developer.betterdoctor.com/")
* _JavaScript_
* _HTML_
* _CSS_
* _Bootstrap 4.0_
* _jQuery 3.4.1_

_and was built on Atom_
### License

*Licensed under MIT license*

Copyright (c) 2019 **_Michael Wells_**

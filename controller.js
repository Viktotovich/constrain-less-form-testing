const countryList = {
  Afghanistan: "AF",
  Albania: "AL",
  Algeria: "DZ",
  Andorra: "AD",
  Angola: "AO",
  "Antigua and Barbuda": "AG",
  Argentina: "AR",
  Armenia: "AM",
  Australia: "AU",
  Austria: "AT",
  Azerbaijan: "AZ",
  Bahamas: "BS",
  Bahrain: "BH",
  Bangladesh: "BD",
  Barbados: "BB",
  Belarus: "BY",
  Belgium: "BE",
  Belize: "BZ",
  Benin: "BJ",
  Bhutan: "BT",
  Bolivia: "BO",
  "Bosnia and Herzegovina": "BA",
  Botswana: "BW",
  Brazil: "BR",
  Brunei: "BN",
  Bulgaria: "BG",
  "Burkina Faso": "BF",
  Burundi: "BI",
  "Cabo Verde": "CV",
  Cambodia: "KH",
  Cameroon: "CM",
  Canada: "CA",
  "Central African Republic": "CF",
  Chad: "TD",
  Chile: "CL",
  China: "CN",
  Colombia: "CO",
  Comoros: "KM",
  "Congo (Congo-Brazzaville)": "CG",
  "Congo (Democratic Republic)": "CD",
  "Costa Rica": "CR",
  Croatia: "HR",
  Cuba: "CU",
  Cyprus: "CY",
  "Czech Republic": "CZ",
  Denmark: "DK",
  Djibouti: "DJ",
  Dominica: "DM",
  "Dominican Republic": "DO",
  Ecuador: "EC",
  Egypt: "EG",
  "El Salvador": "SV",
  "Equatorial Guinea": "GQ",
  Eritrea: "ER",
  Estonia: "EE",
  Eswatini: "SZ",
  Ethiopia: "ET",
  Fiji: "FJ",
  Finland: "FI",
  France: "FR",
  Gabon: "GA",
  Gambia: "GM",
  Georgia: "GE",
  Germany: "DE",
  Ghana: "GH",
  Greece: "GR",
  Grenada: "GD",
  Guatemala: "GT",
  Guinea: "GN",
  "Guinea-Bissau": "GW",
  Guyana: "GY",
  Haiti: "HT",
  Honduras: "HN",
  Hungary: "HU",
  Iceland: "IS",
  India: "IN",
  Indonesia: "ID",
  Iran: "IR",
  Iraq: "IQ",
  Ireland: "IE",
  Israel: "IL",
  Italy: "IT",
  Jamaica: "JM",
  Japan: "JP",
  Jordan: "JO",
  Kazakhstan: "KZ",
  Kenya: "KE",
  Kiribati: "KI",
  Kuwait: "KW",
  Kyrgyzstan: "KG",
  Laos: "LA",
  Latvia: "LV",
  Lebanon: "LB",
  Lesotho: "LS",
  Liberia: "LR",
  Libya: "LY",
  Liechtenstein: "LI",
  Lithuania: "LT",
  Luxembourg: "LU",
  Madagascar: "MG",
  Malawi: "MW",
  Malaysia: "MY",
  Maldives: "MV",
  Mali: "ML",
  Malta: "MT",
  "Marshall Islands": "MH",
  Mauritania: "MR",
  Mauritius: "MU",
  Mexico: "MX",
  Micronesia: "FM",
  Moldova: "MD",
  Monaco: "MC",
  Mongolia: "MN",
  Montenegro: "ME",
  Morocco: "MA",
  Mozambique: "MZ",
  Myanmar: "MM",
  Namibia: "NA",
  Nauru: "NR",
  Nepal: "NP",
  Netherlands: "NL",
  "New Zealand": "NZ",
  Nicaragua: "NI",
  Niger: "NE",
  Nigeria: "NG",
  "North Macedonia": "MK",
  Norway: "NO",
  Oman: "OM",
  Pakistan: "PK",
  Palau: "PW",
  Panama: "PA",
  "Papua New Guinea": "PG",
  Paraguay: "PY",
  Peru: "PE",
  Philippines: "PH",
  Poland: "PL",
  Portugal: "PT",
  Qatar: "QA",
  Romania: "RO",
  Russia: "RU",
  Rwanda: "RW",
  "Saint Kitts and Nevis": "KN",
  "Saint Lucia": "LC",
  "Saint Vincent and the Grenadines": "VC",
  Samoa: "WS",
  "San Marino": "SM",
  "Sao Tome and Principe": "ST",
  "Saudi Arabia": "SA",
  Senegal: "SN",
  Serbia: "RS",
  Seychelles: "SC",
  "Sierra Leone": "SL",
  Singapore: "SG",
  Slovakia: "SK",
  Slovenia: "SI",
  "Solomon Islands": "SB",
  Somalia: "SO",
  "South Africa": "ZA",
  "South Korea": "KR",
  "South Sudan": "SS",
  Spain: "ES",
  "Sri Lanka": "LK",
  Sudan: "SD",
  Suriname: "SR",
  Sweden: "SE",
  Switzerland: "CH",
  Syria: "SY",
  Tajikistan: "TJ",
  Tanzania: "TZ",
  Thailand: "TH",
  "Timor-Leste": "TL",
  Togo: "TG",
  Tonga: "TO",
  "Trinidad and Tobago": "TT",
  Tunisia: "TN",
  Turkey: "TR",
  Turkmenistan: "TM",
  Tuvalu: "TV",
  Uganda: "UG",
  Ukraine: "UA",
  "United Arab Emirates": "AE",
  "United Kingdom": "GB",
  "United States": "US",
  Uruguay: "UY",
  Uzbekistan: "UZ",
  Vanuatu: "VU",
  "Vatican City": "VA",
  Venezuela: "VE",
  Vietnam: "VN",
  Yemen: "YE",
  Zambia: "ZM",
  Zimbabwe: "ZW",
};

const pwdControls = {
  receivePwd: function (pwd) {
    let lengthCheck = pwdControls.validateLength(pwd);
    let condition = {};

    condition.digitCheck = pwdControls.conditions.containDigit.test(pwd);

    condition.caseCheck = pwdControls.conditions.containOneLowerCase.test(pwd);

    condition.spCharCheck = pwdControls.conditions.containOneSpecial.test(pwd);

    return { lengthCheck, condition };
  },
  conditions: {
    containDigit: /(?=.*\d)/,
    containOneLowerCase: /(?=.*[a-z])/,
    containOneSpecial: /(?=.*[\W])/,
  },
  validateLength: function (pwd) {
    if (pwd.length < 8) {
      let message = [
        false,
        `Your password is ${pwd.length} characters, it must be atleast 8 characters.`,
      ];
      return message;
    } else if (pwd.length > 20) {
      let message = [
        false,
        `Your password is ${pwd.length} characters long, it must be maximum 20 character.`,
      ];
      return message;
    } else {
      let message = [true, ""];
      return message;
    }
  },
};

const formController = {
  emailElement: document.querySelector("#email"),
  countryElement: document.querySelector("#country"),
  zipcodeElement: document.querySelector("#zip-code"),
  passwordElement: document.querySelector("#password"),
  confirmPasswordElement: document.querySelector("#confirm-password"),
  submitButton: document.querySelector("#submit-form"),
  initiate: function () {
    formController.emailElement.addEventListener(
      "input",
      formController.checkEmailValidity
    );
    formController.countryElement.addEventListener(
      "input",
      formController.checkCountryValidity
    );
    formController.zipcodeElement.addEventListener(
      "input",
      formController.checkZipCodeValidity
    );
    formController.passwordElement.addEventListener(
      "input",
      formController.checkPasswordValidity
    );
    formController.confirmPasswordElement.addEventListener(
      "input",
      formController.checkConfirmPasswordValidity
    );
    formController.submitButton.addEventListener(
      "click",
      formController.checkAll
    );
  },
  fillSelections: function (countryCode) {
    const countryContainer = document.querySelector("#country-dropdown");
    const option = document.createElement("option");

    option.setAttribute("value", countryCode);
    option.textContent = countryCode;

    countryContainer.appendChild(option);
  },
  checkEmailValidity: function () {
    if (formController.emailElement.validity.tooShort) {
      formController.displayError(
        formController.emailElement,
        "Please enter a longer email"
      );
    } else if (formController.emailElement.validity.tooLong) {
      formController.displayError(
        formController.emailElement,
        "Please enter a shorter email"
      );
    } else if (formController.emailElement.validity.typeMismatch) {
      formController.displayError(
        formController.emailElement,
        "Please enter a valid email"
      );
    } else {
      formController.displayCorrect(formController.emailElement);
      return true;
    }
  },
  checkCountryValidity: function () {
    if (formController.countryElement.validity.tooShort) {
      formController.displayError(
        formController.countryElement,
        "Please enter the full country name"
      );
    } else if (formController.countryElement.validity.tooLong) {
      formController.displayError(
        formController.countryElement,
        "This exceeds the longest possible country name"
      );
    } else if (formController.countryElement.validity.typeMismatch) {
      formController.displayError(
        formController.countryElement,
        "Please avoid any non-text characters, or numbers (i.e: {!?><9~2})"
      );
    } else {
      formController.displayCorrect(formController.countryElement);
      return true;
    }
  },
  zipcodeRegExp: /^[a-zA-Z0-9][a-zA-Z0-9\- ]{0,10}[a-zA-Z0-9]$/,
  checkZipCodeValidity: function () {
    let zipValue = formController.zipcodeElement.value;
    if (formController.zipcodeElement.validity.tooShort) {
      formController.displayError(
        formController.zipcodeElement,
        "Please enter a valid, longer zipcode"
      );
    } else if (formController.zipcodeElement.validity.tooLong) {
      formController.displayError(
        formController.zipcodeElement,
        "Please enter a shorter zipcode, maximum length is 10 characters"
      );
    } else if (!formController.zipcodeRegExp.test(zipValue)) {
      formController.displayError(
        formController.zipcodeElement,
        "Please enter a valid zipcode"
      );
    } else {
      formController.displayCorrect(formController.zipcodeElement);
    }
  },
  passwordRegex: /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/,
  checkPasswordValidity: function () {
    const results = pwdControls.receivePwd(
      formController.passwordElement.value
    );

    if (results.lengthCheck[0] === false) {
      formController.displayError(
        formController.passwordElement,
        results.lengthCheck[1]
      );
    } else if (results.condition.digitCheck === false) {
      formController.displayError(
        formController.passwordElement,
        "Your password must contain atleast one digit (0-9)"
      );
    } else if (results.condition.caseCheck === false) {
      formController.displayError(
        formController.passwordElement,
        "Your password must contain atleast one lower case character"
      );
    } else if (results.condition.spCharCheck === false) {
      formController.displayError(
        formController.passwordElement,
        "Your password must contain atleast one special character (<. ?!)"
      );
    } else {
      formController.displayCorrect(formController.passwordElement);
      return true;
    }
  },
  checkConfirmPasswordValidity: function () {
    if (
      !(
        formController.passwordElement.value ===
        formController.confirmPasswordElement.value
      )
    ) {
      formController.displayError(
        formController.confirmPasswordElement,
        "The password you have set does not match the password you had entered"
      );
    } else if (!(formController.checkPasswordValidity() === true)) {
      formController.displayError(
        formController.confirmPasswordElement,
        "You need to make sure that the original password is in the correct format"
      );
    } else {
      formController.displayCorrect(formController.confirmPasswordElement);
      return true;
    }
  },
  checkAll: function (e) {
    if (
      formController.checkCountryValidity() &&
      formController.checkZipCodeValidity() &&
      formController.checkEmailValidity() &&
      formController.checkPasswordValidity() &&
      formController.checkConfirmPasswordValidity()
    ) {
      alert("Thank you for submitting the form");
    } else {
      e.preventDefault();
      alert("Please fill in the correct information");
    }
  },
  displayError: function (element, error) {
    element.setAttribute("class", "invalid");
    const elementName = element.getAttribute("id");
    const elementErrorContainer = document.querySelector(
      `.${elementName}-validity`
    );

    elementErrorContainer.textContent = error;
  },
  displayCorrect: function (element) {
    element.setAttribute("class", "valid");
    const elementName = element.getAttribute("id");
    const elementErrorContainer = document.querySelector(
      `.${elementName}-validity`
    );

    elementErrorContainer.textContent = "";
  },
};

Object.values(countryList).forEach((element) => {
  formController.fillSelections(element);
});

formController.initiate();

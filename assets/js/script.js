$(".navTrigger").click(function () {
  $(this).toggleClass("active");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});

// Target date
const targetDate = new Date("2024-02-28T00:00:00");

function updateTimer() {
  const currentDate = new Date();
  const timeRemaining = targetDate - currentDate;

  if (timeRemaining <= 0) {
    document.getElementById("timer").innerHTML = "";
  } else {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `
    <div class="d-flex justify-content-center timer_container">
      <p>${days} <br/> <span>DAYS</span></p>
      <p>${hours}<br/> <span> HOURS</span></p>
      <p>${minutes}<br/> <span>MINUTES</span></p>
      <p>${seconds}<br/> <span> SECONDS</span></p>
      </div>
  `;
  }
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to update the timer
updateTimer();

// form logic
// const openDelegateBtns = document.querySelectorAll(".openDelegateBtn");
// const delegateFormContainer = document.getElementById("delegateFormContainer");
// const closeDelegateBtn = document.getElementById("closeDelegateBtn");

// openDelegateBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     delegateFormContainer.style.display = "block";
//   });
// });

// closeDelegateBtn.addEventListener("click", () => {
//   delegateFormContainer.style.display = "none";
// });

// window.addEventListener("click", (event) => {
//   if (event.target === delegateFormContainer) {
//     delegateFormContainer.style.display = "none";
//   }
// });

// const openSponsorBtns = document.querySelectorAll(".openSponsorBtn");
// const sponsorFormContainer = document.getElementById("sponsorFormContainer");
// const closeSponsorBtn = document.getElementById("closeSponsorBtn");

// openSponsorBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     sponsorFormContainer.style.display = "block";
//   });
// });

// closeSponsorBtn.addEventListener("click", () => {
//   sponsorFormContainer.style.display = "none";
// });

// window.addEventListener("click", (event) => {
//   if (event.target === sponsorFormContainer) {
//     sponsorFormContainer.style.display = "none";
//   }
// });

function sendMail(countryCode) {
  const registrationCode = document.getElementById("registrationCode").value;
  const title = document.getElementById("title").value;
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const jobtitle = document.getElementById("jobtitle").value;
  const companyname = document.getElementById("companyname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const industry = document.getElementById("industry").value;
  const country = document.getElementById("country").value;
  const employees = document.getElementById("employees").value;
  const solutions = document.getElementById("solutions").value;
  const role = document.getElementById("role").value;
  const budget = document.getElementById("budget").value;
  const timing = document.getElementById("timing").value;

  const referee_fullname = document.getElementById("referee_fullname").value;
  const referee_companyname = document.getElementById(
    "referee_companyname"
  ).value;
  const referee_jobtitle = document.getElementById("referee_jobtitle").value;
  const referee_emailid = document.getElementById("referee_emailid").value;
  const referee_phoneno = document.getElementById("referee_phoneno").value;

  const checkbox1 = document.getElementById("my_checkbox1");
  const checkbox2 = document.getElementById("my_checkbox2");
  const checkbox3 = document.getElementById("my_checkbox3");
  const checkbox4 = document.getElementById("my_checkbox4");

  const delegatesCheckbox = document.getElementById("delegate_radio");
  const sponsorsCheckbox = document.getElementById("sponsor_radio");
  const speakersCheckbox = document.getElementById("speaker_radio");
  let typeOfUser;

  if (
    !title ||
    !firstname ||
    !lastname ||
    !jobtitle ||
    !companyname ||
    !email ||
    !phone ||
    !industry ||
    !country ||
    !employees ||
    !solutions ||
    !role ||
    !budget ||
    !timing
    // ... Add conditions for other required fields here ...
  ) {
    if (title === "") {
      alert("Please fill the required field title");
    } else if (firstname === "") {
      alert("Please fill the required field first name");
    } else if (lastname === "") {
      alert("Please fill the required field last name");
    } else if (jobtitle === "") {
      alert("Please fill the required field job title");
    } else if (companyname === "") {
      alert("Please fill the required field company name");
    } else if (email === "") {      
      alert("Please fill the required field email");
    } else if (phone === "") {
      alert("Please fill the required field mobile number");
    } else if (industry === "") {
      alert("Please fill the required field industry");
    } else if (country === null) {
      alert("Please fill the required field country");
    } else if (employees === "") {
      alert("Please fill the required field empoyees");
    } else if (solutions === "") {
      alert("Please fill the required field solution");
    } else if (role === "") {
      alert("Please fill the required field role");
    } else if (budget === "") {
      alert("Please fill the required field budget");
    } else if (timing === "") {
      alert("Please fill the required field timing");
    }

    return; // Exit the function early if any field is empty
  }

  if(email){
    checkMail(email)
  }

  if (
    delegatesCheckbox.checked ||
    sponsorsCheckbox.checked ||
    speakersCheckbox.checked
  ) {
    if (delegatesCheckbox.checked) {
      typeOfUser = delegatesCheckbox.value;
    } else if (sponsorsCheckbox.checked) {
      typeOfUser = sponsorsCheckbox.value;
    } else if (speakersCheckbox.checked) {
      typeOfUser = speakersCheckbox.value;
    }
  } else {
    alert(
      "Please let us know what you looking for Delegate, Sponsor or Speaker"
    );
  }

  if (!checkbox1.checked || !checkbox4.checked) {
    alert("You must select the required checkbox.");
    return;
  }

  // Get the checkbox state message based on whether it's checked or not
  const checkboxState1 = checkbox1.checked
    ? "The checkbox is checked."
    : "The checkbox is not checked.";
  const checkboxState2 = checkbox2.checked
    ? "The checkbox is checked."
    : "The checkbox is not checked.";
  const checkboxState3 = checkbox3.checked
    ? "The checkbox is checked."
    : "The checkbox is not checked.";
  const checkboxState4 = checkbox4.checked
    ? "The checkbox is checked."
    : "The checkbox is not checked.";

  // function handling the data sending to api
  (function sendDataToApi() {
    const apiUrl = "https://omanditsadmin.vercel.app/api/delegate";
    // https://omanditsadmin.vercel.app/api/delegate
    // http://localhost:3000/api/delegate

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers if needed
      },
      body: JSON.stringify({
        name: firstname,
        lastName: lastname,
        email: email,
        jobTitle: jobtitle,
        companyName: companyname,
        phone: phone,
        industry: industry,
        numOfEmployees: employees,
        lookingFor: solutions,
        role: role,
        country: country,
        type: typeOfUser,
        budget,
        timing,
        refName: referee_fullname,
        refCompanyName: referee_companyname,
        refJobTitle: referee_jobtitle,
        refEmail: referee_emailid,
        refPhone: referee_phoneno,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.error){
          const params = {
            registrationCode,
            title,
            firstname,
            lastname,
            jobtitle,
            companyname,
            email,
            phone,
            industry,
            country,
            employees,
            solutions,
            role,
            countryCode,
            typeOfUser,
            budget,
            timing,
            error : data,
            errMsg : data.error, 
  
            referee_fullname,
            referee_companyname,
            referee_jobtitle,
            referee_emailid,
            referee_phoneno,
        
            checkboxState1,
            checkboxState2,
            checkboxState3,
            checkboxState4,
          };
  
          const service = "service_zh5dx4k";
          const template = "template_pjgy813";
      
          emailjs
            .send(service, template, params, "g7A8AmcmomsOelWRo")
            .then((res) => {})
            .catch((error) => {
              alert(error)
            });
        }
      })
      .catch((error) => {
 
        // console.log(error,"ajshkajsdkahghgjasgkjk");
        
        const params = {
          registrationCode,
          title,
          firstname,
          lastname,
          jobtitle,
          companyname,
          email,
          phone,
          industry,
          country,
          employees,
          solutions,
          role,
          countryCode,
          typeOfUser,
          budget,
          timing,
          error : error,
          errMsg : error.error, 

          referee_fullname,
          referee_companyname,
          referee_jobtitle,
          referee_emailid,
          referee_phoneno,
      
          checkboxState1,
          checkboxState2,
          checkboxState3,
          checkboxState4,
        };

        const service = "service_zh5dx4k";
        const template = "template_pjgy813";
    
        emailjs
          .send(service, template, params, "g7A8AmcmomsOelWRo")
          .then((res) => {})
          .catch((error) => {
            alert(error)
          });
      });
  })();

  const params = {
    registrationCode,
    title,
    firstname,
    lastname,
    jobtitle,
    companyname,
    email,
    phone,
    industry,
    country,
    employees,
    solutions,
    role,
    countryCode,
    typeOfUser,
    budget,
    timing,

    referee_fullname,
    referee_companyname,
    referee_jobtitle,
    referee_emailid,
    referee_phoneno,

    checkboxState1,
    checkboxState2,
    checkboxState3,
    checkboxState4,
  };
  const serviceID = "service_vzxb1iq";
  const templateID = "template_neln6bf";

  // const catchServiceID = "service_jjrkcks";
  // const catchTemplateID ="template_m4d4fgu"
  
  // emailjs
  //   .send(catchServiceID, catchTemplateID, params, "PvMR2IPn8ir0VCUQu")
  //   .then((res) => {
  //     console.log("completed");
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   });

  emailjs
    .send(serviceID, templateID, params, "VPj_hs0ZLWpFpOWuX")
    .then((res) => {
      alert(`Thank you for your recent inquiry.We greatly appreciate your interest and the time you've taken to reach out to us.
      Your message has been received, and please consider this communication as confirmation that your application has been successfully submitted.Our event steering committee will diligently evaluate your request and endeavor to provide you with a response within the next 48 hours.
      Should you have any questions, require further information, or wish to discuss any specifics, please don't hesitate to contact us via email at mohammad.afsal@genfinityglobal.com. We're here to assist and address any concerns you may have.
      Thank you once again for considering our event.We look forward to the possibility of collaborating with you.`);
      window.location.href = 'https://omandits.com/'
    })
    .catch((error) => {
      console.log(error)
      alert(error)
    });
}

function checkMail(inp){
  const element = document.getElementById('indicator');
  const newVal = inp.split('@');
  const curr = newVal[1].split('.');
  if(curr[0] === 'gmail'){
    element.innerHTML = "Please enter a business mail id"
    alert("Plase check mail id")
  }else{
    element.innerHTML = " "
  }
}

function sendSpMail(countryCode) {
  const sp_fullname = document.getElementById("sp_fullname").value;
  const sp_company = document.getElementById("sp_company").value;
  const sp_email = document.getElementById("sp_email").value;
  const sp_city = document.getElementById("sp_city").value;
  const sp_jbTitle = document.getElementById("sp_jbTitle").value;
  const sp_mobile = document.getElementById("phone").value;
  const sp_country = document.getElementById("sp_country").value;
  const sp_industry_field = document.getElementById("sp_industry_field").value;

  const whereYouHearAbout_us = document.getElementById(
    "where_did_you_hear_about_us"
  ).value;

  if (
    sp_fullname === "" ||
    sp_company === "" ||
    sp_email === "" ||
    sp_city === "" ||
    sp_jbTitle === "" ||
    sp_mobile === "" ||
    sp_country === "" ||
    sp_industry_field === "" ||
    whereYouHearAbout_us === "" ||
    !isCheckedAtLeastOneCheckbox() ||
    !isCheckIamIntCheckbox() ||
    !isCheckShowMeetCheckbox()
  ) {
    alert(
      "Please fill in the required fields and select at least one checkbox below."
    );
    return; // Exit the function early if any field is empty
  }
  ////////////////////////////////////////////////
  function isCheckedAtLeastOneCheckbox() {
    var checkboxes = document.querySelectorAll('input[name="lineOfBusiness"]');
    var isChecked = false;

    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        isChecked = true;
      }
    });

    return isChecked;
  }

  var checkboxes = document.querySelectorAll('input[name="lineOfBusiness"]');
  var checkedCheckboxes = [];

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      checkedCheckboxes.push(checkbox.value);
    }
  });

  //////////////////////////////////////////////////
  function isCheckIamIntCheckbox() {
    var intcheckboxes = document.querySelectorAll(
      'input[name="iamInterestedIn"]'
    );
    var isIntChecked = false;

    intcheckboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        isIntChecked = true;
      }
    });

    return isIntChecked;
  }
  var int_checkboxes = document.querySelectorAll(
    'input[name="iamInterestedIn"]'
  );
  var int_checkedCheckboxes = [];

  int_checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      int_checkedCheckboxes.push(checkbox.value);
    }
  });

  //////////////////////////////////////////
  function isCheckShowMeetCheckbox() {
    var showMeetcheckboxes = document.querySelectorAll(
      'input[name="showMeet"]'
    );
    var showMeetChecked = false;

    showMeetcheckboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        showMeetChecked = true;
      }
    });

    return showMeetChecked;
  }
  var showMeet_checkboxes = document.querySelectorAll('input[name="showMeet"]');
  var showMeetcheckedCheckboxes = [];

  showMeet_checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      showMeetcheckedCheckboxes.push(checkbox.value);
    }
  });

  const sp_concent = document.getElementById("sp_concent");
  const checkbox_sp_concent = sp_concent.checked
    ? "The checkbox is checked."
    : "The checkbox is not checked.";

  const params = {
    sp_fullname,
    sp_company,
    sp_email,
    sp_city,
    sp_jbTitle,
    sp_mobile,
    sp_country,
    countryCode,
    sp_industry_field,
    whereYouHearAbout_us,
    checkedCheckboxes,
    int_checkedCheckboxes,
    showMeetcheckedCheckboxes,
    checkbox_sp_concent,
  };

  const serviceID = "service_vzxb1iq";
  const templateID = "template_1u22ioy";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert(`Thank you for your recent inquiry.We greatly appreciate your interest and the time you've taken to reach out to us.
      Your message has been received, and please consider this communication as confirmation that your application has been successfully submitted.Our event steering committee will diligently evaluate your request and endeavor to provide you with a response within the next 48 hours.
      Should you have any questions, require further information, or wish to discuss any specifics, please don't hesitate to contact us via email at mohammad.afsal@genfinityglobal.com. We're here to assist and address any concerns you may have.
      Thank you once again for considering our event.We look forward to the possibility of collaborating with you.`);
      window.location.href = "https://omandits.com/";
    })
    .catch((error) => alert(error));
}

// go to top
document.getElementById("back-to-top").addEventListener("click", function () {
  // Scroll to the top of the page when the button is clicked
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional smooth scrolling animation
  });
});

async function speakersSubmit(saveImage) {
  // event.preventDefault();
  const speakerFirstName = document.getElementById("fname").value;
  const speakerSecondName = document.getElementById("lname").value;
  const companyName = document.getElementById("company").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const directLine = document.getElementById("Dline").value;
  const jodTitle = document.getElementById("job_title").value;
  const mobile = document.getElementById("mobile").value;
  const country = document.getElementById("sp_country").value;
  const industry = document.getElementById("sp_industry_field").value;

  const personalBio = document.getElementById("pBio").value;
  const linkedPro = document.getElementById("linkedIn").value;

  const assistantFirstName = document.getElementById("Afname").value;
  const assistantLastName = document.getElementById("Alname").value;
  const assistantEmail = document.getElementById("Aemail").value;
  const assistantDirectLine = document.getElementById("ADline").value;
  const assistantMobile = document.getElementById("Amobile").value;

  const checkboxOne = document.getElementById("sp_concent");
  const checkboxTwo = document.getElementById("sp_concent");
  const checkboxThree = document.getElementById("sp_concent");

  let params = {};

  if (!speakerFirstName) {
    alert("Speaker First Name is required.");
  } else if (!speakerSecondName) {
    alert("Speaker Last Name is required.");
  } else if (!companyName) {
    alert("Company Name is required.");
  } else if (!email) {
    alert("Email is required.");
  } else if (!city) {
    alert("City is required.");
  } else if (!directLine) {
    alert("Direct Line is required.");
  } else if (!jodTitle) {
    alert("Job Title is required.");
  } else if (!mobile) {
    alert("Mobile is required.");
  } else if (!country) {
    alert("Country is required.");
  } else if (!industry) {
    alert("Industry is required.");
  } else if (!personalBio) {
    alert("Personal Bio is required.");
  } else if (!linkedPro) {
    alert("LinkedIn Profile is required.");
  } else if (!assistantFirstName) {
    alert("Assistant First Name is required.");
  } else if (!assistantLastName) {
    alert("Assistant Last Name is required.");
  } else if (!assistantEmail) {
    alert("Assistant Email is required.");
  } else if (!assistantDirectLine) {
    alert("Assistant Direct Line is required.");
  } else if (!assistantMobile) {
    alert("Assistant Mobile is required.");
  } else {
    if (
      !checkboxOne.checked ||
      !checkboxTwo.checked ||
      !checkboxThree.checked
    ) {
      alert("You have fill the check box");
      return;
    }

    const url = await saveImage();

    params = {
      name: speakerFirstName + " " + speakerSecondName,
      companyName,
      email,
      city,
      directLine,
      mobile,
      country,
      industry,
      profileUrl: url[0],
      passportUrl: url[1],
      personalBio,
      linkedPro,
      assistantName: assistantFirstName + " " + assistantLastName,
      assistantEmail,
      assistantDirectLine,
      assistantMobile,
    };

    const serviceID = "service_0vz79hd";
    const templateID = "template_auy92ks";

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        alert(`Thank you for your recent inquiry. We greatly appreciate your interest and the time you've taken to reach out to us.
      Your message has been received, and please consider this communication as confirmation that your application has been successfully submitted. Our event steering committee will diligently evaluate your request and endeavor to provide you with a response within the next 48 hours.
      Should you have any questions, require further information, or wish to discuss any specifics, please don't hesitate to contact us via email at mohammad.afsal@genfinityglobal.com. We're here to assist and address any concerns you may have.
      Thank you once again for considering our event. We look forward to the possibility of collaborating with you.`);
        window.location.href = "https://omandits.com/";
      })
      .catch((error) => alert("Something went wrong" + error));
  }
}

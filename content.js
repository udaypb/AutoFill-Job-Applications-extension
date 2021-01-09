const urls = [["jobs.lever.co", "apply"]];

const autoFillMapping = {
  name: "fullName",
  first_name: "firstName",
  last_name: "lastName",
  email: "email",
  phone: "phone",
  "urls[LinkedIn]": "urls[LinkedIn]",
  "urls[GitHub]": "urls[GitHub]",
  github: "urls[GitHub]",
  linkedin: "urls[LinkedIn]",
};
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("request to apply received..........");

  let currentUrl = $(location).attr("hostname");
  let pathName = $(location).attr("pathname");

  console.log(currentUrl);
  console.log("checking if it is a job application .............");

  //   urls.map((obj) => {
  //     if (
  //       obj[0].toLocaleLowerCase() == currentUrl.toLocaleLowerCase() &&
  //       pathName.includes(obj[1])
  //     ) {
  //       console.log(
  //         "yes it is a job applicatoin .....  proceeding with auto fill"
  //       );

  //       autoFill();
  //     }
  //   });

  autoFill();
});

function autoFill() {
  //loop through all input fields to autofill [type=text]
  $("input[type=text]").each(function () {
    let fieldName = $(this).attr("name");
    let keyname = autoFillMapping[fieldName];
    console.log("input name is ", fieldName);
    if (candidateInfo[keyname] != null) {
      console.log("found data for ", keyname);
      let data = candidateInfo[keyname];
      $(this).val(data);
    }
  });
  //loop through all input fields to autofill [type=email]
  $("input[type=email]").each(function () {
    let fieldName = $(this).attr("name");
    let keyname = autoFillMapping[fieldName];
    console.log("input name is ", fieldName);
    if (candidateInfo[keyname] != null) {
      console.log("found data for ", keyname);
      let data = candidateInfo[keyname];
      $(this).val(data);
    }
  });

  //resume upload checks:

  //1: search for a input with type file and "resume" in its attribute name:
  let resumeElementByName = $("input[type=file][name*='resume']");
  let singleUploadElement = $("input[type=file]");

  if (resumeElement) {
    console.log("Found resume upload button ! .....");
    console.log(resumeElement);
  } else if (singleUploadElement.length == 1) {
    console.log("Found resume upload button ! .....");
  } else {
    let toSearch = ["span[class=text]", "p", "label"];
  }
}

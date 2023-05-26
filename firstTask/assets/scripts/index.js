$('#microphone-button').on("click", function () {
  runSpeechRecog = () => {
    $("entry").val("Loading text...");
    var output = document.getElementById('entry');
    // var action = document.getElementById('action');
    let recognization = new webkitSpeechRecognition();
    recognization.onstart = () => {
      output.innerHTML = "Listening...";
    }
    recognization.onresult = (e) => {
      output.innerHTML = e.results[0][0].transcript;
    }
    recognization.start();
  }
})





// noinspection JSUnresolvedReference
$("#convert-button").on("click", function () {
  // noinspection JSUnresolvedReference
  let input = $("#entry").val();
  conversion(input)
});
  
function conversion (input){
  // const instructions = 'These are the instructions:' +
  //     '1. Create spreadsheet formula based on user input' +
  //     '2. Say "What formula do you want me to generate?" when user input cannot be converted to formula'
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://api.openai.com/v1/completions",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`,
    },
    processData: false,
    data: JSON.stringify({
      model: "text-davinci-003",
      prompt: `Correct this to excel formulas:\n\n.${input}`,
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      // instructions: `${instructions}`,
      // messages: {
      //   0: {"prompt": "Add A1 to A9", "completion": "=SUM(A1:A9)"},
      //   1: {
      //     "prompt": "This is not a text to formula",
      //     "completion": "Please enter a statement you want converted to a spreadsheet formula"
      //   },
      //   2: {
      //     "prompt": "My name is Dave",
      //     "completion": "Please enter a statement you want converted to a spreadsheet formula"
      //   }
      // },
    })
  };

  $.ajax(settings).done(function(response) {
    console.log(response);
    $("#result").val(response.choices[0].text);
  });
}


// const settings = {
//   async: true,
//   crossDomain: true,
//   url: "https://api.openai.com/v1/completions",
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer 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`,
//   },
//   processData: false,
//   data: JSON.stringify({
//     model: "text-davinci-003",
//     prompt: `Correct this to standard English:\n\n${}.`,
//     temperature: 0,
//     max_tokens: 60,
//     top_p: 1.0,
//     frequency_penalty: 0.0,
//     presence_penalty: 0.0,
//   }),
// };
//
// $.ajax(settings).done(function(response) {
//     console.log(response);
// });


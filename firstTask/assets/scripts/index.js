const key = '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'
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
    // url: ,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
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
    })
  };

  $.ajax("https://api.openai.com/v1/completions", settings).done(function(response) {
    console.log(response);
    $("#result").val(response.choices[0].text);
  });
}

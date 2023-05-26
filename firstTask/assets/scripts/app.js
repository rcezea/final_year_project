



const settings = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer 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`
    },
    body: JSON.stringify({
        model: "text-davinci-003",
        prompt: "Correct this to standard English:\n\nShe no went to the market.",
        temperature: 0,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0
    })
};

fetch('https://api.openai.com/v1/completions', settings)
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

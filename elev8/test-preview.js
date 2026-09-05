fetch("http://localhost:3000/api/builder/preview", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ artifact: { personalInformation: {}, experience: [] }, template: "academic-cv-lite" })
}).then(res => res.text().then(text => console.log(res.status, text))).catch(console.error);

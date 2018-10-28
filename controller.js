//initialisieren der Variablen
let trainedNet;

//Aufbereiten und zerteilen der Sätze (strings)
function encode(arg) {
  return arg.split("").map(x => x.charCodeAt(0) / 256);
}

//Einlesen und verarbeiten der Trainingsdaten
function processTrainingData(data) {
  return data.map(d => {
    return {
      input: encode(d.input),
      output: d.output
    };
  });
}

//Funktion zum Trainieren des neuronalen Netzes
function train(data) {
  let net = new brain.NeuralNetwork();
  net.train(processTrainingData(data));
  trainedNet = net.toFunction();
  console.log("Netzwerk trainiert");
}

//Auswertung des Resultats und Vergleich
function execute(input) {
  let results = trainedNet(encode(input));
  //Ausgabe der absoluten Werte in der Konsole
  console.log("Aktueller Tweet: " + input);
  console.log(results);
  let output;
  let certainty;

  //Vergleich beider Endwahrscheinlichkeiten
  if (results.trump > results.nature) {
    output = "Trump";
    //Abrunden der Trefferwahrscheinlichkeit
    certainty = Math.floor(results.trump * 100);
  } else {
    output = "Nature";
    certainty = Math.floor(results.nature * 100);
  }

  //Ausgabe des Resultats als Text in der Konsole des Browsers
  return (
    "Ich bin mir zu " +
    certainty +
    "% sicher 🤓 ! Dieser Tweet ist von: " +
    output +
    " 🎉"
  );
}

//Ausführen der train() Methode mit den passenden Daten zum trainieren des Netzwerks
train(tweetData);
//Darstellen und ausführen des zu testenden Tweets
console.log(
  execute(
    "Comment: “We are a great Sovereign Nation. We have Strong Borders and will never accept people coming into our Country illegally!"
  )
);

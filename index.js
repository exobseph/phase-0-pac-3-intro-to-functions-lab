function shout(string) {
    return string.toUpperCase();
  }
function whisper(string) {
    return string.toLowerCase();
  }
function logShout(string) {
    console.log(string.toUpperCase( ));
  }

function logWhisper(string) {
    console.log(string.toLowerCase( ));
  }
  function sayHiToHeadphonedRoommate (string) {
    var cantUnswer = "I can't hear you!";
    var yesUnswer = "YES INDEED!";
    var lovUnswer = "Let's have dinner together!";
    var Unswer = "I would love to!"
    if (string.toLowerCase(string) === string) {
      return cantUnswer;
    }
    else if (string.toUpperCase(string) === string) {
      return yesUnswer;
    }
    else if (string === "Let's have dinner together!") {
      return Unswer;
    }
  }

  const string = "Hello!";

console.log(string);
console.log(string.toUpperCase());
console.log(string.toLowerCase());

console.log(string === string.toUpperCase());
console.log(string === string.toUpperCase());
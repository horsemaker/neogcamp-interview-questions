// Create a CLI app which would detect fake news. This app will take news as input and then source. If source is Facebook or whatsapp then it will output user saying, "Don't believe things on FB and Whatsapp". Can you extend this to include telegram as well?

var readlineSync = require('readline-sync')

readlineSync.question('Please enter the news: ')
var source = readlineSync.question(
  'Please enter the source (Facebook, WhatsApp, Telegram, Others): '
)

function checkAuthenticity() {
  var sourceUpperCase = source.toUpperCase()

  if (
    sourceUpperCase === 'FACEBOOK' ||
    sourceUpperCase === 'WHATSAPP' ||
    sourceUpperCase === 'TELEGRAM' ||
    sourceUpperCase === 'FB' ||
    sourceUpperCase === 'TG'
  ) {
    console.log("Don't belive things on FB, WhatsApp or Telegram!")
  } else {
    console.log('Legit NEWS!!!')
  }
}

checkAuthenticity()

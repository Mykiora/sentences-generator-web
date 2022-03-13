var sentence = ''
var h1 = document.querySelector('h1')
var pronouns = ["I", "You", "He", "She", "It", "We", "They"]
var verbs = ["eat", "drink", "beat", "feel", "like", "love", "want", "have", "do", "say", "get", "make", "know", "think", "take", "see", "use", "find", "give", "tell", "work", "call", "need", "become", "leave", "put", "keep", "let", "begin", "help", "show", "hear", "run", "move", "live", "believe", "hold", "bring", "provide", "sit", "stand", "lose", "pay", "meet", "include", "understand", "watch", "follow", "stop", "create", "win", "offer", "buy", "build", "kill", "sell"]
var pastVerbs = ["ate", "drank", "beat", "felt", "liked", "loved", "wanted", "had", "said", "got", "made", "knew", "thought", "took", "saw", "used", "found", "gave", "told", "worked", "called", "needed", "became", "left", "put", "kept", "let", "began", "helped", "showed", "heard", "ran", "moved", "lived", "believed", "held", "sat", "standed", "lost", "paid", "met", "included", "understood", "watched", "followed", "stopped", "created", "won", "offered", "bought", "built", "killed", "sold"]
var articles = ["a", "the"]
var adjectives = ["big", "small", "great", "false", "damn", "bad", "good", "hot", "cold", "outstanding", "agreeable", "adorable", "adventurous", "aggressive", "alert", "alive", "amused", "angry", "annoying", "average", "arrogant", "attractive", "awful", "beautiful", "black", "bewildered", "better", "blue-eyed", "calm", "clever", "cloudy", "crazy", "creepy", "dead", "delightful", "determined", "different", "difficult", "disgusted", "excited", "expensive", "envious", "evil", "energetic", "fancy", "funny", "gentle", "innocent", "lazy", "mysterious", "nasty", "magnificent", "odd", "pleasant", "powerful", "precious", "putrid", "real", "shiny", "sparkling", "strange", "super", "tasty", "ugly", "wild"]
var adverbs = ["usually", "frequently", "badly", "barely", "thoroughly", "initially", "extremely", "greatly", "only", "quickly", "clearly", "suddenly", "eventually", "unfortunately", "fortunately", "maliciously"]
var nouns = ["cat", "dog", "boy", "girl", "car", "bottle", "table", "chair", "bed", "life", "keyboard", "edge", "time", "year", "day", "man", "thing", "woman", "world", "way", "government", "house", "business", "night", "state", "fact", "school", "information", "party", "water", "family", "hand", "head", "area", "order", "week", "problem", "war", "police", "power", "office", "body", "book", "society", "city", "God", "father", "mother", "brother", "sister", "job", "woman", "act", "evidence", "church", "morning", "evening", "breakfast", "land", "language", "class", "paper", "toilet paper", "wife", "husband", "president", "king", "tax", "queen", "princess", "prince", "knowledge", "computer", "heart", "letter", "theory", "space", "cup", "scheme", "technology", "country", "village", "garden", "science", "religion", "doctor", "window", "door", "mouse", "competition", "software", "daugther", "son", "purpose", "respect", "machine", "penis", "vagina", "wedding", "image", "network"]
var complements = ["in the house", "with me", "around the world", "in my room", "for a friend", "because I wanted to", "inside the box", "in the hangar", "since nobody else would do it", "and I hope it will make me famous", "and I loved that", "I'm afraid"]
var arrayLoop = [pronouns, verbs, adverbs, articles, adjectives, nouns, complements]

// Functions

function clearAll() {
    let buttons = document.querySelectorAll('input')
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].checked) {
            buttons[i].checked = false
            arrayLoop.splice(1, 1, verbs)
        }
    }
}

function makeSentence(randomWordsArray) {
    console.log(randomWordsArray)

    state = ''
    buttons = [document.querySelector('.include-adverbs'), document.querySelector('.include-adjectives'), document.querySelector('.include-complements')]

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].checked) {
            state += '1'
        }
        else {
            state += '0'
        }
    }

    console.log(state)

    switch(state) {
        case '000':
            randomWordsArray.splice(2, 1)
            randomWordsArray.splice(3, 1)
            randomWordsArray.splice(4, 1)
            console.log(randomWordsArray)
            break;
        case '100':
            randomWordsArray.splice(4, 1)
            randomWordsArray.splice(-1, 1)
            break;
        case '110':
            randomWordsArray.splice(-1, 1)
            break;
        case '101':
            randomWordsArray.splice(4, 1)
            break;
        case '011':
            randomWordsArray.splice(2, 1)
            break;
        case '010': 
            randomWordsArray.splice(2, 1)
            randomWordsArray.splice(-1, 1)
            break;
        case '001':
            randomWordsArray.splice(2, 1)
            randomWordsArray.splice(3, 1)
            break;
    }

    // default randomWordsArray : [pronouns, verbs, adverbs, articles, adjectives, nouns, complements]

    if (document.querySelector('.past-verbs').checked === false) {
        if (randomWordsArray[0] === 'He' || randomWordsArray[0] === 'She' || randomWordsArray[0] === 'It') {
            if (!document.querySelector('.future-verbs').checked && !document.querySelector('.past-verbs').checked) {
                switch(randomWordsArray[1]) {
                    case 'have':
                        randomWordsArray[1] = 'ha'
                        break;
                    case 'do': 
                        randomWordsArray[1] = 'doe'
                    case 'watch':
                        randomWordsArray[1] = 'watche'
                    default:
                        randomWordsArray[1] += 's'
                }
            }
        }
}

    if (document.querySelector('.future-verbs').checked) {
        let verb = randomWordsArray[1]

        randomWordsArray[1] = "will " + verb
    }


    let vowels = ['a', 'e', 'i', 'o', 'u']
    let articlePosition = 0

    if (document.querySelector('.include-adverbs').checked) {
        articlePosition = 3
    }

    else {
        articlePosition = 2
    }

    if (vowels.includes(randomWordsArray[articlePosition+1][0]) && randomWordsArray[articlePosition] == 'a') {
        randomWordsArray[articlePosition] += 'n'
    }
    sentence = randomWordsArray.join(' ')
    return sentence
}

function pickRandomWords() {
    let randomWords = []

    for (let i = 0; i < arrayLoop.length; i++) {
        let randomNumber = Math.floor(Math.random() * arrayLoop[i].length)
        randomWords.push(arrayLoop[i][randomNumber])
    }
    return randomWords
}

function modifySentence() {

    if (document.querySelector('.future-verbs').checked) {
        arrayLoop.splice(1, 1, verbs)
    }

    if (document.querySelector('.past-verbs').checked) {
        arrayLoop.splice(1, 1, pastVerbs)
    }

    h1.innerText = makeSentence(pickRandomWords())
}




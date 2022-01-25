function smartPrompt(question) {
    var output = null
    while(output === null || output.trim().length < 1) {
        output = prompt(question)
    }
    return output.trim()
}
  
function getAction(question, actionList) { 
    // Here we give a list of possible actions and retry until the user provides a valid response
    let answer = null
    while (!actionList.includes(answer)) {
        answer = smartPrompt(question + " - possible actions: " + actionList.join(", ")) // Here we convert the list to a string by joining all of its contents with a comma and a space
    }
    return answer
}
  
  //////////
  // INFO //
  //////////
  // If you get stuck or want to learn how to do more things consider checking out the resources section https://l1lith.github.io/Intro-Coding-Concepts#resources
  // Also, don't be afraid to google it!
  ///////////
  
var name = smartPrompt("What is your name adventurer?")

alert("You wake up on a strange beach. '" + name + "' is written on the inside of your shirt.")

while (true) { // We trap the user in this loop until they leave the beach
    const nextAction = getAction("What would you like to do?", ["wait", "explore the beach", "leave the beach"]) // Lists are surrounded by square brackets and separated by commas

    if (nextAction === "wait") {
        alert("You wait around. The barking of the gulls and the lapping of the ocean lulls you into a deep sleep")
    } else if (nextAction === "explore the beach") {
        alert("You find a large Oyster shell. Years of bombardment by the waves has left it brittle and chipped, but it's curves are still beautiful and pearlescent")
    } else if (nextAction === "leave the beach") { // the only remaining option is to leave the beach so we assume that
        break // The break keyword exits us out of the current loop
    }
}


const direction = getAction("As you leave the beach you reach the edge of a divide between a dark forest and a giant cave in the side of the mountain. Which way would you like to go?", ["enter the forest", "enter the cave", "return to the beach"])

// TODO: Continue the adventure :)
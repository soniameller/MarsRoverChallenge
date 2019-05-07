var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
}

function turnLeft(rover){
  switch (rover.direction) {

    case "N":
      rover.direction ="W"
      break;

    case "W":
      rover.direction="S"
      break;
    
    case "S":
      rover.direction = "E"
      break;
  
    case "E":
      rover.direction= "N"
      break;
  };
  console.log("turnLeft was called!");
  console.log (rover);
}

function turnRight(rover){
  switch (rover.direction) {

    case "N":
      rover.direction ="E"
      break;
    
    case "W":
      rover.direction="N"
      break;
    
    case "S":
      rover.direction = "W"
      break;
  
    case "E":
      rover.direction= "S"
      break;
  };
  console.log("turnRight was called!");
  console.log (rover);
}

function moveForward(rover){
  rover.travelLog.push ("x="+rover.x+ " y="+ rover.y);//cant push them one by one
  switch (rover.direction) {

    case "N":
      rover.y -= 1
      break;
    
    case "W":
      rover.x -=1
      break;
    
    case "S":
      rover.y += 1
      break;
  
    case "E":
      rover.x += 1
      break;
  };
  console.log("moveForward was called");
  console.log (rover);
}

function listOfComands (text){
  for (var i=0; i<text.length; i++){
    if (text.charAt(i) ==="r") {
      turnRight (rover);
    }
    else if (text.charAt(i)==="l"){
      turnLeft (rover);
    }
    else if (text.charAt(i)==="f"){
      moveForward (rover);
    }
    else {
      console.log ("invalid Comand"); 
    }
  }
  console.log ("Mars Rover tracking="+rover.travelLog);
}

listOfComands ("rffrfflfrffs");

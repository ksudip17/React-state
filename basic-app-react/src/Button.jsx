function handleOver() {
    console.log("Hover");
}

function printBye() {
    console.log("Muji");
}


function dblClick() {
    alert("You double clicked the button");
}


export default function Button () {
    return(
      <div>
        <button onMouseOver={handleOver}>Hover on Me</button>
        <p onMouseOver={printBye}>hover over me to see Muji</p>
      </div>
    ); 
  }
const gameboard = document.getElementById("gameboard");
const message_panel = document.getElementById("message_panel");
var turno = Math.floor(Math.random() * 2);
var maximo = turno + 8;
var game_going = true;
var blocks = new Array(9);

function starting() {
    for (let i = 0; i < 3; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 3; j++)
        {
            let blahblah = i*3+j;
            let cell = document.createElement("td");
            blocks[blahblah] = document.createElement("input");
            blocks[blahblah].setAttribute("type", "button");
            blocks[blahblah].setAttribute("value", " ");
            blocks[blahblah].addEventListener("click", function () {

                //---------------------------------------------------------------
                if (this.value == " " && game_going) {
                    if (this.value == " ") {
                        switch (turno % 2) {
                            case 0:
                                this.setAttribute("value", "X");
                                break;
                        
                            case 1:
                                this.setAttribute("value", "O");
                                break;
                        
                            default:
                                message_panel.innerHTML = "ERRORE NELLO SWITCH del click iniziale";
                            break;
                        }
                    }
                    if(checkerito(turno)) {
                        game_going = false;
                        switch (turno % 2) {
                            case 0:
                                message_panel.innerHTML = "Ha vinto CROCE (X)";
                                break;
                        
                            case 1:
                                message_panel.innerHTML = "Ha vinto CERCHIO (O)";
                                break;
                        
                            default:
                                message_panel.innerHTML = "ERRORE NELLO SWITCH IN CORSO";
                            break;
                        }
                        message_panel.setAttribute("id", "finalee");
                    }
                    else if(turno >= maximo) {
                        game_going = false;
                        message_panel.innerHTML = "PAREGGIO!";
                        message_panel.setAttribute("id", "finalee");
                    }

                    if(game_going)
                    {
                        turno++;
                        messaggino();
                    }
                }
                //---------------------------------------------------------------

            });
            blocks[blahblah].setAttribute("id", blahblah);
            cell.appendChild(blocks[blahblah]);
            row.appendChild(cell);
        }
        gameboard.appendChild(row);
    }
    messaggino();
}

function messaggino() {
    switch (turno % 2) {
        case 0:
            message_panel.innerHTML = "Tocca a CROCE (X)";
            break;
    
        case 1:
            message_panel.innerHTML = "Tocca a CERCHIO (O)";
            break;
    
        default:
            message_panel.innerHTML = "ERRORE NELLO SWITCH 1";
        break;
    }
}

function checkerito(turno) {
    let ezza = " ";
    if (turno % 2 == 0) {
        ezza = "X";
    } else {
        ezza = "O";
    }

    if (
        ((blocks[0].value == ezza)&&(blocks[0].value == blocks[1].value)&&(blocks[1].value==blocks[2].value))||
        ((blocks[3].value == ezza)&&(blocks[3].value == blocks[4].value)&&(blocks[4].value==blocks[5].value))||
        ((blocks[6].value == ezza)&&(blocks[6].value == blocks[7].value)&&(blocks[7].value==blocks[8].value))||
        ((blocks[0].value == ezza)&&(blocks[0].value == blocks[3].value)&&(blocks[3].value==blocks[6].value))||
        ((blocks[1].value == ezza)&&(blocks[1].value == blocks[4].value)&&(blocks[4].value==blocks[7].value))||
        ((blocks[2].value == ezza)&&(blocks[2].value == blocks[5].value)&&(blocks[5].value==blocks[8].value))||
        ((blocks[0].value == ezza)&&(blocks[0].value == blocks[4].value)&&(blocks[4].value==blocks[8].value))||
        ((blocks[6].value == ezza)&&(blocks[6].value == blocks[4].value)&&(blocks[4].value==blocks[2].value))
    ) {
        return true;
    }
    else {
        return false;
    }
}
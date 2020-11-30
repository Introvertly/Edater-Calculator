// Edater Calculator
let username = document.getElementById('name');

document.getElementById('button').addEventListener('click', calculate)

function calculate() {
    let username = document.getElementById('name').value;
    document.getElementById('results').innerHTML = edaterCalc(username);
}

function edaterCalc(input) {
    if (input.toLowerCase() == 'stopntime' || input.toLowerCase() == 'stopi') {
        return '100% edater get a life LLLL nice 5 fkdr noob';
    } else if (input.toLowerCase().toLowerCase() == 'introvertly' || input.toLowerCase() == 'intro') {
            return 'Creator of this page, automatic 0% edater <3';
        } else if (input.toLowerCase() == 'oxyde' || input.toLowerCase() == 'oxy') {
          return 'Coolest admin ww, automatic 0% edater';
        } else if (input.toLowerCase() == 'preadolescence' || input.toLowerCase() == 'pre') {
            return 'Owner of NPWS (best guild), likes pokemon music a lot and skyblock coins, but also jerked off to Lcne. Overall 70% edater';
        } else if (input.toLowerCase() == 'snowycloo') {
            return 'Also great coder, owner of the CocoaBot, best bot ww! 0% edater.';
        } else if (input.toLowerCase() == 'opmine'|| input.toLowerCase() == 'david') {
            return 'Rando lb player that may or may not be a furry due to his love of Eevees. Overall 60.5% edater.';
        } else if (input.toLowerCase() == 'npws') {
            return 'NPWS OP BEST GUILD WW';
        } else if (input.toLowerCase() == 'inurn') {
            return 'weirdo sniper 50% edater';
        } else if (input.toLowerCase() == 'mazye') {
                   return 'Cool admin but i heard he got shipped with waving. 40% edater';
        } else if (input.toLowerCase() == 'undaunt') {
            return "Novo user, stopi's ebf, and a bridge and ranked bw main? 100% edater.";
        } else {
        return `You are ${randomInt(0, 100)}% edater.`;
    }
}

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}


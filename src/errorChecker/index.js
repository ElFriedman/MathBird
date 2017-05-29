const tokenize = require("./tokenizer");
const expression = '(x)=(1)';
const problemType = 'SOLVE'
var leftParens = 0;
var rightParens = 0;
var equalSign = 0;


function firstToken(token) {
  const type = token.type;
  const value = token.value;
  if (type == 'Literal') {
    return true;
  } else if (type == 'Variable') {
    return true;
  } else if (type == 'Left Parenthesis') {
    leftParens++;
    if (rightParens > leftParens) {
      //Return problem error here
      return false;
    }
    return true;
  } else if (type == 'Right Parenthesis') {
    //Return problem error here
    return false;
  } else if (type == 'Operator') {
    if (value == '+' || value == '-') {
      return true;
    } else {
      //Return problem error here
      return false;
    }
  } else if (type == 'Function') {
    return true;
  } else {
    //Return problem error here
    return false;
  }
}


function postLiteral(token) {
  const type = token.type;
  const value = token.value;
  if (type == 'Literal') {
    //Return problem error here
    return false;
  } else if (type == 'Variable') {
    return true;
  } else if (type == 'Left Parenthesis') {
    leftParens++;
    return true;
  } else if (type == 'Right Parenthesis') {
    rightParens++;
    if (rightParens > leftParens) {
      //Return problem error here
      return false;
    }
    return true;
  } else if (type == 'Operator') {
    return true;
  } else if (type == 'Function') {
    return true;
  } else {
    //Return problem error here
    return false;
  }
}


function postVariable(token) {
  const type = token.type;
  const value = token.value;
  if (type == 'Literal') {
    return true;
  } else if (type == 'Variable') {
    return true;
  } else if (type == 'Left Parenthesis') {
    leftParens;
    return true;
  } else if (type == 'Right Parenthesis') {
    rightParens++;
    if (rightParens > leftParens) {
      //Return problem error here
      return false;
    }
    return true;
  } else if (type == 'Operator') {
    return true;
  } else if (type == 'Function') {
    return true;
  } else {
    //Return problem error here
    return false;
  }
}

function postLeftParens(token) {
  const type = token.type;
  const value = token.value;
  if (type == 'Literal') {
    return true;
  } else if (type == 'Variable') {
    return true;
  } else if (type == 'Left Parenthesis') {
    leftParens++;
    return true;
  } else if (type == 'Right Parenthesis') {
    //Return problem error here
    return false;
  } else if (type == 'Operator') {
    if (value == '+' || value == '-') {
      return true;
    } else {
      //Return problem error here
      return false;
    }
  } else if (type == 'Function') {
    return true;
  } else {
    //Return problem error here
    return false;
  }
}


function postRightParens(token) {
  const type = token.type;
  const value = token.value;
  if (type == 'Literal') {
    return true;
  } else if (type == 'Variable') {
    return true;
  } else if (type == 'Left Parenthesis') {
    leftParens++;
    return true;
  } else if (type == 'Right Parenthesis') {
    rightParens++;
    if (rightParens > leftParens) {
      //Return problem error here
      return false;
    }
    return true;
  } else if (type == 'Operator') {
    return true;
  } else if (type == 'Function') {
    return true;
  } else {
    //Return problem error here
    return false;
  }
}


function postFunction(token) {
  const type = token.type;
  const value = token.value;
  if (type == 'Literal') {
    //Return problem error here
    return false;
  } else if (type == 'Variable') {
    //Return problem error here{
    return false;
  } else if (type == 'Left Parenthesis') {
    leftParens++;
    return true;
  } else if (type == 'Right Parenthesis') {
    //Return problem error here
    return false;
  } else if (type == 'Operator') {
    //Return problem error here
    return false;
  } else if (type == 'Function') {
    //Return problem error here
    return false;
  } else {
    //Return problem error here
    return false;
  }
}


function postPlusOrMinus(token) {
  const type = token.type;
  const value = token.value;
  if (type == 'Literal') {
    return true;
  } else if (type == 'Variable') {
    return true;
  } else if (type == 'Left Parenthesis') {
    return true;
  } else if (type == 'Right Parenthesis') {
    //Return problem error here
    return false;
  } else if (type == 'Operator') {
    if (value == '+' || value == '-') {
      return true;
    } else {
      //Return problem error here
      return false;
    }
  } else if (type == 'Function') {
    return true;
  } else {
    //Return problem error here
    return false;
  }
}


function isValid(problem, probType) {
  tokens = tokenize(problem);
  console.log(tokens);
  for (let i in tokens) {
    const token = tokens[i];
    if (i == 0) {
      if (!firstToken(token)) {
        return false;
      }
    } else if (tokens[i - 1].type == 'Literal') {
      if (!postLiteral(token)) {
        return false;
      }
    } else if (tokens[i - 1].type == 'Variable') {
      if (!postVariable(token)) {
        return false;
      }
    } else if (tokens[i - 1].type == 'Left Parenthesis') {
      if (!postLeftParens(token)) {
        return false;
      }
    } else if (tokens[i - 1].type == 'Right Parenthesis') {
      if (!postRightParens(token)) {
        return false;
      }
    } else if (tokens[i - 1].type == 'Function') {
      if (!postFunction(token)) {
        return false;
      }
    } else if (tokens[i - 1].type == 'Operator') {
      if (tokens[i - 1].value == '+' || tokens[i - 1].value == '-') {
        if (!postPlusOrMinus(token)) {
          return false;
        }
      } else if (tokens[i - 1].value == '=') {
        if (probType == 'SIMPLIFY') {
          //Return problem error here
          return false;
        } else {
          if (equalSign == 0) {
            equalSign++;
            if (rightParens > leftParens) {
              //Return problem error here
              return false;
            } else {
              rightParens = 0;
              leftParens = 0;
            }
            if (!firstToken(token)) {
              return false;
            }
          } else {
            //Return problem error here
            return false;
          }
        }
      }
    }
  }
  return true;
}

module.exports = isValid;

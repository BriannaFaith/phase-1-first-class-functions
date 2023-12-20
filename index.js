function rootFunction(){

}
function functionA(){

}
function functionB(){

}

function receivesAFunction(spy){
spy();
}

function returnsANamedFunction() {
    return function namedFunction() {

    };
  }

  function returnsAnAnonymousFunction() {
    return function() {

    };
  }
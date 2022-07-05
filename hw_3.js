//ex.1
const text = 'true';
const or = false;
const numbers = 17;
const defy = undefined;
const nothing = null;
console.log(typeof text);
console.log(typeof or);
console.log(typeof numbers);
console.log(typeof defy);
console.log(typeof nothing);

//ex.2
const height = 15;
const width = 20;
console.log(height && width);

//ex.3
for (let i = 0; i <= 20; ++i){
    if (i%3 === 0) {console.log(i);}
}



const key = true;
    const documents = true;
    const pen = true;
    const apple = false;
    const orange = true;

    if (key && documents && pen && (apple || orange)) {
        console.log(shouldGoToWork);
      } else {
        console.log(stayHome);
      }




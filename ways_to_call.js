function Cat() {
    this.name = 'Markov';
    this.age = 3;
}

function Dog() {
    this.name = 'Noodles';
    this.age = 4;
}

Dog.prototype.chase = function(cat) {
    console.log(`My name is ${this.name} and I'm chasing ${cat.name}!`);
}

const Markov = new Cat();
const Noodles = new Dog();

// calling chase method style:
Noodles.chase(Markov); // this is automatically set to noodles

Noodles.chase.call(Markov, Noodles);

Noodles.chase.apply(Markov, [Noodles]);
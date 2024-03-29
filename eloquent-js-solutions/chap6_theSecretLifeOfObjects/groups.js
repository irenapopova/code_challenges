function checkForValueInArray(value, array) {
    return array.indexOf(value) !== -1;
}

class Group {
    constructor() {
        this.state = [];
    }
    add(value) {
        if (!checkForValueInArray(value, this.state)) this.state.push(value);
    }
    delete(value) {
        if (checkForValueInArray(value, this.state))
            this.state.splice(this.state.indexOf(value), 1);
    }
    has(value) {
        return checkForValueInArray(value, this.state);
    }
    static from(iterableObject) {
        const newGroup = new Group();
        iterableObject.forEach(value => newGroup.add(value));
        return newGroup;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

exports.Group = Group;

/*

Solution :

class Group {
    constructor() {
        this.members = [];
    }

    add(value) {
        if (!this.has(value)) {
            this.members.push(value);
        }
    }

    delete(value) {
        this.members = this.members.filter(v => v !== value);
    }

    has(value) {
        return this.members.includes(value);
    }

    static from(collection) {
        let group = new Group();
        for (let value of collection) {
            group.add(value);
        }
        return group;
    }
}

*/

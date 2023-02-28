class Linkedlist {
    length = 0;
    head;

    append(val) {
        // add node to end of the list
        let newNode = new Node(val);
        let node = this.head;

        if(this.length === 0) {
            this.length = 1;
            this.head = newNode;
        } else {
            
            while(node.next !== null) {
                node = node.next;
            }
    
            node.next = newNode;
            this.length++;
        }

    }
    
    prepend(val) {
        // add node to start of the list
        let node = new Node(val);
        if(this.length === 0) {
            this.length = 1;
            this.head = node;
        }

        node.next = this.head;
        this.head = node;
        this.length++;
    }
    
    size() {
        // total number of elements in list
        return this.length;
    }
    
    head() {
        // return first node in the list
        return this.head;
    }
    
    tail() {
        // return last node in the list
        let node = this.head;
        while(node.next !== null) {
            node = node.next;
        }

        return node;
    }
    
    at(index) {
        // return node at specified index
        let node = this.head;
        for(let i = index; i>=0; i--) {
            if(i == 0) {
                return node;
            }
            node = node.next;
        }

        return null;
    }
    
    pop() {
        // removes last element from the list
        let node = this.head;
        while(node.next.next !== null) {
            node = node.next;
        }

        node.next = null;
    }
    
    contains(val) {
        // return true is passed value exists in list
        let node = this.head; 

        while(node !== null) {
            if(node.val === val) {
                return true;
            }

            node = node.next;
        }

        return false;
    }
    
    find(val) {
        // return index of node if exists otherwise null
        let count = 0;
        let node = this.head;
        while(node !== null) {
            if(node.val === val) {
                return count;
            }
            node = node.next;
            count ++;
        }

        return null;
    }
    
    toString() {
        // return list in string format 
        // ( value ) -> ( value ) -> ( value ) -> null
        let node = this.head;
        let linkedListArr = []
        
        while(node !== null) {
            linkedListArr.push(node.val);
            node = node.next;
        }

        linkedListArr.push("null")
        let linkedListStr = linkedListArr.join(" -> ");

        return linkedListStr;
    }
    
    insertAt(val, index) {
        // insert node at provided index
        let newNode = new Node(val);
        let node = this.head
        for(let i = index; i>=0; i--) {
            if(i === 1) {
                break;
            }
            node = node.next;
        }

        newNode.next = node.next;
        node.next = newNode;
    }
    
    removeAt(index) {
        // removes node from specified index
        let node = this.head
        for(let i = index; i>=0; i--) {
            if(i === 1) {
                break;
            }
            node = node.next;
        }
        
        node.next = node.next.next;
    }
    
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// console.log("hey");
let firstll = new Linkedlist;

firstll.append(5);
firstll.prepend(2);
firstll.append(7);
firstll.insertAt(3, 1);
firstll.removeAt(1);

console.log(firstll.toString());
console.log(firstll.contains(2));
console.log(firstll.size());
console.log(firstll.find(5));
console.log(firstll.tail());
console.log(firstll.at(0))
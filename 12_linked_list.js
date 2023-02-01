class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
    }

    addNode(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.size += 1;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            this.size += 1;
        }
    }

    deleteNode(value) {
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size -= 1;
        } else {
            let current = this.head;
            while (current.next) {
                if (current.next.value === value) {
                    current.next = current.next.next;
                    this.size -= 1;
                    return;
                }
                current = current.next;
            }
        }
    }

    findNode(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }


    getSize() {
        return this.size
    }

    print() {
        let result = []
        let node = this.head;
        while (node) {
            result.push(node.value)
            node = node.next
        }
        console.log(result.join(' => '));
    }
}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

const list = new LinkedList();
list.addNode(5);
list.addNode(3);
list.addNode(2);
list.addNode(5);
list.addNode(7);
list.print();
console.log(list.getSize());
console.log(list.findNode(2));


list.deleteNode(5);
list.deleteNode(2);
list.print();
console.log(list.getSize());
console.log(list.findNode(2));
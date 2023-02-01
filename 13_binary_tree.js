class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(value) {
        if (!this.root) {
            this.root = new TreeNode(value);
        } else {
            let node = this.root;
            let newNode = new TreeNode(value);
            while (node) {
                if (value > node.value) {
                    if (!node.right) {
                        break;
                    }
                    node = node.right;
                } else {
                    if (!node.left) {
                        break;
                    }
                    node = node.left;
                }
            }
            if (value > node.value) {
                node.right = newNode;
            } else {
                node.left = newNode;
            }
        }
    }

    find(value) {
        if (!this.root) {
            return false;
        }

        let node = this.root;
        let found = false;
        while (node && !found) {
            if (value < node.value) {
                node = node.left;
            } else if (value > node.value) {
                node = node.right;
            } else {
                found = node;
            }
        }

        if (!found) {
            return null;
        }
        return found;
    }

    remove(value) {
        this.root = this.removeInner(value, this.root);
    }

    removeInner(value, node) {
        if (node) {
            if (value < node.value) {
                node.left = this.removeInner(value, node.left);
            } else if (value > node.value) {
                node.right = this.removeInner(value, node.right);
            } else if (node.left && node.right) {
                node.value = this.findMinValue(node.right);
                node.right = this.removeInner(node.value, node.right)
            } else {
                node = node.left || node.right;
            }
        }
        return node;
    }

    findMinValue(node = this.root) {
        if (!this.isEmpty()) {
            while (node.left) {
                node = node.left;
            }
        }
        return node.value;
    }

    findMaxValue(node = this.root) {
        if (!this.isEmpty()) {
            while (node.right) {
                node = node.right;
            }
        }
        return node.value;
    }

    isEmpty() {
        return this.root === null;
    }

    print(prefix, root = this.root) {
        if (!root) {
            return true;
        }
        this.print(prefix + '     ', root.right);
        console.log(prefix + '|--' + root.value);
        this.print(prefix + '     ', root.left);
    }
}

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const tree = new BinaryTree();
tree.add(5);
tree.add(2);
tree.add(6);
tree.add(2);
tree.add(1);
// console.log(tree.find());
// console.log(tree.findMaxValue());
// console.log(tree.findMinValue());
// tree.remove(5)
tree.print("");
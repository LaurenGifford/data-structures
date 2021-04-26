// FIRST PASS
// function find(root, data) {
//     let current = root
//     let left = null
//     let right = null
//     if (data <= current) {
//         left = data
//     }
//     else if (data > current ) {
//         right = data
//     }
//     else {
//         root = root + 1
//         return find(root, data)
//     }
// }

// CORRECT
function findOrAdd(rootNode, newNode) {
    let currentNode = rootnode.data
    if (newNode.data < rootNode.data) {
        currentNode = rootNode.left
        if (currentNode) {
            findOrAdd(currentNode, newNode)
        }
        else {currentNode.left = newNode}
    }
    else if (newNode.data > rootNode.data) {
        currentNode = rootNode.right
        if (currentNode) {
            findOrAdd(currentNode, newNode)
        } else {currentNode.right = newNode}
    }
}

// left, middle, right
function inOrder(currentNode) {
    if (currentNode.left) {
        inOrder(currentNode.left)
    }
    console.log(data)
    if (currentNode.right){
        inOrder(curentNode.right)
    }
}

// middle, left, right
function preOrder(curentNode) {
    if (currentNode) {
        console.log(currentNode)
        preOrder(currentNode.left)
        preOrder(currentNode.right)
    }
}

//left, right, middle
function postOrder(currentNode) {
    if (currentNode) {
        postOrder(currentNode.left)
        postOrder(currentNode.right)
        console.log(currentNode)
    }
}
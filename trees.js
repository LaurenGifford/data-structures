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


function inOrder(currentNode) {
    if (currentNode.left) {
        inOrder(currentNode.left)
    }
    console.log(data)

    if (currentNode.right){
        inOrder(curentNode.right)
    }
}
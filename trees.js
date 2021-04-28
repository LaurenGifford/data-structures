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

// non-recursive search function
function searchBST(node, val) {
    while (node) {
        if (val < node.val) node = node.left 
        else if (val > node.val) node = node.right
        else return node
    }
   return node
};


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

// maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// 1. If tree is empty then return 0
// 2. Else
//      (a) Get the max depth of left subtree recursively  i.e., 
//           call maxDepth( tree->left-subtree)
//      (a) Get the max depth of right subtree recursively  i.e., 
//           call maxDepth( tree->right-subtree)
//      (c) Get the max of max depths of left and right 
//           subtrees and add 1 to it for the current node.
//          max_depth = max(max dept of left subtree,  
//                              max depth of right subtree) 
//                              + 1
//      (d) Return max_depth

function maxDepth(root) {
    if (root){
        let left = maxDepth(root.left)
        let right = maxDepth(root.right)
        let max = left > right ? (left + 1) : (right +1)
        return max
    } else {return 0}
}


// The diameter of a binary tree is the length of the longest path between any two nodes 
// in a tree. This path may or may not pass through the root.

function diameterOfBinaryTree(root) {
    let longest = 0
    getHeight(root)
    return longest

    function getHeight(root) {
        if (root) {
            let left = getHeight(root.left)
            let right = getHeight(root.right)
            longest = Math.max(longest, left + right) 
            return Math.max(left, right) + 1
        } else {return 0}
    }

};
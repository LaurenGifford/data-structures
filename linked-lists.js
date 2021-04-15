let firstNode = ['a', 123]
let secondNode = ['b', 132]
let thirdNode = ['c', null]

let collection = {0: firstNode, 123: secondNode, 132: thirdNode}
let head = collection[0]

function next(node) {
    let nextAddress = node[1]
    return collection[nextAddress]
}

function indexAt(head, index) {
    let node = head
    for (let i =0; i < index; i++) {
        node = next(node)
    }
    return node
}


let collection = {rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
masjdrandm: {name: 'Kirstin', next: 'ntrandm'}, 
ntrandm: {name: 'Juliet', next: null}
}

let head = collection["rnadnm"]

function indexAt(head, index) {
    let node = head
    for (let i = 0; i < index; i ++) {
        node = next(node)
    }
    return node
}


function next(node) {
    let nextNode = node[1]
    return collection[nextNode]
}
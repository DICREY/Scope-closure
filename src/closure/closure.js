function greeting(){
    let userName = "Dicrey"
    function displatUserName(){
        return `hola ${userName}`
    }
    return displatUserName()
}

const g = greeting()

console.log(g)
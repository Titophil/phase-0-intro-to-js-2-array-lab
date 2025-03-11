let cats=["Milo","Otis","Garfield"]
function destructivelyAppendCat(Ralph){
    cats.push(Ralph)
}

function destructivelyPrependCat(Bob){
    cats.unshift(Bob)
}
function destructivelyRemoveLastCat(Ralph){
    cats.pop(Ralph)
}
function destructivelyRemoveFirstCat(Bob){
    cats.shift(Bob)
}

function appendCat(Broom){
    const copy=[...cats]
    copy.push(Broom)
    return copy
}
function prependCat(Arnold){
    const ct=[...cats]
    ct.unshift(Arnold)
    return ct
}
function removeLastCat(Broom){
const remove=[...cats]
remove.pop(Broom)
return remove

}
function removeFirstCat(Arnold){
    const rm=[...cats]
    rm.shift(Arnold)
    return rm
}
/*
____0____ 0 ____4____
___000___ 1 ___345___
__0_0_0__ 2 __2_4_6__
_0_000_0_ 3 _1_345_7_
000000000 4 012345678
_0_000_0_ 5 _1_345_7_
__0_0_0__ 6 __2_4_6__
___000___ 7 ___345___
____0____ 8 ____4____

____0____   _________   ____0____   ____0____
____0____   _________   ___0_____   _____0___
____0____   _________   __0______   ______0__
____0____   _________   _0_______   _______0_
____0____   000000000   0_______0   0_______0
____0____   _________   _______0_   _0_______
____0____   _________   ______0__   __0______
____0____   _________   _____0___   ___0_____
____0____   _________   ____0____   ____0____
*/

const draw = (size) => {
    const odd = size % 2
    const maxIndex = size - odd
    const midIndex = maxIndex / 2

    for (let y = 0; y < size; y++) {
        let result = ''
        for (let x =0; x < size; x++) {
            if ( y == midIndex 
                || x == midIndex 
                || ( x + y ) %maxIndex == midIndex 
                || Math.abs( x - y ) == midIndex 
                ) {
                    result += '0'
                } else {
                    result += '_'
                }
        }
        console.log(result)
    }
}

draw(9)
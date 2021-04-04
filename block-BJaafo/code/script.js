function fullName(input1 , input2) {
    return input1+" " +input2 

}

let result = fullName("vivek","sharma")
let expected = "vivek sharma"



if (result !== expected) {
    throw new Error(`${result} is not same as ${expected}`)
}

else  {
    console.log("both are same")
}
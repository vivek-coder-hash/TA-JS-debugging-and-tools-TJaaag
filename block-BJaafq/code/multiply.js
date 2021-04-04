function add(numA , numB)  {
    return numA * numB
 }
 
 let result =add(2,4)
 let expected  =5
 
 
 
 function test(message , callback)  {
     try  {
         callback();
         console.log("true" , message)
     }
     catch (error)  {
         console.error(error) ;
         console.log("false" , message)
     }
 }
 function testadd() {
     result =add(2,4)
     expected =5
     if (result!== expected)  {
         throw new Error (`${result} is not equal to ${expected}`)
     }
 }
 
 
 
 test("multiplication of  2 and 4" , testadd)
const getBig: (num1: number, num2: number) => number = (num1: number, num2: number) => {
    if (num1 < num2){

        return  num2
    }
    else
    {
        return num1 
    }
    
   }

//    console.log(getBig(10,5));


const printBig: (num1: number, num2: number) => void = (num1: number, num2: number) => {
    if (num1 < num2){

        console.log(num2);
        

        
    }
    else
    {
        console.log(num1); 
    }
    
   }

   const getDouble: (num: number) => string = (num: number) => {
    if (num % 2 == 0){

        return  "Double number"
    }
    else
    {
        return "Not Double number" 
    }

   }


   const getLength: (text: string) => number = (text: string) => {
     return text.length
   }


   const getArrayByNum: (num: number) => number[] = (num: number) => {
    const arrayNumbers: number[] = [];
    for (let index = 1; index < num + 1; index++) {
        arrayNumbers.push(index);
        
    }
        return arrayNumbers 
    }


    const getBigNumByArray: (arrayNumbers: number[]) => number = (arrayNumbers: number[]) => {
        
            return Math.max(...arrayNumbers)
        }


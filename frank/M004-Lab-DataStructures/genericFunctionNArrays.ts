// 3 inputs, type: text
// wenn Zahlen dann array Number
// wenn Strings dann array Strings
// sonst Arrays <any>



function getArray<T> (el1:T, el2:T, el3:T) : Array<T> {

    return [el1, el2, el3];
}




function createArray() {

    let myArray:string[] = [];
    let myArrayT;

    let inp1 = (<HTMLInputElement>document.getElementById('inp1'))!.value;
    let inp2 = (<HTMLInputElement>document.getElementById('inp2'))!.value;
    let inp3 = (<HTMLInputElement>document.getElementById('inp3'))!.value;

    let inpArray: string[] = [inp1, inp2, inp3];

    /* if (isNaN(Number(inp1)) && isNaN(Number(inp2)) && isNaN(Number(inp3)) )  {
        //alles Text        
        console.log("alles text");
        let myArrayT : string[] = <string[]> getArray(inp1, inp2, inp3);    

    } else if (!isNaN(Number(inp1)) && !isNaN(Number(inp2)) && !isNaN(Number(inp3)) ) {
        //alles Zahlen
        console.log("alles zahlen");
        let myArrayT : number[] = <number[]> getArray(Number(inp1), Number(inp2), Number(inp3));    
    } else {
        // gemischt
        console.log("gemischt");
        let myArrayT : any[] = <any[]> getArray(inp1, inp2, inp3);    
    } */


    inpArray.forEach(element => {
        if(isNaN(Number(element))) {
            myArray.push("text");
        } else {
            myArray.push("number");
        }    
    });
    
    console.log('myArray :>> ', myArray);
    
    

    
}
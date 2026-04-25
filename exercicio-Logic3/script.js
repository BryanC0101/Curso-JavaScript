function numbers(num) {
    for (let i = 0; i < 100; i++) {
        if (typeof num == "number") { 
            if (num % 3 == 0 && num % 5 == 0){
                console.log("FizzBuzz")
            }else if (num % 3 == 0) {
                console.log("Fizz")
            }else if (num % 5 == 0){
                console.log("Buzz")
            }else{
                console.log(num)
            }
            num++
        }else{
            return "It's not a number"
        }
    }
}

numbers(0)
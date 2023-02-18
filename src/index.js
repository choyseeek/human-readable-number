module.exports = function toReadable (number) {

    if (number != null && typeof number !== "undefined" && Number.isInteger(number)) {
        number = +number.toString().trim();
    }else{
        return "Write a number please^-^";
    }

    const DEFAULT_NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const NUMBERS_TEN_NINETY = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const DOZENS_NUMBERS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function crunching(number, n = 0) {
        for (let i = 0; i < this.length; i++) {
          if (+number === i + n) {

            return this[i];

          }
        }
    }

    function twoDigitNumber(number, n = 0, k = 1){

        if(number % 10 === 0){

            return crunching.call(DOZENS_NUMBERS, number.toString().charAt(n));

        }else{
            return (

              `${crunching.call(DOZENS_NUMBERS, number.toString().charAt(n))} ${crunching.call(DEFAULT_NUMBERS, number.toString().charAt(k))}`

            );
        }
    }

  
    if(number < 10){
        
        return crunching.call(DEFAULT_NUMBERS, number);
        
    }else if(number >= 10 && number < 20){
        
        return crunching.call(NUMBERS_TEN_NINETY, number, 10);
        
    }else if(number >= 20 && number < 100){
        if(number % 10 === 0){

            return crunching.call(DOZENS_NUMBERS, number.toString().charAt(0));

        }else{

            return (
                `${crunching.call(DOZENS_NUMBERS, number.toString().charAt(0))} ${crunching.call(DEFAULT_NUMBERS, number.toString().charAt(1))}`
            );

        }
    }else if(number >= 100 && number <= 999){
      if(number % 100 === 0){

        return `${crunching.call(DEFAULT_NUMBERS, number.toString().charAt(0))} hundred`;

      }else if(number - parseInt(number.toString().charAt(0) * 100, 10) >= 10 && number - parseInt(number.toString().charAt(0) * 100, 10) < 20){

        return `${crunching.call(DEFAULT_NUMBERS, number.toString().charAt(0))} hundred ${crunching.call(NUMBERS_TEN_NINETY, +(number - parseInt(number.toString().charAt(0) * 100, 10)), 10)}`

      }else{

        return `${crunching.call(DEFAULT_NUMBERS, number.toString().charAt(0))} hundred ${twoDigitNumber(number, 1, 2).trim()}`;

      }
    }

}

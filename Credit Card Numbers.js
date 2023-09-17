const validateCred = (cardArr) => {
  let amendedArr = [];
  let otherNumbers = [];
  
  for (let i = cardArr.length - 2; i >= 0; i -= 2) {
    let doubledValue = cardArr[i] * 2;
    if (doubledValue > 9) {
      doubledValue -= 9;
    }
    amendedArr.push(doubledValue);
  }
  
  for (let j = cardArr.length - 1; j >= 0; j -= 2) {
    otherNumbers.push(cardArr[j]);
  }

  const fullNewArr = amendedArr.concat(otherNumbers);
  const total = fullNewArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  
  return total % 10 === 0;
};

const findInvalidCard = (nestedArr) => {
  let invalidCardArr = []
  for (let i = 0; i < nestedArr.length; i++){
    if (!validateCred(nestedArr[i])){
      invalidCardArr.push(nestedArr[i])
    } 
  } return invalidCardArr;
};

const idInvalidCardCompanies = (arr) => {
  let companiesToContact = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] && arr[i].length > 0) {
      const firstNumber = arr[i][0];
      let companyToAdd = ''; // Declare the variable here

      if (firstNumber === 3) {
        companyToAdd = 'Amex';
      } else if (firstNumber === 4) {
        companyToAdd = 'Visa';
      } else if (firstNumber === 5) {
        companyToAdd = 'Mastercard';
      } else if (firstNumber === 6) {
        companyToAdd = 'Discover';
      }
      if (companiesToContact.indexOf(companyToAdd) === -1) {
        companiesToContact.push(companyToAdd);
      }
    }
  }
  return companiesToContact;
};

console.log(idInvalidCardCompanies(batch));

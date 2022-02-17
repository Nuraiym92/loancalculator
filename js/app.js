

document.getElementById("loan-form").addEventListener("submit",loader);

function loader(e){
    e.preventDefault();
    

        document.querySelector('#output').style.display = 'none';
    const loanAmount=document.getElementById("amount").value;
const interest=document.getElementById("interest").value;
const years=document.getElementById("years").value;


    const principle=parseFloat(loanAmount);
const calculateInterest=parseFloat(interest)/100/12;
const calculatedPayment=parseFloat(years)*12

const x=Math.pow(1+calculateInterest,calculatedPayment);
const monthly=(principle*x*calculateInterest)/(x-1);
const monthlyPayment=monthly.toFixed(2);

const totalInterest=(monthly*calculatedPayment-principle).toFixed(2);

const totalPayment=(monthly*calculatedPayment).toFixed(2)

document.getElementById("monthly-payment").innerHTML="$"+monthlyPayment;
document.getElementById("total-interest").innerHTML="$"+totalInterest;
document.getElementById("total").innerHTML="$"+totalPayment;

}

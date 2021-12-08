const clickCounter = {
    buttonMinusNode: document.querySelector("[data-action='increment']"),
    buttonPlusNode: document.querySelector("[data-action='decrement']"),
    spanValue: document.getElementById('value'),
    };        
      
let counterValue = 0;
      
const increment=() => {
    counterValue += 1;
    clickCounter.spanValue.textContent = counterValue;
  };
  
  const decrement=() => {
    counterValue -= 1;
    clickCounter.spanValue.textContent = counterValue;
  };
  
  clickCounter.buttonMinusNode.addEventListener('click', increment);
  clickCounter.buttonPlusNode.addEventListener('click', decrement);    
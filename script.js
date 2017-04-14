    function show(container, Message) {
      container.className = 'message'; //error
      var msgElem = document.createElement('span');
      msgElem.className = "output-message";
      msgElem.innerHTML = Message;
      container.appendChild(msgElem);
    }

    function showMessage(container) { 
      container.className = '';
      if (container.lastChild.className == "output-message") {
        container.removeChild(container.lastChild);
      }
    }

    function calculate(form) {
      var house = form.elements;

      // Calculate Price
      showMessage(house.area.parentNode);
      if (house.material.value == 'bricks') {
      	show(house.price.parentNode, house.area.value * 1500 + '$')
      	document.getElementById("myBtn").disabled = true;
      }
      else if(house.material.value == 'wood') {
      	show(house.price.parentNode, house.area.value * 1000 + '$')
      	document.getElementById("myBtn").disabled = true;
      }
      else if(house.material.value == 'metal') {
      	show(house.price.parentNode, house.area.value * 1200 + '$')
      	document.getElementById("myBtn").disabled = true;
      }
      else {
      	show(house.price.parentNode, 'Sorry, we do not build with this material')
      	document.getElementById("myBtn").disabled = true;
      }
    }
    
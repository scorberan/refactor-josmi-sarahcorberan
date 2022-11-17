function showDeliveryCost(deliveryCost){
	document.getElementById('delivery-cost').innerText = `${deliveryCost}€`;
}

function showTotal(totalPrice){
	document.getElementById('total-price').innerText = `${totalPrice}€`;
}

function showBadZipFormat() {
	console.error('El código zip introducido no es válido')
}

window.addEventListener('load', () => {
	const priceWithoutDeliveryCost = 5;
	const calculateDeliveryButton = document.getElementById('calculate-delivery');

	calculateDeliveryButton.addEventListener('click', () => {
		const zipCode = document.getElementById('zip-code').value;
		console.log(typeof zipCode);
		let deliveryCost;
		

		//si el numero d4e caracteres de zipcode es distino de 5
		if (zipCode.length !==5 || zipCode.startsWith('0')){
			showBadZipFormat();
			return ;
		} 
		if (zipCode.startsWith('10')){
			deliveryCost = 0;
		}else if (zipCode.startsWith('1')||zipCode.startsWith('2')||zipCode.startsWith('3')||zipCode.startsWith('4')||zipCode.startsWith('5')){
			deliveryCost = 2;
		}else if (zipCode.startsWith('6')||zipCode.startsWith('7')||zipCode.startsWith('8')){
			deliveryCost = 3;
		}else  if (zipCode.startsWith('9')){
			deliveryCost = 5;
		}
		showDeliveryCost(deliveryCost);
		showTotal(priceWithoutDeliveryCost + deliveryCost)
		
		
		// ADD LOGIC HERE	
		//paso 1 convierto "5" en un numero
		//si puedo convertir 5 en un numero => comparo si es distino que el numero que devuelve length
		// si el numero que devuelve lengt es distino de 5 se cumple la condicion 
		//si no puedo convertir 5 en un numero, la condicion es falso
	})
	
	});
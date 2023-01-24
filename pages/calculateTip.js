import { totalTip, totalMoney } from './variables.js'

export function calculateTip(bill, tip, people) {
	const totalTipAmount = (parseFloat(bill) * (parseFloat(tip) / 100) / parseInt(people)).toFixed(2);
	const totalMoneyAmount = ((parseFloat(bill) / parseInt(people)) + parseFloat(totalTipAmount)).toFixed(2);
	
	totalTip.textContent = `$${totalTipAmount}`;
	totalMoney.textContent = `$${totalMoneyAmount}`;
	
	totalTip.title = totalTipAmount;
	totalMoney.title = totalMoneyAmount;
}
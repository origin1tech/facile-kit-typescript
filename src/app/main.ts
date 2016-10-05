
export let sayHello = () => {
	let body = document.getElementsByName('body')[0];
	let txt = document.createTextNode('Facile is cool!');
	body.appendChild(txt);
};
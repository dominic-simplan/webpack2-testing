import 'Globalize';

export function component () {
  let element = document.createElement('div');
  
  let currencyFormatter = Globalize.currencyFormatter( "USD" );
  element.innerHTML = currencyFormatter( 69900 );
  return element;
}

document.body.appendChild(component());

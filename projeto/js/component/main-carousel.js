/*
  Obejtivo: Clicar em qualquer um dos bullets, tirar o -isActive do bullet que estiver com ela

  1 - Pegar o elemento bullet que está com a class -isActive
  2 - Remove a class -isActive desse elemento quando clicar no primeiro bullet
  3 - Remvoe a class -isActive desse elemento quando qualquer bullet sofrer o evento de click
*/

/* 
  BOM (Browser Object Model) - window
  DOM (Document Object Model) - document
*/

var $bullet = document.querySelectorAll('.bullet')
var $bulletIsActive = document.querySelector('.bullet.-isActive')

$bullet[0].addEventListener('click', clickInBullet)
$bullet[1].addEventListener('click', clickInBullet)
$bullet[2].addEventListener('click', clickInBullet)

function clickInBullet() {
  $bulletIsActive.classList.remove('-isActive')
  this.classList.add('-isActive')
  $bulletIsActive = this
}








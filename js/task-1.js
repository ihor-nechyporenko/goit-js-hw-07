const items = document.querySelectorAll('.item');
console.log(`В списке ${items.length} категории.`);

items.forEach(item => {
    console.log('Категория:', item.querySelector('h2').textContent);
    console.log('Количество элементов:', item.querySelector('ul').children.length);
});
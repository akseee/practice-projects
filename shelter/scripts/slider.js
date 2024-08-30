// Реализация слайдера-карусели на странице Main: +36

// console.log(`
//   // при нажатии на стрелки происходит переход к новому блоку элементов: +4
//   // смена блоков происходит с соответствующей анимацией карусели (способ выполнения анимации не проверяется): +4
//   // слайдер бесконечен, т.е. можно бесконечно много нажимать влево или вправо, и каждый раз будет прокрутка в эту сторону с новым набором карточек: +4
//   // при переключении влево или вправо прокручивается ровно столько карточек, сколько показывается при текущей ширине экрана (3 для 1280px, 2 для 768px, 1 для 320px): +4
//   // каждый новый слайд содержит псевдослучайный набор карточек животных, т.е. формируется из исходных объектов в случайном порядке со следующими условиями:
//   // в текущем блоке слайда карточки с питомцами не повторяются: +4
//   // в следующем блоке нет дублирования карточек с текущим блоком. Например в слайдере из 3 элементов, следующий выезжающий слайд будет содержать 3 (из 8 доступных) новых карточки питомца, таких, каких не было среди 3х карточек на предыдущем уехавшем слайде: +4
//   // сохраняется только одно предыдущее состояние. Т.е. при последовательном переходе два раза влево, а потом два раза вправо, мы получим набор карточек, отличный от исходного: +4
//   // при каждой перезагрузке страницы формируется новая последовательность карточек: +2
//   // генерация наборов карточек происходит на основе 8 объектов с данными о животных: +2
//   // при изменении ширины экрана (от 1280px до 320px и обратно), слайдер перестраивается и работает без перезагрузки страницы (набор карточек при этом может как изменяться, так и оставаться тем же, скрывая лишнюю или добавляя недостающую, и сохраняя при этом описанные для слайдера требования): +4
// `)

export function $(selector, element=document) {
  return element.querySelector(selector);

  // const element = document.querySelector(selector);

  // // 요소에 스타일을 설정하는 메서드
  // function setStyle(property, value) {
  //   if (element) {
  //     element.style[property] = value;
  //   }
  // }

  // // 요소에 클래스를 추가하는 메서드
  // function addClass(className) {
  //   if (element) {
  //     element.classList.add(className);
  //   }
  // }

  // // 요소에 이벤트 리스너를 추가하는 메서드
  // function addEventListener(eventType, callback) {
  //   if (element) {
  //     element.addEventListener(eventType, callback);
  //   }
  // }

  // // 최종적으로 선택한 요소와 메서드를 반환
  // return {
  //   element,
  //   setStyle,
  //   addClass,
  //   addEventListener,
  // };
}
export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

/*
  Функция display рендерит один из компонентов в зависимости от полученного значения
  isVisible - логическое значение определяющее, какой из компонентов будет отрендерен
  childrenTrue - компонент, который будет отрендерен, если isVisible = true
  childrenFalse - компонент, еоторый быдет отрендерен, если isVisible = false
*/

export const display = ({isVisible, childrenTrue, childrenFalse}) => {
  return isVisible ? childrenTrue : childrenFalse;
};

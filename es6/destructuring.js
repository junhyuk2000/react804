/**
 * 구조 분해 할당
 * - 객체 또는 배열의 값을 개별 변수로 쉽게 꺼내는 문법
 */

const user = { a: 30, j: "개발자" };
const { a, j } = user;
console.log(a, j);

const handleChange = (e) => {
  const { a, j } = e.target;
};

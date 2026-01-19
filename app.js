// DOM 요소 가져오기
const form = document.getElementById("searchForm");
const studentNumberInput = document.getElementById("studentNumber");

const googleIdSpan = document.getElementById("googleId");
const googlePwSpan = document.getElementById("googlePw");

// 검색 이벤트
form.addEventListener("submit", function (event) {
  event.preventDefault(); // 새로고침 방지

  const studentNumber = studentNumberInput.value.trim();

  // 결과 초기화
  googleIdSpan.textContent = "-";
  googlePwSpan.textContent = "-";

  // 1. 형식 검사 (5자리 숫자)
  if (!/^\d{5}$/.test(studentNumber)) {
    googleIdSpan.textContent = "학번 형식 오류";
    googlePwSpan.textContent = "5자리 숫자를 입력하세요";
    return;
  }

  // 2. 학번 분해
  const grade = parseInt(studentNumber.charAt(0), 10);      // 학년
  const classroom = parseInt(studentNumber.charAt(1), 10); // 반
  const number = parseInt(studentNumber.slice(3), 10);     // 번호

  // 3. 범위 검사
  const isValid =
    grade >= 1 && grade <= 3 &&
    classroom >= 1 && classroom <= 3 &&
    number >= 1 && number <= 10;

  if (!isValid) {
    googleIdSpan.textContent = "존재하지 않는 학번";
    googlePwSpan.textContent = "다시 확인하세요";
    return;
  }

  // 4. 계정 생성
  const googleId = `25s${studentNumber}@sd.sen.go.kr`;
  const googlePw = `s${studentNumber}!`;

  // 5. 결과 출력
  googleIdSpan.textContent = googleId;
  googlePwSpan.textContent = googlePw;
});

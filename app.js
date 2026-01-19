// DOM 요소 가져오기
const form = document.getElementById("searchForm");
const studentNumberInput = document.getElementById("studentNumber");
const studentNameInput = document.getElementById("studentName");

const googleIdSpan = document.getElementById("googleId");
const googlePwSpan = document.getElementById("googlePw");

// 예제 학생 데이터 (나중에 서버/시트로 교체 예정)
const students = [
  {
    studentNumber: "20101",
    name: "홍길동",
    googleId: "hong20101@school.go.kr",
    googlePw: "abcd1234"
  },
  {
    studentNumber: "20203",
    name: "김민지",
    googleId: "minji20203@school.go.kr",
    googlePw: "pass5678"
  }
];

// 검색 이벤트 처리
form.addEventListener("submit", function (event) {
  event.preventDefault(); // 새로고침 방지

  const inputNumber = studentNumberInput.value.trim();
  const inputName = studentNameInput.value.trim();

  // 결과 초기화
  googleIdSpan.textContent = "-";
  googlePwSpan.textContent = "-";

  // 학생 찾기
  const student = students.find(s =>
    s.studentNumber === inputNumber &&
    s.name === inputName
  );

  if (student) {
    googleIdSpan.textContent = student.googleId;
    googlePwSpan.textContent = student.googlePw;
  } else {
    googleIdSpan.textContent = "정보 없음";
    googlePwSpan.textContent = "정보 없음";
  }
});

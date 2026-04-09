// 1. 파이어베이스 기능 불러오기 (인터넷에서 가져옴)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

// 2. 내 파이어베이스 프로젝트 열쇠 (선생님의 코드로 바꿔주세요!)
// ▼▼▼ 화면에 보이는 선생님의 코드를 아래에 덮어씌워 주세요 ▼▼▼
const firebaseConfig = {
  apiKey: "AIzaSyA9bPIzbMkGXOZD7mmdGaI-FAx1Wuxia0o",
  authDomain: "edu-play-space.firebaseapp.com",
  projectId: "edu-play-space",
  storageBucket: "edu-play-space.firebasestorage.app",
  messagingSenderId: "747151841532",
  appId: "1:747151841532:web:2d6a03e756a651a8311f79",
  measurementId: "G-BV460LHFCH"
};// ▲▲▲ 선생님의 코드로 덮어씌우기 끝 ▲▲▲

// 3. 파이어베이스와 구글 로그인 기능 시작!
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 4. 구글 로그인 버튼 클릭 시 작동할 내용
const loginBtn = document.getElementById('google-login-btn');

if(loginBtn) {
    loginBtn.addEventListener('click', () => {
        // 구글 로그인 팝업창 띄우기
        signInWithPopup(auth, provider)
            .then((result) => {
                // 로그인 성공 시
                const user = result.user;
                console.log(user.displayName + " 로그인 성공!");
                alert("환영합니다, " + user.displayName + "님! 학습을 시작해 볼까요?");
                
                // 로그인 버튼 글자를 사용자 이름으로 바꾸기
                loginBtn.innerHTML = `🌟 ${user.displayName}님 로그인됨`;
                loginBtn.style.backgroundColor = "#e8f0fe";
            })
            .catch((error) => {
                // 에러 발생 시
                console.error("로그인 에러:", error);
                alert("로그인에 실패했습니다. 다시 시도해 주세요.");
            });
    });
}
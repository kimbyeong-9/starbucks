document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const rememberCheckbox = document.getElementById('remember');
    const signupLink = document.getElementById('signupLink');

    // 저장된 아이디가 있다면 불러오기
    const savedUsername = localStorage.getItem('rememberedUsername');
    if (savedUsername) {
        document.getElementById('username').value = savedUsername;
        rememberCheckbox.checked = true;
    }

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // 아이디 저장 기능
        if (rememberCheckbox.checked) {
            localStorage.setItem('rememberedUsername', username);
        } else {
            localStorage.removeItem('rememberedUsername');
        }

        // 여기에 실제 로그인 로직 구현
        console.log('로그인 시도:', { username, password });
        
        // 임시로 로그인 성공 처리
        alert('로그인이 완료되었습니다.');
        window.location.href = 'index.html'; // 메인 페이지로 이동
    });

    // 회원가입 링크 클릭 이벤트
    signupLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('회원가입 페이지로 이동합니다.');
        // window.location.href = 'signup.html'; // 회원가입 페이지로 이동
    });
}); 
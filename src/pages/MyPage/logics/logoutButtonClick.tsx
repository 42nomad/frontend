const logoutButtonClick = () => {
    localStorage.removeItem('token');
    window.location.href = 'https://api.42nomad.kr/member/logout';
}

export default logoutButtonClick;
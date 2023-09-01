const logoutButtonClick = () => {
    localStorage.removeItem('token');
    window.location.href = 'https://42nomad.kr';
}

export default logoutButtonClick;
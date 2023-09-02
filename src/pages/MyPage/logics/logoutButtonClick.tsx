const logoutButtonClick = () => {
    localStorage.removeItem('token');
    window.location.href = `${process.env.REACT_APP_API_URL}member/logout`;
}

export default logoutButtonClick;
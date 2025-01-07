document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");

    const userName = document.getElementById("user-name");
    const userEmail = document.getElementById("user-email");
    const userPhone = document.getElementById("user-phone");
    const userAddress = document.getElementById("user-address");
    const userCompany = document.getElementById("user-company");
    const userWebsite = document.getElementById("user-website");
    const errorMessage = document.getElementById("error-message");

    const fetchUserData = async () => {
        try {
            loader.style.display = "flex";

            const randomUserId = Math.floor(Math.random() * 5) + 1;
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${randomUserId}`);
            
            if (!response.ok) {
                throw new Error("Сеть недоступна");
            }

            const user = await response.json();
            renderUserData(user);
        } catch (error) {
            errorMessage.classList.remove('hidden')
        } finally {
            loader.style.display = "none";
        }
    };

    const renderUserData = (user) => {
        userName.textContent = `Имя: ${user.name}`;
        userEmail.textContent = `Почта: ${user.email}`;
        userPhone.textContent = `Телефон: ${user.phone}`;
        userAddress.textContent = `Адрес: ${user.address.suite} St. ${user.address.street} City. ${user.address.city}`;
        userCompany.textContent = `Компания: ${user.company.name}`;
        userWebsite.innerHTML = `Сайт: <a href="http://${user.website}" target="_blank">${user.website}</a>`;

        userName.classList.remove('hidden');
        userEmail.classList.remove('hidden');
        userPhone.classList.remove('hidden');
        userAddress.classList.remove('hidden');
        userCompany.classList.remove('hidden');
        userWebsite.classList.remove('hidden');
    };

    fetchUserData();
});

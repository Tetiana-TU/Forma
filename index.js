// document.addEventListener('DOMContentLoaded', () => {
//   const btn = document.querySelector('.button');
//   const feedback = document.querySelector('.feedback-container');

//   // Перевірка, чи існують елементи
//   if (btn && feedback) {
//     btn.addEventListener('click', () => {
//       feedback.innerHTML = `<h1>Thank you for your feedback</h1>`;
//     });
//   } else {
//     console.error('Не вдалося знайти елементи на сторінці.');
//   }

document.addEventListener('DOMContentLoaded', () => {
  const sendButton = document.getElementById('sendBtn');

  sendButton.addEventListener('click', () => {
    // Отримуємо значення з полів форми
    const textarea = document.getElementById('textarea').value;
    const nickname = document.getElementById('nickname').value;
    const email = document.getElementById('email').value;
    const isPublic = document.querySelector('input[name="one"]:checked')?.id; // Перевірка на вибране значення в radio
    const acceptTerms = document.getElementById('accept').checked; // Перевірка на погодження з умовами

    //     // Формуємо об'єкт для даних форми
    const formData = {
      feedback: textarea,
      nickname: nickname,
      email: email,
      isPublic: isPublic, // "Yes" або "No"
      acceptTerms: acceptTerms,
    };

    // Перевірка чи всі дані коректно заповнені
    if (!nickname || !email || !textarea || !acceptTerms) {
      alert('Please fill all the required fields and accept the terms.');
      return;
    }

    // Виведення даних форми в консоль або їх подальша обробка
    console.log('Form Data:', formData);

    // Тут можна додати код для відправки даних на сервер через AJAX або fetch
    // Наприклад:
    // fetch('/submit-feedback', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    // .then(response => response.json())
    // .then(data => console.log(data));
    //     Очищаємо форму після відправки
    //     Скидаємо значення полів форми
    //     document.getElementById('textarea').value = '';
    //     document.getElementById('nickname').value = '';
    //     document.getElementById('email').value = '';

    //     // Скидаємо вибір радіокнопок
    //     const radioButtons = document.querySelectorAll('input[name="one"]');
    //     radioButtons.forEach(radio => {
    //       radio.checked = false;
    //     });

    //     // Скидаємо галочку на прийняття умов
    //     document.getElementById('accept').checked = false;

    //     // Якщо у вас є форма, можна скинути її через метод reset():
    //     // document.querySelector('form').reset();
  });
});

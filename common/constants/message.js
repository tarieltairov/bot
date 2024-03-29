const REQUISITES = [
  {
    id: "/aktanlogin",
    name: "Актан К.",
    mbank: "+996997897897",
    omoney: "0503120440",
  },
  {
    id: "/kairatlogin",
    name: "Кайрат.М",
    mbank: "+996709050900",
    omoney: "0709050900",
  },
];

const setRequisites = (admin) => {
  const currentAdmin = REQUISITES.find((i) => i.id === admin);
  MESSAGE.REQUISITES = `Отправьте по следующим реквизитам.\n\nРеквизиты: MBANK\n${currentAdmin.mbank} (${currentAdmin.name})\nРеквизиты:  О деньги! (единицы)\n${currentAdmin.omoney}\n\nПосле оплаты нажмите на кнопку ниже👇`;
};

const MESSAGE = {
  START:
    "Пополнение/Вывод средств из 1XBET!\n\n📥Пополнение: 0%\n\n📤Вывод: 0%\n\n👨‍💻Служба поддержки: @kesha8008",
  ACCOUNT_ID: "Введите ID(Номер Счёта) 1XBET!",
  REQUISITES: `Отправьте по следующим реквизитам.\n\nРеквизиты: MBANK\n+996997897897 (Актан К.)\nРеквизиты:  О деньги! (единицы)\n0503120440\n\nПосле оплаты нажмите на кнопку ниже👇`,
  APPLICATION_ACCEPTED: `📨Ваша заявка отправлена на проверку!\n\n⚠️Пополнение занимает от 1 до 10 минут.\nПожалуйста подождите!\n\n⚠️При сложностях до 3 Часов!\n\n✅Вы получите уведомление о зачислении средств!`,
  CONCLUSION_ACCEPTED:
    "📨Ваша заявка отправлена на проверку!\n\n⚠️Вывод занимает от 5 до 15 минут.\nПожалуйста подождите!\n\n⚠️При сложностях до 3 Часов!\n\n✅Вы получите уведомление о выводе средств!",
  WRONG: "Пожалуйста, выберите пункт из меню ниже.",
  REFILLMENT_METHOD: "Выберите необходимый способ для пополнения!",
  SUM_RULES:
    "Укажите сумму пополнения KGS.\n\nМинимальная сумма пополнения: 50.\n\nМаксимальная сумма пополнения: 100000",
  CONCLUSION_SUM_RULES: "Укажите сумму вывода",
  SCREENSHOT:
    "Отправьте СКРИНШОТ Платёжа!\n\n❗️В скриншоте должны быть видны Дата и Время совершения платежа!\nВ противном случае ваш платёж может не поступить на ваш Счёт!",
  CANCEL: "Теперь, чтобы отправить новую заяку, выберите команду /start",
  CONCLUSION: "Выберите удобный для вас способ приема оплаты!",
  CONCLUSION_REQUISITES: "Введите свои реквизиты",
  CODE: "💳Введите код:",
  CODE_INSTRUCTION:
    "1. Настройки! 🛠️\n2. Вывести со счета! 💵\n3. Наличные 💵\n4.Сумму для Вывода! 💰\nГород: Бишкек\n5. Подтвердить✅\n6. Получить Код!🔑\n7. Отправить его нам 📨\n\nЕсли возникнут проблемы\n👨‍💻Оператор: @kesha8007",
  FULFILLED_APPLICATION: "✅ ваша последняя заявка принята",
  REJECTED_APPLICATION: "❌ ваша последняя заявка отклонена",
};

module.exports = {
  MESSAGE,
  setRequisites,
  REQUISITES,
};

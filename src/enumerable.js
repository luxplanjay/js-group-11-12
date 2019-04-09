let userChoice;

const DeliveryOption = {
  TAKEOUT: 1,
  COURIER: 2,
  POST: 3,
};

while (true) {
  userChoice = prompt(
    `Выберите вариант доставки: ${DeliveryOption.TAKEOUT} - самовывоз, ${
      DeliveryOption.COURIER
    } - курьер, ${DeliveryOption.POST} - почта`,
  );

  if (userChoice === null) {
    break;
  }

  userChoice = Number(userChoice);

  const deliveryOptions = Object.values(DeliveryOption);

  if (deliveryOptions.includes(userChoice)) {
    break;
  }
}

switch (userChoice) {
  case DeliveryOption.TAKEOUT:
    alert('Самовывоз!');
    break;

  case DeliveryOption.COURIER:
    alert('Курьер!');
    break;

  case DeliveryOption.POST:
    alert('Почта!');
    break;

  default:
    alert('Вам перезвонит менеджер!');
}

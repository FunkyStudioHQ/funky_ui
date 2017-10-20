let notifications = document.querySelectorAll(".notification")

notifications.forEach = (notification) => {
  [].forEach.call(notifications, notification);
}

export default function() {
  notifications.forEach((notification) => {
    let closeBtn = notification.querySelector(".notification__close")

    if (!!closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        notification.classList.toggle('notification--closed')
      }, true)
    }
  })
}

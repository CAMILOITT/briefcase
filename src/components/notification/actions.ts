import type { ActionNotification } from "../../types/actionsNotification"


export function openNotification ({message, className, time= 500}:ActionNotification){
  const notification = document.querySelector(
    '#Notification',
  ) as HTMLDivElement

  if (notification.childNodes.length > 0) {
    notification.innerHTML = ''
  }

  notification.classList.add(...className.add)
  notification.classList.remove(...className.remove)
  
  const p = document.createElement('p')
  p.classList.add('message')
  p.textContent = message
  notification.appendChild(p)

  const idTime = setTimeout(() => {
    notification.classList.add('hidden')
  notification.classList.remove(...className.add)

  }, time)

  return () => {
    clearTimeout(idTime)
  }
}


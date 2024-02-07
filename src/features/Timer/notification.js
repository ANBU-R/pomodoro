export default async function createNotification({ onClick, title }) {
  if (Notification.permission === "granted") {
    const notification = new Notification(title);
    notification.onclick = onClick;
  } else {
    const permission = await Notification.requestPermission();
    const result = permission.result;
    if (result === "denied") {
      console.log("permission denied");
    } else if (result === "granted") {
      createNotification({ onClick, title });
    }
  }
}

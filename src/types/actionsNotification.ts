export interface  ActionNotification {
  message: string;
  time: number,
  className: {
    add: string[],
    remove:  string[]
  }
}

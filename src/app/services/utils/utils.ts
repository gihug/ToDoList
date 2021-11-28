export class Utils {
  public static getListToDo() {
    return JSON.parse(localStorage.getItem('listToDo'));
  }

  public static setListToDo(data) {
    localStorage.setItem('listToDo', JSON.stringify(data));
  }

  public static getIDCreate() {
    return JSON.parse(localStorage.getItem('id')) || 0;
  }

  public static setIDCreate(id) {
    localStorage.setItem('id', JSON.stringify(id));
  }
}

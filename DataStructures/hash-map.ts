class HashTable {
  private arr: Array<any>;
  private size: number;

  constructor(size: number = 13) {
    this.arr = [];
    this.size = size;
  }

  public setElement(key: string, val: any) {
    const index: any = this.hash(key);
    this.arr[index] = [key, val];
  }

  public getElement(key: string) {
    const index: any = this.hash(key);
    return this.arr[index];
  }

  public dump() {
    return this.arr;
  }

  private hash(str: any) {
    let index = 0;
    for (const el in str) {
      index += str.charCodeAt(el) * (el + 1 as any);
    }
    return index % this.size;
  }
}

const hashTable = new HashTable();
hashTable.setElement('booo', 'ddd');
console.log(hashTable.getElement('booo'));
console.log(hashTable.dump());

class HashTable<T> {
  private arr: T[][];
  private size: number;

  constructor(size: number = 13) {
    this.arr = [];
    this.size = size;
  }

  public set<T>(key: string, val: T) {
    const index: number = this.hash(key);
    const arr = new Array();
    arr.push(key);
    arr.push(val);
    this.arr[index] = arr;
  }

  public get(key: string) {
    const index: number = this.hash(key);
    return this.arr[index];
  }

  private hash(str: string) {
    let index = 0;
    for (let i = 0; i < str.length; i++) {
      index += str.charCodeAt(i) * (i + 1 as any);
    }
    return index % this.size;
  }
}

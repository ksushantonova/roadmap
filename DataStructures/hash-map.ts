class HashTable<T> {
  private arr: T[][];
  private size: number;

  constructor(size: number = 13) {
    this.arr = [];
    this.size = size;
  }

  private findMachingIndex<K>(list: [], key: K) {
    for (let i = 0; i < list.length; i++) {
      if (list[i][0] === key) return i;
    }
  }

  public set<String, V>(key: String, val: V) {
    const index: number = this.hash(key);
    if (!this.arr[index] || this.arr[index] && this.arr[index][0] === key) {
      this.arr[index] = [key, val];
    } else {
      const list = this.arr[index];
      const matchingIndex = this.findMachingIndex(list, key);

      if (matchingIndex) {
        list[matchingIndex] = [key, val];
        return;
      }
      list.push([key, val]);
    }
  }

  public get(key: String) {
    const index: number = this.hash(key);

    if (this.arr[index]) {
      const list = this.arr[index];
      const matchingIndex = this.findMachingIndex(list, key);
      if (matchingIndex) return this.arr[matchingIndex][1];
    }
    return this.arr[index];
  }

  private hash(str: String) {
    let index = 0;
    for (let i = 0; i < str.length; i++) {
      index += str.charCodeAt(i) * (i + 1 as any);
    }
    return index % this.size;
  }
}

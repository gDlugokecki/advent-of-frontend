// Tutaj skopiuj kod zadania

export class ChristmasQueue<T> {
  private queue: Array<{ value: T; priority: number }> = [];
  enqueue(value: T, priority: number) {
    this.queue.push({ value, priority });
    this.queue.sort((a, b) => b.priority - a.priority);
  }
  dequeue() {
    if (this.isEmpty()) {
      throw Error("There are no letters in the queue!");
    }
    return this.queue.shift()?.value;
  }
  isEmpty() {
    return this.queue.length > 0 ? false : true;
  }
}

// Tutaj skopiuj kod zadania

export class GiftRegistry {
  private registry: Record<string, Array<string>> = {};

  addGift(childId: number, gift: string) {
    if (!this.registry[childId]) {
      this.registry[childId] = [];
    }
    this.registry[childId].push(gift);
  }

  getGiftsForChild(childId: number) {
    return this.registry[childId] || [];
  }

  removeGift(childId: number, gift: string) {
    const presents = this.getGiftsForChild(childId);
    const index = presents.indexOf(gift);
    if (index === -1) {
      throw Error("Gift not found");
    }

    presents.splice(index, 1);
  }
}

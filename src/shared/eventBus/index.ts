export class EventBus<T extends Function> {
  subscriptions: Record<string, Set<T>> = {};

  public subscribe = (eventName: string, callback: T) => {
    if (!this.subscriptions[eventName]) {
      this.subscriptions[eventName] = new Set();
    }

    const callbacks: Set<T> = this.subscriptions[eventName];

    callbacks.add(callback);

    return () => {
      callbacks.delete(callback);

      if (callbacks.size === 0) {
        delete this.subscriptions[eventName];
      }
    };
  };

  public broadcast = (eventName: string, ...args: any) => {
    if (!this.subscriptions[eventName]) {
      return;
    }

    const callbacks: Set<T> = this.subscriptions[eventName];

    for (const callback of callbacks) {
      callback(...args);
    }
  };
}

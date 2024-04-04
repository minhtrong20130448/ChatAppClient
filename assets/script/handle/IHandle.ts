interface IHandle {
    onOpen(event: any): void;
    onMessage(event: any): void;
    onClosed(event: any): void;
    onError(event: any): void;
}


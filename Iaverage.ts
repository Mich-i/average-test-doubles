export interface NumberSource {
  readNumbers(): Promise<Array<number>>;
}

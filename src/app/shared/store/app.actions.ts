export class UnitChanged {
  static readonly type = '[UnitSelector] Unit Changed';
  constructor(public unit: string) { }
}

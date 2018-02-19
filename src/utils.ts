import 'reflect-metadata';

/** @internal */
export enum Declarations { component, directive, pipe }

/** @internal */
export const metadataKeys = {
  declaration: 'custom:declaration',
  name: 'custom:name',
  bindings: 'custom:bindings',
  options: 'custom:options',
  listeners: 'custom:listeners',
  viewChildren: 'custom:viewChildren',
};

/** @internal */
export function kebabToCamel(input: string) {
  return input.replace(/(-\w)/g, (m) => m[1].toUpperCase());
}

/** @internal */
export function camelToKebab(str: string) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/** @internal */
export function getAttributeName(selector: string) {
  return selector.substr(1, selector.length - 2);
}

/** @internal */
export function isAttributeSelector(selector: string) {
  return /^[\[].*[\]]$/g.test(selector);
}

/** @internal */
export function getMetadata(metadataKey: any, target: any): any {
  return Reflect.getMetadata(metadataKey, target);
}

/** @internal */
export function defineMetadata(metadataKey: any, metadataValue: any, target: any): void {
  Reflect.defineMetadata(metadataKey, metadataValue, target);
}

export function getTypeName(target: any) {
  return getMetadata(metadataKeys.name, target);
}

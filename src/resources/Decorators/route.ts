export const routeNameMetadataKey = Symbol('routeName')
export function Route(route: string): ClassDecorator {
  return (target) => {
    Reflect.defineMetadata(routeNameMetadataKey, route, target.prototype)
  }
}

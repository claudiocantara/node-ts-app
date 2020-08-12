
export function Route(route: string): ClassDecorator {
  return (target) => {
    Reflect.defineMetadata("routeName", route, target.prototype);
  }
}
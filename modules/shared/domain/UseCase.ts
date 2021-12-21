export interface UseCase<Request, ReturnedElement> {
  execute(request: Request): Promise<ReturnedElement>;
}

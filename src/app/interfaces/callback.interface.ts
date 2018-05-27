export interface Callback<T, K> {
	onSuccess(res: T): void;
	onError(err: K): void;
}
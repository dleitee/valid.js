import { _isPromise } from './lib/promise';

const isPromise = promise => _isPromise( promise );

export const promise = {
	isPromise: isPromise
}
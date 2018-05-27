import {Injectable} from '@angular/core';
import {Response} from '@angular/http';

@Injectable()
export class ServiceHandler {
	constructor() {
	}

	handleError(err: Response): any {
		let pb: any;
		let returnMessage: any;

		try {
			pb = JSON.parse(err['_body']);
			if ('errorMessage' in pb) {
				console.log('Error message: ', pb.errorMessage);
			}

			returnMessage = {
				err: err,
				parsedBody: pb,
			};
		} catch (catchError) {
			console.log('Error message: ', err['_body']);

			returnMessage = {
				err: err,
				errorMessage: err['_body'],
			};
		}

		return returnMessage;
	}
}
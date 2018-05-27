import { AppConstant } from './../app.constant';
import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Callback} from '../interfaces/callback.interface';

@Injectable()
export class HttpClient {
	constructor(private http: Http) {
	}

	private createHeader(headers: Headers, hasJson: boolean, token: any): void {
		if (token) {
			headers.append('Authorization', 'Bearer ' + token);
		}
		if (hasJson) {
			headers.append('Content-Type', 'application/json');
		}
	}

	private setUrl(url: string, urlOpt: string): string {
        let myUrl: string;
        console.log(AppConstant.api, '===')
		if (urlOpt) {
			myUrl = urlOpt;
		} else {
			myUrl = `${AppConstant.api}/${url}`;
        }
		return myUrl;
	}

	get(url: string, token: any, urlOpt?: string): Observable<Response> {
		let headers = new Headers();
		let myUrl: string;

		myUrl = this.setUrl(url, urlOpt);

		this.createHeader(headers, false, token);

		return this.http.get(myUrl, {
			headers: headers
		})
		.map(response => response.json());
	}

	post(url: string, dataObj: Object, token: any, urlOpt?: string): Observable<Response> {
		let headers = new Headers();
		let myUrl: string;

		myUrl = this.setUrl(url, urlOpt);

		this.createHeader(headers, true, token);

		return this.http.post(myUrl, dataObj, {
			headers: headers
		})
		.map(response => response.json());
	}

	delete(url: string, dataObj: Object, token: any, urlOpt?: string): Observable<Response> {
		let headers = new Headers();
		let myUrl: string;
		myUrl = this.setUrl(url, urlOpt);

		this.createHeader(headers, true, token);

		return this.http.delete(myUrl, {
			headers: headers,
			body: dataObj
		})
		.map(response => response.json());
	}

	put(url: string, dataObj: Object, token: any, urlOpt?: string): Observable<Response> {
		let headers = new Headers();
		let myUrl: string;

		myUrl = this.setUrl(url, urlOpt);

		this.createHeader(headers, true, token);

		return this.http.put(myUrl, dataObj, {
			headers: headers
		})
		.map(response => response.json());
	}
}

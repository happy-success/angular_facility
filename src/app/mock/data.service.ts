import { Injectable } from '@angular/core';

const getRequestDelay = (): number => {
	const rnd = Math.random();
	let delay = 0;
	if (rnd < 0.2) delay = 1500 * (1 - rnd);
	else delay = 200 * rnd;
	return Math.max(delay, 50);
}

const fakeRequest = (key: string): Promise<any> => {
	return new Promise((resolve, reject) => {
		const rnd = Math.random();
		setTimeout(() => {
			if (rnd > 0.05) resolve(data[key]);
			else reject('Server error: Failed fetching data');
		}, getRequestDelay());
	});
};

const data = {
	tags: ['tag1', 'tag2', 'tag3']
};

@Injectable()
export class DataService {

	constructor() { }

	public getTags(): Promise<Array<string>> {
		return fakeRequest('tags');
	}
}
export type Activity = {
	id: string;
	name: string;
	stats: {
		participants: number;
		price: number;
		accessibility: number;
	};
	type: string;
	link: string;
};

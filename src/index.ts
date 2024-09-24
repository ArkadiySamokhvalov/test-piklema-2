type Category = {
	id: number;
	name: string;
};

type Tag = {
	id: number;
	name: string;
};

enum Status {
	available = "available",
	pending = "pending",
	sold = "sold",
}

type Pet = {
	id: number;
	name: string;
	category: Category;
	photoUrls: string[];
	tags: Tag[];
	status: Status;
}

const api = "https://petstore3.swagger.io/api/v3";

const request = async (url: string) => {
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	return response.json();
}

const getPetsByStatus = async (status: Status) => {
	const response = await request(`${api}/pet/findByStatus?status=${status}`);

	return response as Pet[];
}

const log = async () => {
	console.log(await getPetsByStatus(Status.available));
}

log();
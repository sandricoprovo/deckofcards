/* eslint-disable prettier/prettier */

interface HttpResponse<T> extends Response {
	data: {
		'deck_id': number;
		remaining: number;
		shuffled: boolean;
		success: boolean;
	};
	error: string;
}

const dataService = {
	getNewDeck: async (): Promise<Response> => {
		// Main object to be returned
		// Will contain a data or error property based on response
		const response: Response = {
			data: {
				deck_id: 0,
				remaining: 0,
				shuffled: true,
				success: true,
			},
			error: '',
		};

		// Fetching data async
		try {
			// make api call
			const apiCall: Response = await fetch(
				'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
			);
			// get JSON & set it to the response object
			response.data = await apiCall.json();
			response.error = '';
		} catch (error) {
			// return an error if one occurs
			response.error = error;
			response.data = {};
		}

		// return data
		return response;
	},
};

export default dataService;

// getNewDeck: async (): any => {
// 	// Main object to be returned
// 	// Will contain a data or error property based on response
// 	const response = {
// 		data: '',
// 		error: '',
// 	};

// 	// Fetching data async
// 	try {
// 		// make api call
// 		const apiCall = await fetch(
// 			'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
// 		);
// 		// get JSON & set it to the response object
// 		response.data = await apiCall.json();
// 	} catch (error) {
// 		// return an error if one occurs
// 		response.error = error;
// 	}

// 	// return data
// 	return response;
// },

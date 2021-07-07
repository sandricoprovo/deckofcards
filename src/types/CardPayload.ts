/* eslint-disable camelcase */

import Card from './Card';

export default interface CardPayload {
	cards: [Card];
	deck_id: string;
	remaining: string;
	successful: boolean;
}

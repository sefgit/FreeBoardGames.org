const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const BingoDef: IGameDef = {
  code: 'bingo',
  name: 'Bingo',
  minPlayers: 2,
  maxPlayers: 30,
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }],
  description: 'Try your luck at Bingo!',
  descriptionTag: 'Play Bingo for free online with upto 30 persons.',
  instructions: {
    videoId: 'dJ4YDTqmhJk',
    text: instructions,
  },
  config: () => import('./config'),
  status: IGameStatus.PUBLISHED,
};

export default BingoDef;

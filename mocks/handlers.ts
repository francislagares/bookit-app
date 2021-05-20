import { rest } from 'msw';
import data from 'data/rooms.json';

const rooms = data;

export const handlers = [
  rest.get('/api/rooms', (req, res, ctx) =>
    res(ctx.status(200), ctx.delay(500), ctx.json(rooms)),
  ),

  rest.get('/api/rooms', (req, res, ctx) => {
    const roomId = req.url.searchParams.get('id');

    res(ctx.status(200), ctx.delay(500), ctx.json(roomId));
  }),
];

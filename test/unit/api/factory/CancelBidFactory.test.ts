import { BidFactory } from '../../../../src/api/factories/BidFactory';
import { LogMock } from '../../lib/LogMock';
import * as _ from 'lodash';

describe('CancelBidFactory', () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = process.env.JASMINE_TIMEOUT;
    let bidFactory;
    let req;

    const latestBid = {
        Status: 'ACTIVE'
    };
    beforeEach(() => {
        process.env.AUTH0_HOST = 'test';
        bidFactory = new BidFactory(LogMock);
        req = {
            action: 'MPA_CANCEL',
            item: 'f08f3d6e'
        };
    });

    test('Should convert the cancelBidMessage to bid', () => {
        const res = bidFactory.get(req, 8, latestBid);
        expect(res.status).toBe('CANCELLED');
    });
});

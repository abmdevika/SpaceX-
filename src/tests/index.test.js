import * as React from 'react';

import { mount } from 'enzyme';
import IndexPage from '../../pages/index';
import * as nextRouter from 'next/router';

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({
  route: '/',
  push: jest.fn(),
  query: {
    limit: 20,
    launch_year: 2006,
    launch_success: true,
    land_success: true,
  },
}));

describe('index page', () => {
  it('should render without crashing', () => {
    const wrapper = mount(
      <IndexPage
        allLaunches={[
          {
            mission_name: 'test',
            flight_number: 1,
            is_tentative: false,
            launch_date_local: '2006-03-25T10:30:00+12:00',
            launch_date_unix: 1143239400,
            launch_date_utc: '2006-03-24T22:30:00.000Z',
            launch_success: false,
            launch_year: '2006',
            links: {
              mission_patch_small:
                'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
            },
            mission_id: [],
            mission_name: 'FalconSat',
          },
        ]}
      />
    );
    expect(wrapper.find('h1').text()).toBe('SpaceX Launch Program');
  });
});

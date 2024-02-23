// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../global.d.ts" />

import { render } from '@testing-library/react';
import { Chance } from 'chance';
import { Ribbon, RibbonProps } from '../';
import * as styles from '../Ribbon.module.scss';

const chance = new Chance();

describe('component(Ribbon)', () => {
  it('should render the component', () => {
    const component = render(<Ribbon />);

    expect(component.baseElement).toBeTruthy();
  });

  describe('prop(children)', () => {
    it('should support children', () => {
      const expectedContent = chance.string();
      const component = render(<Ribbon>{expectedContent}</Ribbon>);

      expect(component.baseElement.innerHTML).toContain(expectedContent);
    });
  });

  describe('prop(color)', () => {
    it('should default to black', () => {
      const component = render(<Ribbon />);

      expect(component.getByTestId('ribbon-content').style.color).toEqual('black');
    });

    it('should support other colors', () => {
      const component = render(<Ribbon color="rebeccapurple" />);

      expect(component.getByTestId('ribbon-content').style.color).toEqual('rebeccapurple');
    });
  });

  describe('prop(backgroundColor)', () => {
    it('should default to white', () => {
      const component = render(<Ribbon />);

      expect(component.getByTestId('ribbon-content').style.backgroundColor).toEqual('white');
    });

    it('should support other colors', () => {
      const component = render(<Ribbon backgroundColor="rebeccapurple" />);

      expect(component.getByTestId('ribbon-content').style.backgroundColor).toEqual('rebeccapurple');
    });
  });

  describe('prop(position)', () => {
    it('should default to top-right', () => {
      const component = render(<Ribbon />);

      expect(component.getByTestId('ribbon').classList).toContain(styles.top);
      expect(component.getByTestId('ribbon').classList).toContain(styles.right);
    });

    const positions: NonNullable<RibbonProps['position']>[] = ['top-left', 'bottom-right', 'bottom-left'];
    for (const position of positions) {
      it(`should support '${position}'`, () => {
        const [v, h] = position.split('-');

        const component = render(<Ribbon position={position} />);

        expect(component.getByTestId('ribbon').classList).toContain(styles[v]);
        expect(component.getByTestId('ribbon').classList).toContain(styles[h]);
      });
    }
  });
});

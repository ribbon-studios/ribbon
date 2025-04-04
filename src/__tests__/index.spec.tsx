import { render } from '@testing-library/react';
import { Chance } from 'chance';
import { Ribbon } from '../';
import styles from '../Ribbon.module.css';
import { describe, expect, it } from 'vitest';

const chance = new Chance();

describe('component(Ribbon)', () => {
  it('should render the component', () => {
    const component = render(<Ribbon />);

    expect(component.baseElement).toBeTruthy();
  });

  describe('prop(children)', () => {
    it('should support children', () => {
      const expectedContent = chance.word();
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

    const positions: NonNullable<Ribbon.Props<'div'>['position']>[] = ['top-left', 'bottom-right', 'bottom-left'];
    for (const position of positions) {
      it(`should support '${position}'`, () => {
        const [v, h] = position.split('-');

        const component = render(<Ribbon position={position} />);

        expect(component.getByTestId('ribbon').classList).toContain(styles[v]);
        expect(component.getByTestId('ribbon').classList).toContain(styles[h]);
      });
    }
  });

  describe('prop(as)', () => {
    it('should default to a div', () => {
      const component = render(<Ribbon />);

      expect(component.getByTestId('ribbon-content').tagName).toEqual('DIV');
    });

    it('should support other types', () => {
      const component = render(<Ribbon as="a" href="https://tyria.ribbonstudios.com" />);

      expect(component.getByTestId('ribbon-content').tagName).toEqual('A');
      expect(component.getByTestId('ribbon-content').getAttribute('href')).toEqual('https://tyria.ribbonstudios.com');
    });
  });
});

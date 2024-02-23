// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../global.d.ts" />

import { ComponentProps, ReactNode } from 'react';
import * as styles from './Ribbon.module.scss';
import { useReadOnlyCachedState } from '@rain-cafe/react-utils';

export type RibbonProps = {
  /**
   * The contents of the ribbon
   */
  children?: ReactNode;

  /**
   * The font color
   *
   * @default 'black'
   */
  color?: string;

  /**
   * The background color
   *
   * @default 'white'
   */
  backgroundColor?: string;

  /**
   * Whether the ribbon should be aligned at the 'top' or 'bottom'
   *
   * @default 'top-right'
   */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
} & Pick<ComponentProps<'div'>, 'onClick'>;

export function Ribbon({
  children,
  backgroundColor = 'white',
  color = 'black',
  position = 'top-right',
  ...props
}: RibbonProps) {
  const [vertical, horizontal] = useReadOnlyCachedState(() => position.split('-'), [position]);

  return (
    <div {...props} className={`${styles.ribbon} ${styles[vertical]} ${styles[horizontal]}`} data-testid="ribbon">
      <div className={styles.content} style={{ backgroundColor, color }} data-testid="ribbon-content">
        {children}
      </div>
    </div>
  );
}

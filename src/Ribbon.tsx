import { ComponentProps, ElementType, ReactNode } from 'react';
import styles from './Ribbon.module.css';

export function Ribbon<T extends ElementType = 'div'>({
  as,
  children,
  backgroundColor = 'white',
  color = 'black',
  position = 'top-right',
  ...props
}: Ribbon.Props<T>) {
  const Component = as ?? 'div';
  const [vertical, horizontal] = position.split('-');

  return (
    <div className={`${styles.ribbon} ${styles[vertical]} ${styles[horizontal]}`} data-testid="ribbon">
      <Component {...props} className={styles.content} style={{ backgroundColor, color }} data-testid="ribbon-content">
        {children}
      </Component>
    </div>
  );
}

export namespace Ribbon {
  export type Props<T extends ElementType<{ onClick?: () => void }>> = {
    as?: T;

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
  } & ComponentProps<T>;
}

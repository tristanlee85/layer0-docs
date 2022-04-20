import cn from 'classnames';
import * as React from 'react';

export const IconShopifyHydrogen = React.memo<JSX.IntrinsicElements['svg']>(
  ({className}) => (
    <svg
      className={cn('inline', className)}
      baseProfile="tiny-ps"
      viewBox="0 0 177 177">
      <defs>
        <image
          width="177"
          height="177"
          id="shopify-hydrogen_svg__img1"
          href="data:image/png;base64,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"
        />
      </defs>
      <style />
      <use
        id="shopify-hydrogen_svg__Background"
        href="#shopify-hydrogen_svg__img1"
        x="0"
        y="0"
      />
    </svg>
  )
);

IconShopifyHydrogen.displayName = 'IconShopifyHydrogen';
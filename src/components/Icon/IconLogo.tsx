import * as React from 'react';
import cn from 'classnames';

export const IconLogo = React.memo<JSX.IntrinsicElements['svg']>(
  ({className}) => (
    <svg
      className={cn('inline', className)}
      width="16"
      height="13"
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect y="0.5" width="16" height="12" fill="url(#pattern1)" />
      <defs>
        <pattern
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1">
          <use
            xlinkHref="#image0_65_538"
            transform="translate(-0.025) scale(0.0138889 0.0185185)"
          />
        </pattern>
        <image
          id="image0_65_538"
          width="234"
          height="54"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
);

IconLogo.displayName = 'IconLogo';
import * as React from 'react';
import cn from 'classnames';

export const IconSvelte = React.memo<JSX.IntrinsicElements['svg']>(
  ({className}) => (
    <svg
      className={cn('inline', className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.8048 4.3457C17.7124 1.44167 13.5799 0.580908 10.5919 2.42696L5.34426 5.67018C3.91084 6.54465 2.92352 7.9641 2.62441 9.58045C2.37409 10.927 2.59411 12.316 3.24964 13.5276C2.80045 14.1883 2.49409 14.9305 2.34906 15.7093C2.04706 17.3567 2.4421 19.0526 3.44502 20.4142C5.53786 23.3185 9.67038 24.1789 12.6579 22.3329L17.9056 19.0897C19.3391 18.2154 20.3264 16.7959 20.6254 15.1795C20.8757 13.8329 20.6559 12.444 20.0006 11.2322C20.4497 10.5715 20.7559 9.82932 20.9008 9.05057C21.203 7.40317 20.808 5.70719 19.8049 4.3457"
        fill="#FF3E00"
      />
      <path
        d="M10.0786 20.6904C8.38655 21.117 6.59976 20.4748 5.60329 19.0818C4.99988 18.2628 4.76218 17.2426 4.94387 16.2516C4.97433 16.0905 5.01624 15.9317 5.06931 15.7763L5.16817 15.484L5.4371 15.6755C6.05818 16.118 6.75262 16.4545 7.49047 16.6704L7.68557 16.7278L7.6676 16.9166C7.64376 17.1852 7.71876 17.4533 7.87931 17.6734C8.17919 18.093 8.71717 18.2866 9.22674 18.1584C9.34082 18.1288 9.44955 18.0824 9.54916 18.0209L14.7985 14.7771C15.0582 14.6186 15.2372 14.3614 15.2917 14.0685C15.3461 13.7699 15.2745 13.4625 15.093 13.2155C14.7929 12.7958 14.2548 12.6021 13.745 12.7303C13.6311 12.7598 13.5225 12.8061 13.423 12.8676L11.4199 14.1058C11.0905 14.3089 10.7311 14.4619 10.354 14.5597C8.66198 14.9863 6.87522 14.3441 5.87877 12.9511C5.27533 12.1321 5.03762 11.1119 5.21935 10.1209C5.39923 9.14866 5.9932 8.29488 6.85552 7.76906L12.1044 4.52498C12.4339 4.32156 12.7936 4.1683 13.171 4.07053C14.863 3.64394 16.6498 4.28618 17.6462 5.6791C18.2496 6.4981 18.4873 7.51831 18.3056 8.50932C18.2751 8.67035 18.2331 8.82916 18.1802 8.98465L18.0813 9.27695L17.8126 9.0857C17.1915 8.64292 16.497 8.30632 15.759 8.09042L15.5639 8.033L15.5819 7.84419C15.6055 7.57561 15.5306 7.30757 15.3702 7.08739C15.0703 6.6678 14.5323 6.47418 14.0228 6.60243C13.9087 6.632 13.8 6.67834 13.7003 6.73984L8.45101 9.98378C8.19134 10.1422 8.01246 10.3994 7.9582 10.6922C7.90346 10.9909 7.97494 11.2983 8.15656 11.5453C8.45662 11.965 8.99472 12.1587 9.5045 12.0306C9.61856 12.0009 9.72728 11.9546 9.82691 11.8932L11.8298 10.6554C12.159 10.452 12.5184 10.2988 12.8956 10.2011C14.5875 9.77453 16.3743 10.4168 17.3708 11.8097C17.9742 12.6287 18.2119 13.6489 18.0302 14.6399C17.8502 15.6122 17.2563 16.4661 16.394 16.9921L11.1451 20.2359C10.8156 20.4394 10.4559 20.5926 10.0785 20.6904"
        fill="white"
      />
    </svg>
  )
);

IconSvelte.displayName = 'IconSvelte';

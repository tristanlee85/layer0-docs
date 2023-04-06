import Link from 'next/link';
import styled from 'styled-components';

import {getChildrenRoutesFromSidebarMenuItems} from '../../utils/getChildrenRoutesFromSidebarMenuItems';

import useConditioning from 'utils/hooks/useConditioning';

const StyledFrameworks = styled.div`
  .framework-lists {
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(174px, 1fr));
    gap: 20px;
  }

  .icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .framework-list__item {
    .framework-link {
      display: flex;
      align-items: center;
      gap: 10px;
      border: 1px solid var(--hr-secondary);
      padding: 8px;
      border-radius: 4px;
      text-decoration: none;
      color: inherit;
    }
  }
`;

export default function Frameworks() {
  const {version} = useConditioning();
  const parentPath = 'framework-guides';
  let allRoutes = getChildrenRoutesFromSidebarMenuItems(parentPath);

  // TODO - remove this when we have a version 7 support for other frameworks
  if (version.selectedVersion === '7') {
    allRoutes = allRoutes.slice(0, 3);
  }

  return (
    <StyledFrameworks>
      <ul className="framework-lists">
        {allRoutes.map((route) => (
          <li key={route.path} className="framework-list__item">
            <Link href={version.toVersionedPath(route.path)} passHref>
              <a className="framework-link">
                <div className="icon" id="light-theme">
                  {route.icon ? route.icon : null}
                </div>
                <div className="icon" id="dark-theme">
                  {route.iconDark ? route.iconDark : null}
                </div>
                <span className="link-text">{route.title}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </StyledFrameworks>
  );
}

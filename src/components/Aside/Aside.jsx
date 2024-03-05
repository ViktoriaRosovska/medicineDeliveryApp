import { AsideContainer, AsideHeader, AsideListItem, AsideNavLink } from "./Aside.style";

export default function Aside() {
  return (
    <>
      <AsideContainer>
        <AsideHeader>Shops:</AsideHeader>
        <ul>
          <AsideListItem>
            <AsideNavLink to="#" className="activeShop">
              Drugs24
            </AsideNavLink>
          </AsideListItem>
          <AsideListItem>
            <AsideNavLink to="#">Pharmacy</AsideNavLink>
          </AsideListItem>

          <AsideListItem>
            <AsideNavLink to="#">etc...</AsideNavLink>
          </AsideListItem>
          <AsideListItem>
            <AsideNavLink href="#">etc...</AsideNavLink>
          </AsideListItem>
          <AsideListItem>
            <AsideNavLink href="#">etc...</AsideNavLink>
          </AsideListItem>
        </ul>
      </AsideContainer>
    </>
  );
}

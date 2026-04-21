import { ROUTES } from "@/app/site.config";
import { AvatarDropdown } from "@/components/ui";
import NavActions from "./NavActions";
import NavMenu from "./NavMenu";
import "./styles.scss";
import { getStrapiData } from "@/lib/strapi";

const Navbar = async () => {
  const { data: BUSINESS_INFO } = await getStrapiData(
    "business-info?fields[0]=legalName&fields[1]=country&fields[2]=city&populate[social_links]=*&populate[cv][fields][0]=url",
  );
  console.log({ BUSINESS_INFO });
  return (
    <nav className="navbar">
      <div className="padding-global">
        <div className="container">
          <div className="navbar__layout">
            <AvatarDropdown data={BUSINESS_INFO} />
            <NavMenu links={ROUTES} />
            <NavActions />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

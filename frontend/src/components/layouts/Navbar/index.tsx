import { ROUTES } from "@/app/site.config";
import { AvatarDropdown } from "@/components/ui";
import NavActions from "./NavActions";
import NavMenu from "./NavMenu";
import "./styles.scss";
import { getBusinessInfo } from "@/lib/db";

const Navbar = async () => {
	const BUSINESS_INFO = await getBusinessInfo();

	return (
		<nav className="navbar">
			<div className="padding-global">
				<div className="container">
					<div className="navbar__layout">
						<AvatarDropdown data={BUSINESS_INFO} />
						<NavMenu links={ROUTES} />
						<NavActions data={BUSINESS_INFO} />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

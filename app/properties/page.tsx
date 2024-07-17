import EmptyState from "../components/EmptyState";

import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";
import PropertiesClient from "./PropertiesClient";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subTitle="Please login" />;
  }

  const listings = await getListings({
    userId: currentUser.id,
  });

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No properties found"
        subTitle="Look like you have no properties."
      />
    );
  }

  return <PropertiesClient listings={listings} currentUser={currentUser} />;
};

export default PropertiesPage;

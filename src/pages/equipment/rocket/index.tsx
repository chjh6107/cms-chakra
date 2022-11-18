import { gql, useQuery } from "@apollo/client";

const EquipmentRocketIndexPage = () => {
  const getQuery = gql`
    query Rockets($limit: Int, $offset: Int) {
      rockets(limit: $limit, offset: $offset) {
        active
        boosters
        company
      }
    }
  `;

  const { data } = useQuery(getQuery);

  console.log(data);

  return <div>EquipmentRocketIndexPage</div>;
};
export default EquipmentRocketIndexPage;

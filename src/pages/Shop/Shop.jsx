import { DrugCart } from "../../components/DrugCart/DrugCart";
import Aside from "../../components/Aside/Aside";
import { DrugCartWrapper } from "./Shop.style";
import { FlexContainer, PageWrapper } from "../../App.style";
// import drugs from "../../../drug.json";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDrugs24 } from "../../redux/drugs/drugsOperations";
import { selectDrugs24, selectIsLoading } from "../../redux/drugs/drugsSelectors";
import Loader from "../../components/Loader/Loader";
export default function Shop() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDrugs24());
  }, [dispatch]);
  const drugs = useSelector(selectDrugs24).drugs.drugs;
  console.log(drugs);
  const isLoading = useSelector(selectIsLoading);
  return (
    <FlexContainer>
      <Aside />
      <PageWrapper>
        {isLoading ? (
          <Loader />
        ) : (
          <DrugCartWrapper>
            {drugs &&
              drugs.map((item) => {
                return <DrugCart key={item._id} item={item} />;
              })}
          </DrugCartWrapper>
        )}
      </PageWrapper>
    </FlexContainer>
  );
}

import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectProductsPage = (state: AppRootState) => state.productsPage;

export const retrieveRestaurant = createSelector(
  selectProductsPage,
  (ProductsPage) => ProductsPage.restaurant
);

export const retrieveChosenProduct = createSelector(
  selectProductsPage,
  (ProductPage) => ProductPage.chosenProduct
);

export const retrieveProducts = createSelector(
  selectProductsPage,
  (ProductsPage) => ProductsPage.products
);

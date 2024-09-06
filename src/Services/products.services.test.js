import { waitFor } from "@testing-library/react";
import { productsMock } from "../Components/__mocks__/ProductsMockData";
import { getAllProducts } from "./products.services"

test("Should return all the products promise when user call getAllProducts", async () => {
    const products = getAllProducts();
    waitFor(() => {
        expect(products).toBe(productsMock);
    });
})
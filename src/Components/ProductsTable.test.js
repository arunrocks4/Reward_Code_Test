import { render, screen } from '@testing-library/react';
import { productsMock } from './__mocks__/ProductsMockData';
import ProductsTable from './ProductsTable';

test('renders ProductsTable Component without data', () => {
  render(<ProductsTable />);
  const productsTable = screen.getByTestId("nodatafound");
  expect(productsTable).toBeInTheDocument();
});

test('renders ProductsTable Component with data', () => {
  render(<ProductsTable products={productsMock}/>);
  const productsTable = screen.getByTestId("productstable");
  expect(productsTable).toBeInTheDocument();
});
